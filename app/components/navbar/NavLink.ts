export interface NavLink {
  id: number;
  to: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/about", label: "About Us" },
  { id: 4, to: "/contact", label: "Contact Us" },
];
