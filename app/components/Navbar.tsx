import Link from "next/link";
import { Nav, NavLink, NavLogo } from "../styles/Navbar";
import { ButtonVariationA } from "../styles/Global";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo>[Test Image Logo]</NavLogo>
      <Link href="/">
        <NavLink>About</NavLink>
      </Link>

      <Link href="/">
        <NavLink>Services</NavLink>
      </Link>

      <Link href="/">
        <NavLink>Schedule</NavLink>
      </Link>

      <ButtonVariationA>Book Session</ButtonVariationA>
    </Nav>
  );
};
