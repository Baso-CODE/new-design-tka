import React from "react";
import FloatingCTA from "../components/floatingCTA";
import FooterEduMatrix from "../components/footerEdumatrix";
import BottomNavigationBarOSN from "../components/navbar/BottomNavigationBarOSN";
import { navLinks } from "../components/navbar/NavLink";
import ResponsiveNav from "../components/navbar/ResponsiveNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResponsiveNav />
      <main>{children}</main>
      <FloatingCTA />
      <BottomNavigationBarOSN navLinksData={navLinks} />
      <FooterEduMatrix />
    </>
  );
}
