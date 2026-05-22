import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import {
  Home, Info, Target, Heart, Users, Lightbulb,
  DollarSign, Handshake, Mail, Phone, MapPin, Waves, X, GripHorizontal
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/objectives", label: "Objectives", icon: Target },
  { href: "/impact", label: "Impact", icon: Heart },
  { href: "/team", label: "Team", icon: Users },
  { href: "/innovation", label: "Innovation", icon: Lightbulb },
  { href: "/funding", label: "Funding", icon: DollarSign },
  { href: "/get-involved", label: "Get Involved", icon: Handshake },
];

const RADIUS = 110;
const TOTAL = navItems.length;
const TOGGLE_SIZE = 70;
// Contact panel sits this far below (or above) the toggle center
const PANEL_OFFSET = RADIUS + TOGGLE_SIZE / 2 + 24;
const PANEL_WIDTH = 230;
const PANEL_HEIGHT_APPROX = 200;

export default function RadialMenu() {
  const [active, setActive] = useState(false);
  const [, setLocation] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({
    x: window.innerWidth - 110,
    y: window.innerHeight - 110,
  });

  const dragging = useRef(false);
  const dragStart = useRef({ mx: 0, my: 0, px: 0, py: 0 });
  const dragMoved = useRef(false);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Drag via mouse
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    dragMoved.current = false;
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
  }, [pos]);

  // Drag via touch
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0];
    dragging.current = true;
    dragMoved.current = false;
    dragStart.current = { mx: t.clientX, my: t.clientY, px: pos.x, py: pos.y };
  }, [pos]);

  useEffect(() => {
    function clamp(v: number, min: number, max: number) {
      return Math.max(min, Math.min(max, v));
    }
    function move(cx: number, cy: number) {
      if (!dragging.current) return;
      const dx = cx - dragStart.current.mx;
      const dy = cy - dragStart.current.my;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragMoved.current = true;
      setPos({
        x: clamp(dragStart.current.px + dx, TOGGLE_SIZE / 2, window.innerWidth - TOGGLE_SIZE / 2),
        y: clamp(dragStart.current.py + dy, TOGGLE_SIZE / 2, window.innerHeight - TOGGLE_SIZE / 2),
      });
    }
    function onMouseMove(e: MouseEvent) { move(e.clientX, e.clientY); }
    function onTouchMove(e: TouchEvent) { move(e.touches[0].clientX, e.touches[0].clientY); }
    function onUp() { dragging.current = false; }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onUp);
    };
  }, []);

  function handleToggleClick() {
    if (!dragMoved.current) setActive((a) => !a);
  }

  function navigate(href: string) {
    setActive(false);
    setLocation(href);
  }

  // Decide whether to flip panel above (not enough room below)
  const spaceBelow = window.innerHeight - pos.y;
  const flipAbove = spaceBelow < PANEL_OFFSET + PANEL_HEIGHT_APPROX + 20;

  // Panel horizontal: clamp so it doesn't go off-screen
  const panelLeft = Math.max(
    -pos.x + 10,
    Math.min(window.innerWidth - pos.x - PANEL_WIDTH - 10, -PANEL_WIDTH / 2 + TOGGLE_SIZE / 2)
  );

  return (
    <div
      ref={menuRef}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        zIndex: 1000,
        transform: "translate(-50%, -50%)",
        userSelect: "none",
      }}
      data-testid="radial-menu"
    >
      {/* Radial orbit + toggle — all centered on (0,0) */}
      <div style={{ position: "relative", width: `${TOGGLE_SIZE}px`, height: `${TOGGLE_SIZE}px` }}>

        {/* Nav items */}
        {navItems.map((item, i) => {
          const angle = (i * 360) / TOTAL - 90;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * RADIUS;
          const y = Math.sin(rad) * RADIUS;
          const Icon = item.icon;

          return (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              title={item.label}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                border: "2.5px solid hsl(208, 55%, 38%)",
                backgroundColor: "hsl(36, 22%, 96%)",
                color: "hsl(208, 58%, 25%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(0,0,0,0.22)",
                transform: active
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                  : "translate(-50%, -50%) scale(0)",
                opacity: active ? 1 : 0,
                transition: `transform 0.45s cubic-bezier(0.34,1.56,0.64,1) ${i * 30}ms, opacity 0.3s ease ${i * 20}ms`,
                pointerEvents: active ? "auto" : "none",
                zIndex: 2,
              }}
            >
              <Icon style={{ width: "17px", height: "17px", flexShrink: 0 }} />
              <span style={{
                fontSize: "7.5px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1,
                marginTop: "2px",
                whiteSpace: "nowrap",
                maxWidth: "50px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Toggle button */}
        <button
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onClick={handleToggleClick}
          data-testid="button-toggle-menu"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: `${TOGGLE_SIZE}px`,
            height: `${TOGGLE_SIZE}px`,
            borderRadius: "50%",
            border: "none",
            background: active
              ? "linear-gradient(135deg, hsl(145, 42%, 26%) 0%, hsl(145, 42%, 38%) 100%)"
              : "linear-gradient(135deg, hsl(208, 58%, 22%) 0%, hsl(208, 58%, 34%) 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2px",
            cursor: "grab",
            boxShadow: active
              ? "0 0 0 4px hsl(145,42%,78%), 0 8px 28px rgba(0,0,0,0.28)"
              : "0 0 0 3px hsl(208,40%,72%), 0 8px 28px rgba(0,0,0,0.24)",
            transition: "background 0.35s ease, box-shadow 0.35s ease, transform 0.55s cubic-bezier(0.34,1.56,0.64,1)",
            transform: active
              ? "translate(-50%,-50%) rotate(360deg) scale(1.08)"
              : "translate(-50%,-50%) rotate(0deg) scale(1)",
            zIndex: 5,
          }}
        >
          {active ? (
            <X style={{ width: "24px", height: "24px" }} />
          ) : (
            <>
              <Waves style={{ width: "24px", height: "24px" }} />
              <GripHorizontal style={{ width: "12px", height: "12px", opacity: 0.45 }} />
            </>
          )}
        </button>

        {/* Contact panel — absolutely positioned, clears the radial ring */}
        <div
          data-testid="contact-panel"
          style={{
            position: "absolute",
            left: `${panelLeft}px`,
            ...(flipAbove
              ? { bottom: `calc(50% + ${PANEL_OFFSET}px)` }
              : { top: `calc(50% + ${PANEL_OFFSET}px)` }
            ),
            width: `${PANEL_WIDTH}px`,
            backgroundColor: "hsl(210, 35%, 14%)",
            borderRadius: "18px",
            border: "1.5px solid hsl(208, 40%, 30%)",
            boxShadow: "0 12px 36px rgba(0,0,0,0.38)",
            overflow: "hidden",
            maxHeight: active ? "280px" : "0px",
            opacity: active ? 1 : 0,
            transition: "max-height 0.45s cubic-bezier(0.34,1.2,0.64,1) 0.2s, opacity 0.35s ease 0.15s",
            pointerEvents: active ? "auto" : "none",
            zIndex: 10,
          }}
        >
          <div style={{ padding: "18px 18px 16px" }}>
            <div style={{
              fontSize: "9px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "hsl(28, 72%, 58%)",
              marginBottom: "14px",
              borderBottom: "1px solid hsl(208, 40%, 26%)",
              paddingBottom: "10px",
            }}>
              Contact Us
            </div>

            {[
              { icon: MapPin, text: "Papua New Guinea, Pacific Region", href: undefined },
              { icon: Mail, text: "info@syginc.org", href: "mailto:info@syginc.org" },
              { icon: Phone, text: "+675 XXX XXXX", href: "tel:+675" },
            ].map(({ icon: Icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "11px" }}>
                <div style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  backgroundColor: "hsl(208, 55%, 24%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: "13px", height: "13px", color: "hsl(28, 72%, 62%)" }} />
                </div>
                {href ? (
                  <a href={href} style={{
                    fontSize: "12.5px",
                    color: "hsl(36, 20%, 88%)",
                    textDecoration: "none",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    paddingTop: "5px",
                  }}>
                    {text}
                  </a>
                ) : (
                  <span style={{
                    fontSize: "12.5px",
                    color: "hsl(145, 35%, 68%)",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    paddingTop: "5px",
                  }}>
                    {text}
                  </span>
                )}
              </div>
            ))}

            <button
              onClick={() => navigate("/contact")}
              data-testid="button-contact-page"
              style={{
                marginTop: "6px",
                width: "100%",
                padding: "10px",
                borderRadius: "12px",
                border: "none",
                background: "linear-gradient(135deg, hsl(208, 58%, 32%) 0%, hsl(145, 42%, 28%) 100%)",
                color: "white",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
