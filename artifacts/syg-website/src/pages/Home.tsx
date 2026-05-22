import { Link } from "wouter";
import { ArrowRight, Waves, TreePine, Users, Globe, ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Youth Engaged" },
  { value: "12+", label: "Communities Reached" },
  { value: "50+", label: "Beach Clean-ups" },
  { value: "3,000+", label: "Trees Planted" },
];

const pillars = [
  {
    icon: Waves,
    title: "Marine Conservation",
    desc: "Restoring coral reefs and protecting the Bismarck Sea's rich biodiversity through hands-on cleanup campaigns and restoration efforts.",
    color: "hsl(208, 58%, 28%)",
  },
  {
    icon: TreePine,
    title: "Mangrove Rehabilitation",
    desc: "Replanting mangrove forests along PNG's coastlines — nature's most powerful buffers against erosion, flooding, and climate extremes.",
    color: "hsl(145, 42%, 28%)",
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    desc: "Training and mobilizing coastal youth to become the next generation of environmental advocates, scientists, and community leaders.",
    color: "hsl(28, 72%, 48%)",
  },
  {
    icon: Globe,
    title: "Climate Advocacy",
    desc: "Amplifying Pacific voices on the global stage, pushing for policy change and sustainable practices at every level of governance.",
    color: "hsl(208, 52%, 40%)",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(210,58%,10%) 0%, hsl(208,58%,18%) 40%, hsl(208,52%,25%) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 80%, hsl(140,60%,30%) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, hsl(15,90%,55%) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
          style={{
            background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='white' d='M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z'/%3E%3C/svg%3E\") center/cover no-repeat",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <Waves className="w-4 h-4" style={{ color: "hsl(28, 72%, 58%)" }} />
            <span>Papua New Guinea &bull; Pacific Ocean</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 text-balance">
            Protecting Our Seas,{" "}
            <span style={{ color: "hsl(28, 72%, 58%)" }}>Empowering</span>{" "}
            Our Future
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Solwara Youth Guardian is a youth-led environmental movement rooted in Papua New Guinea —
            fighting for the oceans, mangroves, and communities that sustain Pacific life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "hsl(208, 58%, 28%)" }}
              data-testid="button-learn-more"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
              data-testid="button-get-involved"
            >
              Get Involved
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/20"
              style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white" }}
              data-testid="button-donate"
            >
              Donate
            </Link>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-white/40" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
            {stats.map((s) => (
              <div key={s.label} data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="font-display font-black text-4xl sm:text-5xl mb-1">{s.value}</div>
                <div className="text-sm text-white/70 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Who We Are
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 leading-tight" style={{ color: "hsl(210, 35%, 15%)" }}>
              Born from the sea,<br />built for its future
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(208, 18%, 35%)" }}>
              Solwara Youth Guardian Inc (SYG INC) was founded by young Papua New Guineans who grew up fishing in the Bismarck Sea, 
              swimming in coral gardens, and watching those same ecosystems deteriorate under the weight of pollution, climate change, 
              and neglect.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "hsl(208, 18%, 35%)" }}>
              We are not waiting for someone else to fix it. We are organizing youth, planting mangroves, cleaning beaches, 
              and building a movement that will outlast any single generation.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold transition-colors"
              style={{ color: "hsl(208, 58%, 28%)" }}
              data-testid="link-about-more"
            >
              Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]"
              style={{
                background: "linear-gradient(135deg, hsl(208,52%,32%) 0%, hsl(145,42%,28%) 60%, hsl(208,50%,20%) 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Waves className="w-20 h-20 mx-auto mb-4 opacity-40" />
                  <p className="font-display font-bold text-2xl opacity-60">Bismarck Sea</p>
                  <p className="text-sm opacity-40 mt-1">Papua New Guinea</p>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
            >
              <div className="text-white text-center">
                <div className="font-display font-black text-2xl">2020</div>
                <div className="text-xs font-medium opacity-80">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              What We Do
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Four Pillars of Action
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  data-testid={`card-pillar-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: p.color }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-24 px-4 sm:px-6 text-center text-white"
        style={{
          background: "linear-gradient(135deg, hsl(140,60%,20%) 0%, hsl(208,58%,20%) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl sm:text-5xl mb-6">
            The ocean needs you now.
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Join hundreds of Pacific youth already fighting to protect the sea that sustains us all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
              data-testid="button-cta-volunteer"
            >
              Volunteer Today <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:bg-white/20"
              style={{ border: "2px solid rgba(255,255,255,0.4)" }}
              data-testid="button-cta-contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
