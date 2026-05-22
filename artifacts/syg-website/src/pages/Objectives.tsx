import { Megaphone, Leaf, Handshake, Scale, Waves, TreePine, BookOpen, Users, Droplets, Wind } from "lucide-react";

const objectives = [
  {
    icon: Megaphone,
    title: "Awareness",
    desc: "Build widespread public understanding of marine degradation, climate impacts, and the role every individual plays in the health of our oceans.",
    color: "hsl(208, 58%, 28%)",
  },
  {
    icon: Leaf,
    title: "Ecosystem Restoration",
    desc: "Lead hands-on restoration programs — replanting mangroves, rehabilitating damaged reef areas, and restoring coastal vegetation.",
    color: "hsl(145, 42%, 28%)",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    desc: "Build alliances with government agencies, NGOs, universities, and regional bodies to amplify our reach and deepen our impact.",
    color: "hsl(28, 72%, 50%)",
  },
  {
    icon: Scale,
    title: "Policy Advocacy",
    desc: "Push for environmental protections at local, national, and regional levels — ensuring youth perspectives shape the laws that govern our seas.",
    color: "hsl(208, 52%, 40%)",
  },
];

const activities = [
  { icon: Waves, label: "Beach & Ocean Clean-ups", desc: "Monthly coastal cleanup campaigns across PNG's most affected shorelines." },
  { icon: TreePine, label: "Mangrove Rehabilitation", desc: "Replanting native mangrove species in degraded coastal zones." },
  { icon: Leaf, label: "Tree Planting Programs", desc: "Reforestation drives in upland areas to reduce sediment runoff into marine zones." },
  { icon: BookOpen, label: "Education Workshops", desc: "In-school and community workshops on climate science, ocean health, and sustainable practices." },
  { icon: Users, label: "Community Outreach", desc: "Engaging villages and fishing communities with practical conservation skills." },
  { icon: Megaphone, label: "Youth Engagement Events", desc: "Youth forums, art competitions, and digital campaigns to amplify Pacific voices." },
];

const focusAreas = [
  { icon: Waves, title: "Marine Ecosystems", text: "Coral reefs, seagrass beds, and open-water habitats sustaining PNG's fishing communities.", color: "hsl(208, 58%, 28%)" },
  { icon: Droplets, title: "Water Management", text: "Protecting freshwater sources and coastal watersheds from pollution and overextraction.", color: "hsl(208, 52%, 40%)" },
  { icon: Wind, title: "Climate Adaptation", text: "Helping communities prepare for rising seas, intensifying storms, and shifting seasons.", color: "hsl(145, 42%, 28%)" },
];

export default function Objectives() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(140,60%,12%) 0%, hsl(208,58%,20%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            Our Work
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Objectives &amp; Activities</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Our work is grounded in four core objectives and a growing portfolio of on-the-ground activities 
            that put conservation into action.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Core Objectives
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div key={obj.title} className="flex gap-6 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
                  data-testid={`card-objective-${i}`}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: obj.color }}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>{obj.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>{obj.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Key Activities
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Action on the Ground
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: "hsl(208, 18%, 40%)" }}>
              Conservation isn't just a word for us. Here's what it looks like in practice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => {
              const Icon = act.icon;
              return (
                <div key={act.label} className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                  data-testid={`card-activity-${act.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>{act.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>{act.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conservation Focus Areas */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Conservation Focus Areas
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Where We Focus Our Energy
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="rounded-2xl p-10 text-white text-center" style={{ backgroundColor: area.color }}
                  data-testid={`card-focus-${area.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                  <h3 className="font-display font-bold text-xl mb-3">{area.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{area.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
