import { Waves, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "hsl(210, 58%, 14%)" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-white block">SYG INC</span>
            <span className="text-xs" style={{ color: "hsl(28, 72%, 65%)" }}>Solwara Youth Guardian</span>
          </div>
        </div>

        <p className="text-sm text-white/60 max-w-sm leading-relaxed">
          Protecting our seas, empowering our future. A youth-led marine conservation movement rooted in Papua New Guinea.
        </p>

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
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
              data-testid={`link-social-${label.toLowerCase()}`}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Solwara Youth Guardian Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Protecting the Bismarck Sea &mdash; one act at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
