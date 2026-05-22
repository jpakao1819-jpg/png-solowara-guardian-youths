import { DollarSign, Award, Building2, Users, CheckCircle, Heart } from "lucide-react";
import { Link } from "wouter";

const sources = [
  { icon: Award, title: "Grants", desc: "Competitive grants from environmental foundations, Pacific regional bodies, and international conservation organizations.", color: "hsl(208, 58%, 28%)" },
  { icon: Building2, title: "Sponsorships", desc: "Partnerships with ethical businesses who share our values and want to invest in the future of the Pacific.", color: "hsl(145, 42%, 28%)" },
  { icon: Heart, title: "Individual Donors", desc: "Pacific diaspora and international supporters who contribute monthly or one-time gifts that fund core operations.", color: "hsl(28, 72%, 50%)" },
  { icon: Users, title: "Community Fundraising", desc: "Events, campaigns, and community-led initiatives that build local ownership of our conservation mission.", color: "hsl(208, 52%, 40%)" },
];

const principles = [
  { title: "Full Financial Transparency", desc: "Annual reports and financial statements are published and available to all stakeholders." },
  { title: "Community-Directed Spending", desc: "A majority of all funds flow directly to on-the-ground programs, not administrative overhead." },
  { title: "No Compromising Partnerships", desc: "We do not accept funding from extractive industries, polluters, or organizations whose interests conflict with conservation." },
  { title: "Independent Auditing", desc: "Our finances are reviewed annually by an independent auditor to verify accuracy and accountability." },
  { title: "Long-term Sustainability", desc: "We are building diverse funding streams to reduce dependence on any single funder." },
  { title: "Impact-Linked Reporting", desc: "Funders receive regular impact reports tying every dollar to measurable conservation outcomes." },
];

export default function Funding() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(140,60%,12%) 0%, hsl(208,55%,22%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            Financial Integrity
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Funding &amp; Financial Strength</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We are funded by people who believe in the Pacific. We honor that trust with radical transparency.
          </p>
        </div>
      </section>

      {/* Funding sources */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              How We're Funded
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Our Funding Sources
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "hsl(208, 18%, 45%)" }}>
              Diversity of funding is a feature, not a vulnerability. It means no single funder controls our direction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sources.map((src) => {
              const Icon = src.icon;
              return (
                <div key={src.title} className="rounded-2xl p-8 text-white"
                  style={{ backgroundColor: src.color }}
                  data-testid={`card-source-${src.title.toLowerCase()}`}>
                  <Icon className="w-10 h-10 mb-4 opacity-80" />
                  <h3 className="font-display font-bold text-xl mb-3">{src.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{src.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accountability */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Our Commitment
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Financial Accountability Principles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm"
                data-testid={`card-principle-${i}`}>
                <CheckCircle className="w-5 h-5 mt-1 shrink-0" style={{ color: "hsl(145, 42%, 28%)" }} />
                <div>
                  <h3 className="font-display font-bold text-sm mb-1" style={{ color: "hsl(210, 35%, 15%)" }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(208, 18%, 45%)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section
        className="py-24 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(208,58%,18%) 0%, hsl(15,80%,30%) 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <DollarSign className="w-16 h-16 mx-auto mb-6 opacity-60" />
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-6">
            Every kina counts.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Your contribution — however large or small — directly funds beach clean-ups, mangrove planting, 
            youth training, and advocacy work in Papua New Guinea's most vulnerable coastal communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
              data-testid="button-donate-now"
            >
              Donate Now <Heart className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:bg-white/20"
              style={{ border: "2px solid rgba(255,255,255,0.4)" }}
              data-testid="button-sponsor-inquiry"
            >
              Sponsorship Inquiries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
