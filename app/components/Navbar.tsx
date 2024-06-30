import Link from "next/link";
import {
  Nav,
  NavLink,
  NavLogo,
  LogoContainer,
  LinkContainer,
  LinkList,
} from "../styles/Navbar";
import { ButtonVariationA } from "../styles/Global";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <NavLogo>EXAMPLE LOGO</NavLogo>
      </LogoContainer>

      <LinkList>
        <LinkContainer>
          <NavLink href="/About">About</NavLink>
        </LinkContainer>

        <LinkContainer>
          <NavLink href="/Services">Services</NavLink>
        </LinkContainer>

        <LinkContainer>
          <NavLink href="/Schedule">Schedule</NavLink>
        </LinkContainer>

        <ButtonVariationA>Book Session</ButtonVariationA>
      </LinkList>
    </Nav>
  );
};

export default Navbar;
