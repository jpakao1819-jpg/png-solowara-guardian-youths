import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Waves } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/objectives", label: "Objectives" },
  { href: "/impact", label: "Impact" },
  { href: "/team", label: "Team" },
  { href: "/innovation", label: "Innovation" },
  { href: "/funding", label: "Funding" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[hsl(180,100%,10%)] shadow-lg" : "bg-[hsl(180,100%,10%)/90] backdrop-blur-md"
      }`}
      style={{ backgroundColor: scrolled ? "hsl(210, 35%, 15%)" : "rgba(0,30,30,0.92)" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "hsl(208, 58%, 28%)" }}>
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-white text-sm leading-none block">SYG INC</span>
            <span className="text-[10px] leading-none" style={{ color: "hsl(28, 72%, 62%)" }}>Solwara Youth Guardian</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/get-involved"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
          >
            Donate
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          data-testid="button-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "hsl(210, 55%, 10%)" }}>
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/get-involved"
                className="block text-center px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: "hsl(28, 72%, 50%)" }}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
