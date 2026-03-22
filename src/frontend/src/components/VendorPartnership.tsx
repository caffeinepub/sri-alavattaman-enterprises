import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitVendorInquiry } from "@/hooks/useQueries";
import { CheckCircle2, Loader2, Mail, Phone, Recycle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function VendorPartnership() {
  const { mutate, isPending, isSuccess, isError } = useSubmitVendorInquiry();
  const [form, setForm] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    materialType: "",
    monthlyVolume: "",
    message: "",
  });

  const set = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      {
        businessName: form.businessName,
        contactPerson: form.contactPerson,
        email: form.email,
        phone: form.phone,
        materialType: form.materialType || "PET #1",
        monthlyVolume: BigInt(Number.parseInt(form.monthlyVolume) || 0),
        message: form.message,
        timestamp: BigInt(Date.now()),
      },
      {
        onSuccess: () => {
          toast.success(
            "Inquiry submitted! We'll get back to you within 24 hours.",
          );
          setForm({
            businessName: "",
            contactPerson: "",
            email: "",
            phone: "",
            materialType: "",
            monthlyVolume: "",
            message: "",
          });
        },
        onError: () => toast.error("Failed to submit. Please try again."),
      },
    );
  };

  return (
    <section id="vendor-form" className="py-20 bg-brand-mint">
      <div className="max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            Work With Us
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900">
            Vendor & Supplier Partnership
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto mt-4" />
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-display font-bold uppercase tracking-wide text-gray-900">
                  Become a Reliable Supplier
                </CardTitle>
                <p className="text-gray-500 text-sm">
                  Fill in your details and we'll connect you with our vendor
                  team.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Business Name *
                      </Label>
                      <Input
                        required
                        value={form.businessName}
                        onChange={(e) => set("businessName", e.target.value)}
                        placeholder="Acme Recycling Co."
                        data-ocid="vendor.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Contact Person *
                      </Label>
                      <Input
                        required
                        value={form.contactPerson}
                        onChange={(e) => set("contactPerson", e.target.value)}
                        placeholder="John Smith"
                        data-ocid="vendor.input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
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
                        data-ocid="vendor.input"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Phone
                      </Label>
                      <Input
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="+91 9444010383"
                        data-ocid="vendor.input"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Material Type
                      </Label>
                      <Select
                        value={form.materialType}
                        onValueChange={(v) => set("materialType", v)}
                      >
                        <SelectTrigger data-ocid="vendor.select">
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PET #1">
                            PET #1 — Clear bottles
                          </SelectItem>
                          <SelectItem value="HDPE #2">
                            HDPE #2 — Jugs / caps
                          </SelectItem>
                          <SelectItem value="PP #5">
                            PP #5 — Caps / closures
                          </SelectItem>
                          <SelectItem value="Mixed">Mixed plastics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                        Monthly Volume (kg)
                      </Label>
                      <Input
                        type="number"
                        value={form.monthlyVolume}
                        onChange={(e) => set("monthlyVolume", e.target.value)}
                        placeholder="e.g. 5000"
                        data-ocid="vendor.input"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-semibold uppercase tracking-wide text-gray-700 mb-1 block">
                      Message
                    </Label>
                    <Textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      placeholder="Tell us about your business and supply capacity..."
                      data-ocid="vendor.textarea"
                    />
                  </div>
                  {isSuccess && (
                    <p
                      className="text-sm text-brand-green font-medium"
                      data-ocid="vendor.success_state"
                    >
                      ✓ Inquiry submitted successfully!
                    </p>
                  )}
                  {isError && (
                    <p
                      className="text-sm text-red-600"
                      data-ocid="vendor.error_state"
                    >
                      Failed to submit. Please try again.
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-brand-green hover:bg-brand-green-dark text-white uppercase tracking-widest text-sm"
                    data-ocid="vendor.submit_button"
                  >
                    {isPending && (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    {isPending ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <Card className="shadow-card border-0">
              <CardContent className="pt-6">
                <h3 className="font-display font-bold uppercase tracking-wide text-gray-900 mb-3">
                  Partnership Benefits
                </h3>
                <ul className="space-y-3">
                  {[
                    "Guaranteed volume offtake agreements",
                    "Competitive, market-linked pricing",
                    "Dedicated account manager",
                    "Flexible pickup or drop-off logistics",
                    "Fast payment processing (net-15 terms)",
                    "Compliance & certification support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card border-0 bg-brand-green text-white">
              <CardContent className="pt-6">
                <Recycle className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-display font-bold uppercase tracking-wide mb-2">
                  Ready to Start?
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our vendor onboarding team responds within 24 hours. Join 500+
                  partners already supplying quality recyclables through the SAE
                  network.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+91 9444010383</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>srialavattaman@gmail.com</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
