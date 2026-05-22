import { Link } from "wouter";
import { ArrowRight, Target, Eye, AlertTriangle, Heart } from "lucide-react";

export default function About() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(210,58%,10%) 0%, hsl(208,55%,20%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            Our Story
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">About Us</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            We are coastal youth who grew up beside the Bismarck Sea — and who refuse to watch it disappear.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Founding Story
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6" style={{ color: "hsl(210, 35%, 15%)" }}>
              Where it began
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(208, 18%, 35%)" }}>
              Solwara Youth Guardian was born in the coastal communities of Papua New Guinea, where every tide brings both life and 
              a reminder of how fragile that life has become. Our founders — young men and women from fishing families — watched the 
              reefs they played on as children bleach and die. They saw mangrove forests bulldozed for development. They pulled 
              plastic from the same waters their parents fished.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "hsl(208, 18%, 35%)" }}>
              Rather than accept this as inevitable, they organized. What began as informal beach clean-ups grew into a registered 
              nonprofit with a clear mission: mobilize Pacific youth to protect, restore, and advocate for the marine and 
              terrestrial ecosystems that sustain Pacific life.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "hsl(208, 18%, 35%)" }}>
              SYG INC is not funded by corporations with interests in the region. We are funded by grants, individual donors, 
              and the sweat of our volunteers. That independence is our greatest strength.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, hsl(185,70%,92%) 0%, hsl(140,40%,92%) 100%)" }}
            >
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: "hsl(208, 58%, 20%)" }}>
                "Solwara" — The Language of the Sea
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 22%, 30%)" }}>
                In Tok Pisin, Papua New Guinea's national language, <em>solwara</em> means "saltwater" or "the sea." 
                We chose this name deliberately — to root ourselves in place, in language, and in the responsibility 
                that comes with calling the Pacific home.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(28, 72%, 50%)" }}>
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>
                    The Urgency Is Real
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>
                    PNG's coral reefs support over 1,500 fish species. Rising sea temperatures threaten 60% of them. 
                    Coastal communities that depend entirely on reef fisheries face food insecurity within a generation 
                    if nothing changes. We don't have time to wait.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Why We Exist
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              The Problem We Are Solving
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Climate Change",
                text: "Ocean temperatures in the Coral Triangle have risen by 0.7°C over the past 50 years. Bleaching events are increasing in frequency and severity, destroying reef ecosystems that took centuries to form.",
                bg: "hsl(208, 58%, 28%)",
              },
              {
                title: "Marine Pollution",
                text: "An estimated 8 million tonnes of plastic enter the world's oceans annually. In the Pacific, remote communities with no waste management infrastructure bear a disproportionate burden of this global failure.",
                bg: "hsl(28, 72%, 50%)",
              },
              {
                title: "Youth Exclusion",
                text: "Young people represent the majority of PNG's population, yet they are systematically excluded from environmental decision-making. Without their energy and perspective, conservation efforts stall.",
                bg: "hsl(145, 42%, 28%)",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 text-white" style={{ backgroundColor: item.bg }}
                data-testid={`card-problem-${item.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl p-10 text-white" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2 text-white/60">Our Mission</div>
            <p className="font-display font-bold text-xl leading-snug">
              To mobilize Pacific youth as frontline defenders of marine and coastal ecosystems through education, 
              restoration, advocacy, and community action.
            </p>
          </div>

          <div className="rounded-2xl p-10 text-white" style={{ backgroundColor: "hsl(145, 42%, 24%)" }}>
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-2 text-white/60">Our Vision</div>
            <p className="font-display font-bold text-xl leading-snug">
              A Papua New Guinea where thriving oceans and empowered youth drive a sustainable future — a model 
              for the entire Pacific region.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10 rounded-2xl p-10 bg-white shadow-sm">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "hsl(28, 72%, 50%)" }}>
            <Heart className="w-7 h-7 text-white" />
          </div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(28, 72%, 50%)" }}>
            Our Values
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-4">
            {[
              { title: "Community First", desc: "Every decision we make centers the wellbeing of coastal communities." },
              { title: "Youth Leadership", desc: "We trust young people to lead — not just participate." },
              { title: "Transparency", desc: "Our finances, decisions, and impact are open to scrutiny." },
            ].map((v) => (
              <div key={v.title}>
                <h4 className="font-display font-bold text-sm mb-1" style={{ color: "hsl(210, 35%, 15%)" }}>{v.title}</h4>
                <p className="text-sm" style={{ color: "hsl(208, 18%, 40%)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg, hsl(208,58%,18%) 0%, hsl(140,60%,20%) 100%)" }}
      >
        <h2 className="font-display font-black text-3xl sm:text-4xl mb-6">Ready to join the movement?</h2>
        <Link
          href="/get-involved"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
          style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
          data-testid="button-about-cta"
        >
          Get Involved <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
