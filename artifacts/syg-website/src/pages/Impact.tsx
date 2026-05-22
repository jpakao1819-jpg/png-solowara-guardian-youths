import { Users, GraduationCap, Heart, Globe, Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const beneficiaries = [
  { icon: Heart, label: "Coastal Communities", count: "12+", desc: "Villages directly supported through outreach and conservation programs." },
  { icon: Users, label: "Youth Participants", count: "500+", desc: "Young people trained and mobilized as active conservation advocates." },
  { icon: GraduationCap, label: "Schools Reached", count: "25+", desc: "Primary and secondary schools engaged through environmental education programs." },
  { icon: Globe, label: "Volunteer Network", count: "200+", desc: "Dedicated volunteers contributing time, skills, and passion to the mission." },
];

const initiatives = [
  {
    title: "Marine Education in Schools",
    text: "We deliver age-appropriate marine science workshops to students across coastal provinces, building a generation that understands the ocean they depend on.",
    tag: "Education",
    tagColor: "hsl(208, 58%, 28%)",
  },
  {
    title: "Community Clean-up Mobilization",
    text: "Working with village leaders and youth groups to organize regular beach and river clean-ups, turning community members into active stewards of their environment.",
    tag: "Outreach",
    tagColor: "hsl(28, 72%, 50%)",
  },
  {
    title: "Mangrove Restoration with Local Families",
    text: "Involving fishing families directly in replanting efforts — because the people who depend on mangroves most are the most motivated to restore them.",
    tag: "Restoration",
    tagColor: "hsl(145, 42%, 28%)",
  },
  {
    title: "Digital Awareness Campaigns",
    text: "Using social media and digital storytelling to raise awareness of PNG's marine challenges, engaging audiences in the Pacific and internationally.",
    tag: "Advocacy",
    tagColor: "hsl(208, 52%, 40%)",
  },
];

export default function Impact() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(15,70%,20%) 0%, hsl(208,58%,20%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            Our Reach
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Community Impact</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Real change measured in communities supported, youth empowered, and coastlines restored.
          </p>
        </div>
      </section>

      {/* Beneficiary stats */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Beneficiaries
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Who We Serve
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="bg-white rounded-2xl p-8 shadow-sm text-center hover:shadow-md transition-all hover:-translate-y-1"
                  data-testid={`card-beneficiary-${b.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                    style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-display font-black text-4xl mb-1" style={{ color: "hsl(208, 58%, 28%)" }}>{b.count}</div>
                  <div className="font-semibold text-sm mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>{b.label}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(208, 18%, 45%)" }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community initiatives */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Programs
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Community Support Initiatives
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((init, i) => (
              <div key={init.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
                data-testid={`card-initiative-${i}`}>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
                  style={{ backgroundColor: init.tagColor }}>
                  {init.tag}
                </div>
                <h3 className="font-display font-bold text-lg mb-3" style={{ color: "hsl(210, 35%, 15%)" }}>{init.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>{init.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term vision */}
      <section
        className="py-24 px-4 sm:px-6 text-white"
        style={{ background: "linear-gradient(135deg, hsl(210,58%,10%) 0%, hsl(208,55%,22%) 100%)" }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8" style={{ color: "hsl(28, 72%, 58%)" }} />
              <span className="text-sm font-semibold uppercase tracking-widest text-white/60">Long-term Vision</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl mb-6">
              Becoming a nationally recognized environmental movement
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Within the next decade, SYG INC aims to be the leading youth-led environmental organization in Papua New Guinea — 
              with chapters in every coastal province, partnerships with government at every level, and a track record of measurable 
              conservation outcomes that the rest of the Pacific can learn from.
            </p>
            <p className="text-white/70 leading-relaxed">
              This is not ambition for its own sake. It's what the ocean requires of us.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { year: "2025", milestone: "National youth summit on marine conservation" },
              { year: "2026", milestone: "Chapters established in 3 coastal provinces" },
              { year: "2028", milestone: "500 hectares of mangrove forest restored" },
              { year: "2030", milestone: "Nationally recognized environmental movement" },
            ].map((item) => (
              <div key={item.year} className="flex items-start gap-4 p-4 rounded-xl bg-white/10"
                data-testid={`milestone-${item.year}`}>
                <div className="font-display font-black text-xl w-14 shrink-0" style={{ color: "hsl(28, 72%, 58%)" }}>
                  {item.year}
                </div>
                <p className="text-sm text-white/80 leading-relaxed pt-1">{item.milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 text-center" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <h2 className="font-display font-bold text-2xl sm:text-3xl mb-6" style={{ color: "hsl(210, 35%, 15%)" }}>
          Be part of the story.
        </h2>
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
          style={{ backgroundColor: "hsl(208, 58%, 28%)" }}
          data-testid="button-impact-cta"
        >
          Join Us <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
