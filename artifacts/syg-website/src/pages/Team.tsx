import { Link } from "wouter";
import { Users, ArrowRight, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Founder",
    role: "Executive Director & Founder",
    bio: "A coastal community advocate who grew up fishing in PNG's island waters. Founded SYG INC with the belief that youth are the most powerful force for environmental change in the Pacific.",
    initials: "FF",
    color: "hsl(208, 58%, 28%)",
  },
  {
    name: "Co-Founder",
    role: "Deputy Director & Co-Founder",
    bio: "Marine biologist by training, organizer by calling. Leads SYG INC's restoration programs and manages relationships with scientific and government partners.",
    initials: "CF",
    color: "hsl(145, 42%, 28%)",
  },
  {
    name: "Programs Lead",
    role: "Head of Programs",
    bio: "Designs and manages SYG INC's education workshops, clean-up campaigns, and youth engagement events across coastal communities.",
    initials: "PL",
    color: "hsl(28, 72%, 50%)",
  },
  {
    name: "Outreach Lead",
    role: "Community Outreach Coordinator",
    bio: "Bridges the gap between SYG INC and rural fishing villages. Trusted by community elders and loved by young people everywhere she goes.",
    initials: "OL",
    color: "hsl(208, 52%, 40%)",
  },
  {
    name: "Digital Lead",
    role: "Digital Campaigns Manager",
    bio: "Runs SYG INC's digital presence, turning conservation stories into powerful content that reaches audiences far beyond Papua New Guinea.",
    initials: "DL",
    color: "hsl(208, 52%, 38%)",
  },
  {
    name: "Finance Officer",
    role: "Finance & Administration",
    bio: "Ensures SYG INC's finances are managed with full transparency and accountability — tracking every kina so donors and partners can trust where their support goes.",
    initials: "FO",
    color: "hsl(145, 42%, 28%)",
  },
];

const orgStructure = [
  { level: "Governance", roles: ["Board of Directors", "Executive Director", "Deputy Director"] },
  { level: "Programs", roles: ["Head of Programs", "Community Outreach Coordinator", "Education Officer"] },
  { level: "Operations", roles: ["Finance & Administration", "Digital Campaigns Manager", "Volunteer Coordinator"] },
];

export default function Team() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, hsl(185,80%,15%) 0%, hsl(140,60%,18%) 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(28, 72%, 58%)" }}>
            The People
          </div>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6">Team &amp; Structure</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Driven by passion, guided by community, and held together by a shared belief in the future of the Pacific.
          </p>
        </div>
      </section>

      {/* Org Structure */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Structure
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              Organizational Structure
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {orgStructure.map((tier) => (
              <div key={tier.level} className="bg-white rounded-2xl p-8 shadow-sm"
                data-testid={`card-tier-${tier.level.toLowerCase()}`}>
                <div className="font-display font-bold text-base mb-4" style={{ color: "hsl(208, 58%, 28%)" }}>
                  {tier.level}
                </div>
                <ul className="space-y-3">
                  {tier.roles.map((role) => (
                    <li key={role} className="flex items-center gap-3 text-sm" style={{ color: "hsl(208, 18%, 35%)" }}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "hsl(28, 72%, 50%)" }} />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(208, 15%, 92%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
              Meet the Team
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: "hsl(210, 35%, 15%)" }}>
              The People Behind the Mission
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.role} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                data-testid={`card-member-${member.role.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-white text-xl mb-5"
                  style={{ backgroundColor: member.color }}>
                  {member.initials}
                </div>
                <div className="font-display font-bold text-lg mb-1" style={{ color: "hsl(210, 35%, 15%)" }}>{member.name}</div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
                  {member.role}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(208, 18%, 40%)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-24 px-4 sm:px-6" style={{ backgroundColor: "hsl(36, 20%, 93%)" }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6"
            style={{ backgroundColor: "hsl(28, 72%, 50%)" }}>
            <Star className="w-8 h-8 text-white" />
          </div>
          <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "hsl(28, 72%, 50%)" }}>
            Volunteer
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6" style={{ color: "hsl(210, 35%, 15%)" }}>
            Join Our Team
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "hsl(208, 18%, 40%)" }}>
            SYG INC is powered by volunteers. Whether you're a scientist, teacher, storyteller, community organizer, 
            or simply someone who cares about the ocean — there's a place for you here. We provide training, mentorship, 
            and the satisfaction of doing work that genuinely matters.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { role: "Field Volunteers", desc: "Join clean-ups, planting events, and on-ground restoration work." },
              { role: "Education Facilitators", desc: "Lead workshops in schools and community centers." },
              { role: "Digital Advocates", desc: "Create content, run campaigns, and amplify our message online." },
            ].map((vol) => (
              <div key={vol.role} className="bg-white rounded-xl p-6 shadow-sm"
                data-testid={`card-volunteer-${vol.role.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: "hsl(208, 58%, 28%)" }} />
                <h3 className="font-display font-bold text-sm mb-2" style={{ color: "hsl(210, 35%, 15%)" }}>{vol.role}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "hsl(208, 18%, 45%)" }}>{vol.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "hsl(208, 58%, 28%)" }}
            data-testid="button-volunteer-cta"
          >
            <Users className="w-4 h-4" /> Apply to Volunteer <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
