import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContactMessage } from "@/hooks/useQueries";
import { Loader2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const { mutate, isPending, isSuccess, isError } = useSubmitContactMessage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const set = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { ...form, timestamp: BigInt(Date.now()) },
      {
        onSuccess: () => {
          toast.success(
            "Enquiry saved! WhatsApp is opening — please press Send to deliver your message.",
          );
          const waText = encodeURIComponent(
            `New Enquiry from ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`,
          );
          window.open(`https://wa.me/919444010383?text=${waText}`, "_blank");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        onError: () => toast.error("Could not send message. Please try again."),
      },
    );
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto mt-4" />
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              {
                icon: MapPin,
                label: "Address",
                value:
                  "112/123, Ottraivadai Street, Sorakayapet, Pallipattu Tk, Thiruvallur Dt, Pin 631208",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "94440 10383 / 96779 60618",
              },
              { icon: Mail, label: "Email", value: "srialavattaman@gmail.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">
                Business Hours
              </p>
              <p className="text-gray-600 text-sm">
                Monday – Saturday: 9:00 AM – 6:00 PM
              </p>
              <p className="text-gray-600 text-sm">Sunday: Closed</p>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/919444010383"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.button"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-card border-0">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Your Name *
                      </Label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Full name"
                        data-ocid="contact.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Email *
                      </Label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@company.com"
                        data-ocid="contact.input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                      Subject *
                    </Label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(e) => set("subject", e.target.value)}
                      placeholder="How can we help?"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                      Message *
                    </Label>
                    <Textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Your message..."
                      data-ocid="contact.textarea"
                    />
                  </div>
                  {isSuccess && (
                    <p
                      className="text-sm text-brand-green font-medium"
                      data-ocid="contact.success_state"
                    >
                      ✓ Message sent successfully!
                    </p>
                  )}
                  {isError && (
                    <p
                      className="text-sm text-red-600"
                      data-ocid="contact.error_state"
                    >
                      Could not send message. Please try again.
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white uppercase tracking-widest text-sm"
                    data-ocid="contact.submit_button"
                  >
                    {isPending && (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
