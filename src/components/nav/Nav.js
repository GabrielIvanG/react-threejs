import React from 'react';
import { Link as LinkS } from 'react-scroll';
import './Nav.css';

export default function Nav() {
  return (
    <div id="navbar">
      <LinkS
        containerId="AppID"
        activeClass="active"
        to="sectionHome"
        spy={true}
        smooth={true}
        offset={0}
        duration={150}
      >
        Home
      </LinkS>
      <LinkS
        containerId="AppID"
        activeClass="active"
        to="sectionAbout"
        spy={true}
        smooth={true}
        offset={0}
        duration={150}
      >
        Projects
      </LinkS>
      <LinkS
        containerId="AppID"
        activeClass="active"
        to="sectionContact"
        spy={true}
        smooth={true}
        offset={0}
        duration={150}
      >
        Contact
      </LinkS>
    </div>
  );
}
