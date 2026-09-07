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

    return {
      name: link.label,
      link: link.to,
      icon,
    };
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

  /* =========================================================
     MEASURE NAV ITEM
  ========================================================= */

  const measureItem = useCallback((index: number) => {
    const el = itemRefs.current[index];
    const container = containerRef.current;

    if (!el || !container) return null;

    const elementRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return {
      left: elementRect.left - containerRect.left,
      width: elementRect.width,
    };
  }, []);

  /* =========================================================
     ACTIVE ITEM
  ========================================================= */

  const getActiveIndex = useCallback(
    () =>
      bottomNavItems.findIndex(
        (item) =>
          pathname === item.link ||
          (item.link !== "/" && pathname.startsWith(item.link)),
      ),
    [pathname, bottomNavItems],
  );

  /* =========================================================
     LIQUID PILL ANIMATION
  ========================================================= */

  const INSET = 5;

  const animatePill = useCallback(
    (toIndex: number, instant = false) => {
      const to = measureItem(toIndex);

      if (!to) return;

      const pillLeft = to.left + INSET;
      const pillWidth = to.width - INSET * 2;

      if (instant) {
        setPillTransition("none");

        setPill({
          left: pillLeft,
          width: pillWidth,
          opacity: 1,
        });

        prevIndexRef.current = toIndex;

        return;
      }

      if (stretchTimer.current) {
        clearTimeout(stretchTimer.current);
      }

      const fromIndex = prevIndexRef.current;

      const from = fromIndex >= 0 ? measureItem(fromIndex) : to;

      if (!from) return;

      /*
       * Phase 1:
       * kaca ditarik menuju target.
       */
      setPillTransition(
        [
          "left 0.2s cubic-bezier(0.4,0,0.2,1)",
          "width 0.2s cubic-bezier(0.4,0,0.2,1)",
        ].join(", "),
      );

      if (toIndex > fromIndex) {
        setPill({
          left: from.left + INSET,
          width: to.left + to.width - from.left - INSET,
          opacity: 1,
        });
      } else {
        setPill({
          left: to.left + INSET,
          width: from.left + from.width - to.left - INSET,
          opacity: 1,
        });
      }

      /*
       * Phase 2:
       * liquid kembali ke ukuran normal.
       */
      stretchTimer.current = setTimeout(() => {
        setPillTransition(
          [
            "left 0.38s cubic-bezier(0.34,1.5,0.64,1)",
            "width 0.38s cubic-bezier(0.34,1.5,0.64,1)",
          ].join(", "),
        );

        setPill({
          left: pillLeft,
          width: pillWidth,
          opacity: 1,
        });

        prevIndexRef.current = toIndex;
      }, 200);
    },
    [measureItem],
  );

  /* =========================================================
     INITIALIZE
  ========================================================= */

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const index = getActiveIndex();

    if (index < 0) return;

    const frame = requestAnimationFrame(() => {
      animatePill(index, true);
    });

    return () => cancelAnimationFrame(frame);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  /* =========================================================
     ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    if (!ready) return;

    const index = getActiveIndex();

    if (index < 0 || index === prevIndexRef.current) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      animatePill(index);
    });

    return () => cancelAnimationFrame(frame);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, ready]);

  /*
   * Bersihkan timer ketika komponen unmount.
   */
  useEffect(() => {
    return () => {
      if (stretchTimer.current) {
        clearTimeout(stretchTimer.current);
      }
    };
  }, []);

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <>
      {/* Spacer supaya konten tidak tertutup bottom bar */}
      <div className="h-24 lg:hidden" />

      <nav
        className="
          fixed
          inset-x-0
          bottom-0
          z-50
          lg:hidden
        "
        style={{
          padding: "0 12px max(12px, env(safe-area-inset-bottom))",
        }}>
        {/* =====================================================
            LIQUID GLASS SHELL
        ===================================================== */}

        <div
          ref={containerRef}
          className="
            relative
            mx-auto
            max-w-sm
            overflow-hidden
          "
          style={{
            borderRadius: "26px",

            background: [
              /*
               * Upper white light.
               */
              "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.055) 36%, rgba(255,255,255,0.025) 100%)",

              /*
               * Subtle blue refraction.
               */
              "radial-gradient(circle at 18% -20%, rgba(120,190,255,0.22) 0%, transparent 38%)",

              /*
               * Subtle neutral glass.
               */
              "rgba(9,22,44,0.46)",
            ].join(", "),

            backdropFilter: "blur(32px) saturate(185%) brightness(1.08)",

            WebkitBackdropFilter: "blur(32px) saturate(185%) brightness(1.08)",

            border: "1px solid rgba(255,255,255,0.24)",

            boxShadow: [
              /*
               * Outer depth
               */
              "0 20px 50px rgba(0,0,0,0.30)",

              "0 7px 20px rgba(0,0,0,0.18)",

              /*
               * Glass top edge
               */
              "inset 0 1px 0 rgba(255,255,255,0.52)",

              /*
               * Lower glass edge
               */
              "inset 0 -1px 0 rgba(255,255,255,0.06)",

              /*
               * Inner volume
               */
              "inset 0 0 24px rgba(255,255,255,0.035)",
            ].join(", "),
          }}>
          {/* =================================================
              TOP SPECULAR REFLECTION
          ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-20"
            style={{
              height: "1px",

              background:
                "linear-gradient(90deg, transparent 3%, rgba(255,255,255,0.35) 12%, rgba(255,255,255,0.88) 48%, rgba(255,255,255,0.42) 85%, transparent 97%)",
            }}
          />

          {/* =================================================
              LARGE SOFT REFLECTION
          ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-0"
            style={{
              width: "190px",
              height: "80px",

              left: "-45px",
              top: "-56px",

              borderRadius: "999px",

              background: "rgba(255,255,255,0.19)",

              filter: "blur(24px)",
            }}
          />

          {/* =================================================
              RIGHT BLUE REFRACTION
          ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute z-0"
            style={{
              width: "150px",
              height: "100px",

              right: "-65px",
              bottom: "-60px",

              borderRadius: "999px",

              background: "rgba(85,165,255,0.13)",

              filter: "blur(32px)",
            }}
          />

          {/* =================================================
              BOTTOM EDGE REFRACTION
          ================================================= */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-5 bottom-0 z-20"
            style={{
              height: "1px",

              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
            }}
          />

          {/* =================================================
              ACTIVE LIQUID PILL
          ================================================= */}

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

              borderRadius: "19px",

              /*
               * Semi-transparent glass instead of
               * opaque white.
               */
              background: [
                "linear-gradient(155deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.11) 38%, rgba(255,255,255,0.045) 100%)",

                "radial-gradient(circle at 35% 0%, rgba(255,255,255,0.25), transparent 50%)",
              ].join(", "),

              border: "0.7px solid rgba(255,255,255,0.34)",

              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.58)",

                "inset 0 -1px 0 rgba(255,255,255,0.05)",

                "inset 0 0 12px rgba(255,255,255,0.05)",

                "0 6px 18px rgba(0,0,0,0.13)",

                "0 1px 4px rgba(0,0,0,0.08)",
              ].join(", "),

              backdropFilter: "blur(16px) saturate(190%)",

              WebkitBackdropFilter: "blur(16px) saturate(190%)",

              pointerEvents: "none",

              zIndex: 1,

              overflow: "hidden",
            }}>
            {/* Pill upper reflection */}
            <div
              style={{
                position: "absolute",

                top: "-4px",
                left: "10%",
                right: "10%",

                height: "54%",

                borderRadius: "18px 18px 55% 55%",

                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.06) 65%, transparent 100%)",
              }}
            />

            {/* Pill soft lens flare */}
            <div
              style={{
                position: "absolute",

                width: "65%",
                height: "65%",

                right: "-20%",
                bottom: "-28%",

                borderRadius: "999px",

                background: "rgba(117,193,255,0.15)",

                filter: "blur(12px)",
              }}
            />

            {/* Pill edge */}
            <div
              style={{
                position: "absolute",

                inset: "1px",

                borderRadius: "18px",

                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            />
          </div>

          {/* =================================================
              NAVIGATION ITEMS
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              h-17
              items-center
            ">
            {bottomNavItems.map((item, index) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));

              /* =============================================
                   DAFTAR BUTTON
                ============================================= */

              if (item.isDaftar) {
                const isDaftarActive = pathname.startsWith("/daftar");

                return (
                  <Link
                    key="daftar"
                    href={item.link}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    aria-label="Daftar Program TKA"
                    className="
                        group
                        flex
                        flex-1
                        flex-col
                        items-center
                        justify-center
                        py-1.5
                      "
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}>
                    {/* AMBER LIQUID GLASS */}
                    <div
                      style={{
                        position: "relative",

                        width: "50px",
                        height: "46px",

                        borderRadius: "17px",

                        overflow: "hidden",

                        background: isDaftarActive
                          ? [
                              "linear-gradient(145deg, rgba(255,224,145,0.95) 0%, rgba(250,174,23,0.88) 45%, rgba(205,126,5,0.85) 100%)",

                              "rgba(250,174,23,0.72)",
                            ].join(", ")
                          : [
                              "linear-gradient(145deg, rgba(255,215,115,0.90) 0%, rgba(250,174,23,0.80) 50%, rgba(205,126,5,0.78) 100%)",

                              "rgba(250,174,23,0.66)",
                            ].join(", "),

                        backdropFilter: "blur(14px) saturate(180%)",

                        WebkitBackdropFilter: "blur(14px) saturate(180%)",

                        border: "0.7px solid rgba(255,255,255,0.48)",

                        boxShadow: [
                          "inset 0 1px 0 rgba(255,255,255,0.72)",

                          "inset 0 -1px 0 rgba(125,72,0,0.16)",

                          "inset 0 0 10px rgba(255,255,255,0.10)",

                          isDaftarActive
                            ? "0 7px 22px rgba(250,174,23,0.48)"
                            : "0 5px 16px rgba(250,174,23,0.34)",
                        ].join(", "),

                        display: "flex",

                        alignItems: "center",
                        justifyContent: "center",

                        transition:
                          "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",

                        transform: isDaftarActive ? "scale(1.07)" : "scale(1)",
                      }}>
                      {/* Amber top reflection */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",

                          top: "-2px",
                          left: "8%",
                          right: "8%",

                          height: "52%",

                          borderRadius: "16px 16px 65% 65%",

                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.12) 70%, transparent 100%)",

                          pointerEvents: "none",
                        }}
                      />

                      {/* Amber lower refraction */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",

                          right: "-8px",
                          bottom: "-12px",

                          width: "32px",
                          height: "32px",

                          borderRadius: "999px",

                          background: "rgba(255,238,190,0.27)",

                          filter: "blur(8px)",

                          pointerEvents: "none",
                        }}
                      />

                      {/* Inner glass edge */}
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute",

                          inset: "2px",

                          borderRadius: "15px",

                          border: "0.5px solid rgba(255,255,255,0.16)",

                          pointerEvents: "none",
                        }}
                      />

                      <item.icon
                        size={20}
                        color="white"
                        strokeWidth={2.5}
                        style={{
                          position: "relative",

                          zIndex: 2,

                          filter: "drop-shadow(0 1px 2px rgba(85,45,0,0.28))",
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontSize: "10px",

                        fontWeight: 700,

                        color: isDaftarActive ? "#FFD771" : "#FAAE17",

                        marginTop: "3px",

                        letterSpacing: "0.04em",

                        textShadow: "0 1px 6px rgba(250,174,23,0.16)",

                        transition: "all 0.25s ease",
                      }}>
                      Daftar
                    </span>
                  </Link>
                );
              }

              /* =============================================
                   NORMAL NAV ITEM
                ============================================= */

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="
                      group
                      flex
                      flex-1
                      flex-col
                      items-center
                      justify-center
                      py-1.5
                    "
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}>
                  <div
                    style={{
                      position: "relative",

                      display: "flex",

                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                    {/* Active icon glow */}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",

                          width: "30px",
                          height: "30px",

                          borderRadius: "999px",

                          background: "rgba(255,255,255,0.10)",

                          filter: "blur(10px)",
                        }}
                      />
                    )}

                    <item.icon
                      size={22}
                      strokeWidth={isActive ? 2.5 : 1.7}
                      style={{
                        position: "relative",

                        zIndex: 2,

                        color: isActive
                          ? "rgba(255,255,255,1)"
                          : "rgba(255,255,255,0.43)",

                        transform: isActive
                          ? "scale(1.12) translateY(-1px)"
                          : "scale(1)",

                        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",

                        filter: isActive
                          ? "drop-shadow(0 0 7px rgba(255,255,255,0.38))"
                          : "drop-shadow(0 1px 2px rgba(0,0,0,0.12))",
                      }}
                    />
                  </div>

                  <span
                    style={{
                      fontSize: "10px",

                      fontWeight: isActive ? 650 : 450,

                      color: isActive
                        ? "rgba(255,255,255,0.98)"
                        : "rgba(255,255,255,0.42)",

                      marginTop: "3px",

                      letterSpacing: "0.015em",

                      textShadow: isActive
                        ? "0 1px 7px rgba(255,255,255,0.16)"
                        : "none",

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
