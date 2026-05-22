import { Waves } from "lucide-react";
import { Link } from "wouter";

export default function TopBar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "hsl(210, 58%, 14%)",
        borderBottom: "1px solid hsl(208, 40%, 22%)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "hsl(208, 58%, 28%)" }}
          >
            <Waves className="w-5 h-5 text-white" />
          </div>
          <div>
            <span
              className="font-display font-bold block leading-none"
              style={{ color: "hsl(36, 22%, 95%)", fontSize: "15px" }}
            >
              SYG INC
            </span>
            <span style={{ fontSize: "10px", color: "hsl(28, 72%, 60%)", letterSpacing: "0.04em" }}>
              Solwara Youth Guardian
            </span>
          </div>
        </Link>

        <div
          className="text-xs font-medium hidden sm:block"
          style={{ color: "hsl(145, 42%, 65%)" }}
        >
          Protecting Our Seas, Empowering Our Future
        </div>
      </div>
    </header>
  );
}
