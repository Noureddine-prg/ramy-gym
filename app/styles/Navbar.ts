import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #0f172a;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky; 
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const LinkContainer = styled.li`
  margin: 0 1rem;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: white;
  padding: 0 1rem;
`;

export const NavLogo = styled.div`
  color: #0f172a;
  font-weight: bold;
  font-size: 1.5rem;
`;