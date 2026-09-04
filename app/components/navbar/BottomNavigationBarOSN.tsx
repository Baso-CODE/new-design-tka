"use client";

import { Home, Info, LucideIcon, Mail, PenLine } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

interface NavLink {
  id: number;
  to: string;
  label: string;
}
interface BottomNavItem {
  name: string;
  link: string;
  icon: LucideIcon;
  isDaftar?: boolean;
}
interface PillState {
  left: number;
  width: number;
  opacity: number;
}

const getBottomNavItems = (navLinks: NavLink[]): BottomNavItem[] => {
  const filtered = navLinks.filter(
    (l) => l.label !== "Blog" && l.label !== "Our Program",
  );
  const mapped: BottomNavItem[] = filtered.map((link) => {
    let icon: LucideIcon = Home;
    if (link.label === "About Us") icon = Info;
    if (link.label === "Contact Us") icon = Mail;
    return { name: link.label, link: link.to, icon };
  });
  const mid = Math.ceil(mapped.length / 2);
  mapped.splice(mid, 0, {
    name: "Daftar",
    link: "/daftar",
    icon: PenLine,
    isDaftar: true,
  });
  return mapped;
};

interface Props {
  navLinksData: NavLink[];
}

export default function BottomNavigationBarTKA({ navLinksData }: Props) {
  const pathname = usePathname();
  const bottomNavItems = getBottomNavItems(navLinksData);
  const numItems = bottomNavItems.length;

  // ── Ukur setiap item secara langsung via ref ─────────────────────────────────
  // Lebih akurat daripada kalkulasi matematis — menghindari asumsi flex-basis
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  const [pill, setPill] = useState<PillState>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [pillTransition, setPillTransition] = useState("none");
  const stretchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevIndexRef = useRef<number>(-1);

  // Ukur posisi item relatif terhadap container
  const measureItem = useCallback((index: number) => {
    const el = itemRefs.current[index];
    const container = containerRef.current;
    if (!el || !container) return null;
    const eR = el.getBoundingClientRect();
    const cR = container.getBoundingClientRect();
    return { left: eR.left - cR.left, width: eR.width };
  }, []);

  const getActiveIndex = useCallback(
    () =>
      bottomNavItems.findIndex(
        (item) =>
          pathname === item.link ||
          (item.link !== "/" && pathname.startsWith(item.link)),
      ),
    [pathname, bottomNavItems],
  );

  // ── Liquid two-phase animation ───────────────────────────────────────────────
  const INSET = 5; // jarak pill dari tepi item (px)

  const animatePill = useCallback(
    (toIndex: number, instant = false) => {
      const to = measureItem(toIndex);
      if (!to) return;

      const pillLeft = to.left + INSET;
      const pillWidth = to.width - INSET * 2;

      if (instant) {
        setPillTransition("none");
        setPill({ left: pillLeft, width: pillWidth, opacity: 1 });
        prevIndexRef.current = toIndex;
        return;
      }

      if (stretchTimer.current) clearTimeout(stretchTimer.current);

      const fromIndex = prevIndexRef.current;
      const from = fromIndex >= 0 ? measureItem(fromIndex) : to;
      if (!from) return;

      // Phase 1 ─ stretch ke arah target
      setPillTransition(
        "left 0.2s cubic-bezier(0.4,0,0.2,1), width 0.2s cubic-bezier(0.4,0,0.2,1)",
      );

      if (toIndex > fromIndex) {
        // Gerak kanan → rentangkan right edge dulu
        setPill({
          left: from.left + INSET,
          width: to.left + to.width - from.left - INSET,
          opacity: 1,
        });
      } else {
        // Gerak kiri → rentangkan left edge dulu
        setPill({
          left: to.left + INSET,
          width: from.left + from.width - to.left - INSET,
          opacity: 1,
        });
      }

      // Phase 2 ─ kembali ke ukuran normal dengan spring overshoot
      stretchTimer.current = setTimeout(() => {
        setPillTransition(
          "left 0.38s cubic-bezier(0.34,1.5,0.64,1), width 0.38s cubic-bezier(0.34,1.5,0.64,1)",
        );
        setPill({ left: pillLeft, width: pillWidth, opacity: 1 });
        prevIndexRef.current = toIndex;
      }, 200);
    },
    [measureItem],
  );

  // Setelah mount, ukur DOM dan set posisi awal
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const idx = getActiveIndex();
    if (idx < 0) return;
    const frame = requestAnimationFrame(() => animatePill(idx, true));
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  // Route change
  useEffect(() => {
    if (!ready) return;
    const idx = getActiveIndex();
    if (idx < 0 || idx === prevIndexRef.current) return;
    const frame = requestAnimationFrame(() => animatePill(idx));
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ready]);

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <>
      <div className="h-24 lg:hidden" />

      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        style={{ padding: "0 12px max(12px, env(safe-area-inset-bottom))" }}>
        {/* Glass shell */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-sm overflow-hidden"
          style={{
            borderRadius: "22px",
            background: [
              "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)",
              "rgba(0, 22, 60, 0.72)",
            ].join(", "),
            backdropFilter: "blur(40px) saturate(180%) brightness(1.08)",
            WebkitBackdropFilter: "blur(40px) saturate(180%) brightness(1.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: [
              "0 1px 0 rgba(255,255,255,0.18) inset",
              "0 -1px 0 rgba(0,0,0,0.12) inset",
              "0 16px 48px rgba(0,0,0,0.42)",
              "0 4px 16px rgba(0,0,0,0.25)",
            ].join(", "),
          }}>
          {/* Top refraction line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 4%, rgba(255,255,255,0.55) 25%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.55) 75%, transparent 96%)",
              zIndex: 20,
              pointerEvents: "none",
            }}
          />

          {/* Liquid pill */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 6,
              bottom: 6,
              left: pill.left,
              width: pill.width,
              opacity: pill.opacity,
              transition: pillTransition,
              borderRadius: "16px",
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.26) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.05) 100%)",
              border: "0.5px solid rgba(255,255,255,0.28)",
              boxShadow: [
                "0 1px 0 rgba(255,255,255,0.22) inset",
                "0 -0.5px 0 rgba(0,0,0,0.08) inset",
                "0 4px 16px rgba(0,0,0,0.18)",
              ].join(", "),
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              pointerEvents: "none",
              zIndex: 1,
            }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "12%",
                right: "12%",
                height: "40%",
                borderRadius: "16px 16px 50% 50%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Items — flex-1 agar semua item SAMA LEBAR */}
          <div
            className="relative flex items-center h-17"
            style={{ zIndex: 2 }}>
            {bottomNavItems.map((item, index) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));

              /* ── Tombol Daftar ── */
              if (item.isDaftar) {
                const isDaftarActive = pathname.startsWith("/daftar");
                return (
                  <Link
                    key="daftar"
                    href={item.link}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    className="flex-1 flex flex-col items-center justify-center py-1.5"
                    aria-label="Daftar Program TKA">
                    <div
                      style={{
                        position: "relative",
                        width: "50px",
                        height: "46px",
                        borderRadius: "15px",
                        background: isDaftarActive
                          ? "linear-gradient(150deg, #FFD166 0%, #FAAE17 45%, #e09810 100%)"
                          : "linear-gradient(150deg, #FAAE17 0%, #e09810 100%)",
                        border: "0.5px solid rgba(255,255,255,0.35)",
                        boxShadow: [
                          "0 1px 0 rgba(255,255,255,0.4) inset",
                          "0 -1px 0 rgba(0,0,0,0.15) inset",
                          isDaftarActive
                            ? "0 6px 20px rgba(250,174,23,0.75)"
                            : "0 4px 16px rgba(250,174,23,0.55)",
                        ].join(", "),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition:
                          "transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s",
                        transform: isDaftarActive ? "scale(1.06)" : "scale(1)",
                      }}>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "10%",
                          right: "10%",
                          height: "50%",
                          borderRadius: "15px 15px 60% 60%",
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, transparent 100%)",
                          pointerEvents: "none",
                        }}
                      />
                      <item.icon
                        size={20}
                        color="white"
                        strokeWidth={2.5}
                        style={{
                          position: "relative",
                          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: isDaftarActive ? "#FFD166" : "#FAAE17",
                        marginTop: "3px",
                        letterSpacing: "0.04em",
                        transition: "color 0.2s",
                      }}>
                      Daftar
                    </span>
                  </Link>
                );
              }

              /* ── Nav item biasa ── */
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="flex-1 flex flex-col items-center justify-center py-1.5"
                  style={{ WebkitTapHighlightColor: "transparent" }}>
                  <item.icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 1.7}
                    style={{
                      color: isActive
                        ? "rgba(255,255,255,1)"
                        : "rgba(255,255,255,0.38)",
                      transform: isActive ? "scale(1.12)" : "scale(1)",
                      transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                      filter: isActive
                        ? "drop-shadow(0 0 6px rgba(255,255,255,0.4))"
                        : "none",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.35)",
                      marginTop: "3px",
                      letterSpacing: "0.02em",
                      transition: "all 0.25s ease",
                    }}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
