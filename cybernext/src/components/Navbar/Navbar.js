import React from "react";
import Me from "../../assets/Images/me.png";
import { Mid, Container, Right, Status, Logo } from "./Navbar.styles";
const NavBar = () => {
  return (
    <Container>
      <div className="wholething">
        <Logo>
          <h3 className="logo-image">Cybernext</h3>
        </Logo>
        <Mid>
          <ul>
            <li>Home</li>
            <li>Support</li>
            <li>Stakes</li>
            <li>About</li>
            <li>Cybernext</li>
          </ul>
        </Mid>
        <Right>
          <img width={50} height={50} src={Me} alt="me" />
          <Status />
        </Right>
      </div>
    </Container>
  );
};

export default NavBar;
