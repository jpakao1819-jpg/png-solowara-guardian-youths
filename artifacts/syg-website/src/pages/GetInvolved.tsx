import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle, Users, Handshake, Heart } from "lucide-react";

const volunteerSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  role: z.string().min(1, "Please select a volunteer role"),
  location: z.string().min(2, "Please enter your location"),
  message: z.string().optional(),
});

type VolunteerForm = z.infer<typeof volunteerSchema>;

function VolunteerSignup() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<VolunteerForm>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { name: "", email: "", phone: "", role: "", location: "", message: "" },
  });

  const onSubmit = (data: VolunteerForm) => {
    console.log("Volunteer application:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center" data-testid="status-submitted">
        <CheckCircle className="w-16 h-16 mb-4" style={{ color: "hsl(145, 42%, 32%)" }} />
        <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>Application Received!</h3>
        <p className="text-sm" style={{ color: "hsl(208, 18%, 45%)" }}>
          Thank you for volunteering. We'll be in touch within 3–5 business days.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-volunteer">
        <div className="grid sm:grid-cols-2 gap-5">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl><Input placeholder="Your full name" data-testid="input-name" {...field} /></FormControl>
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
        <div className="grid sm:grid-cols-2 gap-5">
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (optional)</FormLabel>
              <FormControl><Input placeholder="+675 XXX XXXX" data-testid="input-phone" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="role" render={({ field }) => (
            <FormItem>
              <FormLabel>Volunteer Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger data-testid="select-role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="field">Field Volunteer</SelectItem>
                  <SelectItem value="education">Education Facilitator</SelectItem>
                  <SelectItem value="digital">Digital Advocate</SelectItem>
                  <SelectItem value="admin">Administrative Support</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />
        </div>
        <FormField control={form.control} name="location" render={({ field }) => (
          <FormItem>
            <FormLabel>Your Location (Province / Country)</FormLabel>
            <FormControl><Input placeholder="e.g. Madang Province, PNG" data-testid="input-location" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="message" render={({ field }) => (
          <FormItem>
            <FormLabel>Tell us about yourself (optional)</FormLabel>
            <FormControl>
              <Textarea placeholder="Your background, skills, and why you want to get involved..." rows={4} data-testid="input-message" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:scale-[1.01]"
          style={{ backgroundColor: "hsl(208, 58%, 28%)" }}
          data-testid="button-submit-volunteer"
        >
          Submit Application
        </button>
      </form>
    </Form>
  );
}

export default function GetInvolved() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(15,80%,18%) 0%, hsl(208,58%,20%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            Take Action
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Get Involved</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            The Pacific needs its people. Here's how you can join the fight.
          </p>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Users, title: "Volunteer", desc: "Join our growing team of field volunteers, educators, and digital advocates. No conservation background required — just passion and commitment.", color: "hsl(208, 58%, 28%)", href: "#volunteer" },
              { icon: Handshake, title: "Partner", desc: "Organizations, businesses, and institutions can partner with SYG INC to co-deliver programs, share resources, and amplify impact.", color: "hsl(145, 42%, 28%)", href: "#partner" },
              { icon: Heart, title: "Donate", desc: "Your financial contribution goes directly to restoration, education, and community programs. Every amount makes a real difference.", color: "hsl(28, 72%, 50%)", href: "#donate" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.title} href={item.href} className="block rounded-2xl p-8 text-white transition-all hover:scale-[1.02] hover:shadow-lg"
                  style={{ backgroundColor: item.color }}
                  data-testid={`card-option-${item.title.toLowerCase()}`}>
                  <Icon className="w-10 h-10 mb-4" />
                  <h3 className="font-display font-bold text-2xl mb-3">{item.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </a>
              );
            })}
          </div>

          {/* Volunteer Form */}
          <div id="volunteer" className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
                Volunteer Sign-up
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl" style={{ color: "hsl(210, 35%, 15%)" }}>
                Ready to join us?
              </h2>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <VolunteerSignup />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Donation */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Partnership */}
          <div id="partner" className="bg-white rounded-2xl p-10 shadow-sm">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "hsl(145, 42%, 28%)" }}>
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-4" style={{ color: "hsl(210, 35%, 15%)" }}>Partner With Us</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "hsl(208, 18%, 40%)" }}>
              We partner with government agencies, academic institutions, local businesses, and international 
              organizations to co-design and co-deliver conservation programs. Partnerships can include 
              shared staffing, co-funding, technical support, or advocacy alignment.
            </p>
            <ul className="space-y-3 mb-8">
              {["Program co-design", "Resource sharing", "Joint advocacy", "Technical expertise exchange"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "hsl(208, 18%, 35%)" }}>
                  <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "hsl(145, 42%, 28%)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "hsl(145, 42%, 28%)" }}
              data-testid="button-partnership-contact"
            >
              Get in Touch
            </a>
          </div>

          {/* Donation */}
          <div id="donate" className="rounded-2xl p-10 text-white" style={{ backgroundColor: "hsl(28, 72%, 50%)" }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-4">Donate</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              SYG INC is a registered nonprofit. Your donation supports beach clean-ups, mangrove rehabilitation, 
              youth training programs, and advocacy campaigns across Papua New Guinea's coastlines.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["K50", "K100", "K250"].map((amt) => (
                <button
                  key={amt}
                  className="py-3 rounded-xl font-display font-bold text-lg bg-white/20 hover:bg-white/30 transition-colors text-white"
                  data-testid={`button-amount-${amt}`}
                >
                  {amt}
                </button>
              ))}
            </div>
            <p className="text-xs text-white/60 mb-6">
              All donations are acknowledged with a receipt. International currency accepted. Contact us for wire transfer details.
            </p>
            <a
              href="mailto:info@syginc.org?subject=Donation Inquiry"
              className="inline-block w-full text-center px-6 py-4 rounded-xl font-semibold transition-all hover:scale-[1.01]"
              style={{ backgroundColor: "white", color: "hsl(15, 90%, 45%)" }}
              data-testid="button-donate-email"
            >
              Contact Us to Donate
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
