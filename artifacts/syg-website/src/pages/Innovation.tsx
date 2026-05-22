import { Lightbulb, Smartphone, Recycle, TrendingUp, Network, BarChart3 } from "lucide-react";

const innovations = [
  {
    icon: Smartphone,
    title: "Digital Campaigns",
    desc: "Harnessing social media, video storytelling, and digital art to reach young Pacific Islanders where they are — online. Our content has reached audiences across Melanesia and beyond.",
    tag: "Technology",
  },
  {
    icon: Lightbulb,
    title: "Youth-Driven Solutions",
    desc: "We don't tell youth what to do — we ask them what works. Every program is co-designed with the communities it serves, ensuring relevance and buy-in from day one.",
    tag: "Innovation",
  },
  {
    icon: Recycle,
    title: "Sustainable Practices",
    desc: "From solar-powered community centers to plastic-free event protocols, we practice what we preach — embedding sustainability into our own operations.",
    tag: "Sustainability",
  },
];

const growthStrategies = [
  {
    icon: TrendingUp,
    title: "Program Scaling",
    desc: "Using documented playbooks from our pilot programs to replicate success in new communities without losing quality or local relevance.",
    metric: "×3",
    metricLabel: "Scale target by 2027",
  },
  {
    icon: Network,
    title: "Partnership Expansion",
    desc: "Building formal agreements with provincial governments, universities, and international conservation networks to unlock resources and credibility.",
    metric: "10+",
    metricLabel: "Target partnerships",
  },
  {
    icon: BarChart3,
    title: "Impact Measurement",
    desc: "Investing in rigorous data collection to prove — not just claim — our conservation outcomes, enabling better funding applications and program improvements.",
    metric: "100%",
    metricLabel: "Data-verified programs",
  },
];

export default function Innovation() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(185,70%,15%) 0%, hsl(15,80%,25%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            The Future
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Innovation &amp; Growth</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Conservation in the 21st century requires creativity, technology, and the courage to do things differently.
          </p>
        </div>
      </section>

      {/* Innovation pillars */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Innovation Focus
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Doing Conservation Differently
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 45%)" }}>
              Traditional conservation models weren't built for the Pacific. We're building something new.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {innovations.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  data-testid={`card-innovation-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "hsl(28,60%,93%)", color: "hsl(28,60%,40%)" }}>
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: "hsl(210, 35%, 15%)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pacific Youth Spotlight */}
      <section
        className="py-20 px-4 sm:px-6 text-white"
        style={{ background: "linear-gradient(135deg, hsl(208,58%,20%) 0%, hsl(140,60%,22%) 100%)" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-6">
            Pacific Youth as Climate Innovators
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-base">
            Young people in the Pacific are not just victims of climate change — they are its most creative responders. 
            From building coral nurseries with recycled materials to designing plastic-free village markets, SYG INC 
            youth are proving that the solutions to our biggest challenges are already here, waiting to be resourced and scaled.
          </p>
        </div>
      </section>

      {/* Growth Strategies */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Growth Strategy
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              How We Scale Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {growthStrategies.map((strat) => {
              const Icon = strat.icon;
              return (
                <div key={strat.title} className="bg-white rounded-2xl p-8 shadow-sm"
                  data-testid={`card-growth-${strat.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(145, 42%, 28%)" }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-display font-black text-3xl" style={{ color: "hsl(208, 58%, 28%)" }}>{strat.metric}</div>
                      <div className="text-xs text-gray-400">{strat.metricLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>{strat.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>{strat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
