import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const validateGermanPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/[\s\-]/g, "");
  const validPrefixes = ["015", "016", "017", "+4915", "+4916", "+4917", "004915", "004916", "004917"];
  const digitsOnly = cleaned.replace(/^\+/, "");
  if (!/^\+?\d+$/.test(cleaned)) return false;
  if (digitsOnly.length < 10 || digitsOnly.length > 14) return false;
  return validPrefixes.some((p) => cleaned.startsWith(p));
};

const BookingSection = () => {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [timeError, setTimeError] = useState("");
  const { toast } = useToast();

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const phone = formData.get("Telefonnummer") as string;

    if (!validateGermanPhone(phone)) {
      setPhoneError("Bitte geben Sie eine gültige deutsche Mobilnummer ein. Beispiel: 0151 23456789");
      return;
    }
    setPhoneError("");

    const time = formData.get("Wunschzeit") as string;
    if (time) {
      if (time < "09:00" || time > "19:00") {
        setTimeError("Bitte wählen Sie eine Zeit innerhalb unserer Öffnungszeiten: Mo–Fr: 09:00–19:00, Sa: 09:00–18:00");
        return;
      }
    }
    setTimeError("");

    formData.append("Dienstleistung", service);
    if (!service) return;

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setService("");
        toast({
          title: "✅ Vielen Dank!",
          description: "Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="termin" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="fade-in text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gold" />
            <h2 className="font-serif text-3xl md:text-4xl text-burgundy font-bold">
              Termin buchen
            </h2>
            <div className="h-px w-12 bg-gold" />
          </div>
          <p className="text-muted-foreground text-sm tracking-wider uppercase font-sans">
            Wir freuen uns auf Ihren Besuch
          </p>
        </div>

        {status === "success" &&
        <div className="fade-in max-w-xl mx-auto mb-6 flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-700">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-sans">Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.</p>
          </div>
        }

        {status === "error" &&
        <div className="fade-in max-w-xl mx-auto mb-6 flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-destructive">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm font-sans">Senden fehlgeschlagen. Bitte versuche es erneut.</p>
          </div>
        }

        <form
          onSubmit={handleSubmit}
          className="fade-in w-full max-w-xl mx-auto border border-gold/20 rounded-lg p-8 md:p-12 bg-card space-y-6">

          <input type="hidden" name="access_key" value="7a961d35-3867-446c-ae93-78ecf701be1b" />
          <input type="hidden" name="subject" value="Neue Terminanfrage" />

          <div className="space-y-2">
            <Label htmlFor="name" className="font-sans text-sm text-foreground">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              name="Name"
              placeholder="Ihr vollständiger Name"
              required />

          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-sans text-sm text-foreground">
              Telefonnummer <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              name="Telefonnummer"
              type="tel"
              placeholder="+49 151 23456789"
              required />

            {phoneError &&
            <p className="text-sm text-destructive font-sans">{phoneError}</p>
            }
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="font-sans text-sm text-foreground">
              Dienstleistung <span className="text-destructive">*</span>
            </Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger id="service">
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beratung">Beratung</SelectItem>
                <SelectItem value="Maniküre">Maniküre</SelectItem>
                <SelectItem value="Pediküre">Pediküre</SelectItem>
                <SelectItem value="Andere">Andere</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="font-sans text-sm text-foreground">
                Wunschtermin
              </Label>
              <Input
                id="date"
                name="Wunschtermin"
                type="date"
                min={today} />

            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="font-sans text-sm text-foreground">
                Wunschzeit
              </Label>
              <Input
                id="time"
                name="Wunschzeit"
                type="time" />

              {timeError && <p className="text-sm text-destructive font-sans">{timeError}</p>}
              <p className="text-xs text-muted-foreground font-sans">Öffnungszeiten: Mo–Fr: 09:00–19:00, Sa: 09:00–18:00</p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-sans text-sm text-foreground">
              Nachricht <span className="text-xs text-muted-foreground">(optional)</span>
            </Label>
            <Textarea
              id="message"
              name="Nachricht"
              placeholder="Ihre Nachricht an uns…"
              rows={4} />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-burgundy-dark font-semibold px-10 py-4 rounded-sm tracking-widest uppercase text-sm transition-all duration-300 hover:shadow-[0_0_30px_hsl(43_72%_52%/0.3)] font-sans disabled:opacity-50">

            <Send className="w-4 h-4" />
            {loading ? "Wird gesendet…" : "Senden"}
          </button>
        </form>
      </div>
    </section>);

};

export default BookingSection;