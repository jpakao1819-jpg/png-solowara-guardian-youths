import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(20, "Please write at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(210,58%,10%) 0%, hsl(208,55%,22%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            Reach Out
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Questions, partnership proposals, media inquiries, or just want to say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display font-bold text-2xl mb-6" style={{ color: "hsl(210, 35%, 15%)" }}>
                Get in Touch
              </h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Papua New Guinea, Pacific Region", href: null },
                  { icon: Mail, label: "Email", value: "info@syginc.org", href: "mailto:info@syginc.org" },
                  { icon: Phone, label: "Phone", value: "+675 XXX XXXX", href: "tel:+675" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm"
                    data-testid={`contact-${label.toLowerCase()}`}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "hsl(28, 72%, 50%)" }}>
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="text-sm hover:underline" style={{ color: "hsl(208, 58%, 28%)" }}>{value}</a>
                      ) : (
                        <span className="text-sm" style={{ color: "hsl(208, 18%, 35%)" }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-base mb-4" style={{ color: "hsl(210, 35%, 15%)" }}>
                Follow Us
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                    style={{ backgroundColor: "hsl(208, 58%, 28%)" }}
                    data-testid={`link-social-${label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
              <h3 className="font-display font-bold text-white text-base mb-2">Media Inquiries</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Journalists and media organizations covering Pacific conservation are welcome to request interviews, 
                photos, or data. We respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center" data-testid="status-contact-submitted">
                  <CheckCircle className="w-16 h-16 mb-4" style={{ color: "hsl(145, 42%, 32%)" }} />
                  <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm" style={{ color: "hsl(208, 18%, 45%)" }}>
                    Thank you for reaching out. We aim to respond within 2–3 business days.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold text-xl mb-6" style={{ color: "hsl(210, 35%, 15%)" }}>
                    Send Us a Message
                  </h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl><Input placeholder="Full name" data-testid="input-name" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl><Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl><Input placeholder="What is this about?" data-testid="input-subject" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message..." rows={6} data-testid="input-message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.01]"
                        style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
                        data-testid="button-submit-contact"
                      >
                        Send Message
                      </button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
