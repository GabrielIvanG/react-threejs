import './ButtonNextPage.css';
import React from 'react';
import { Link as LinkS } from 'react-scroll';

export default function ButtonNextPage() {
  return (
    <>
      <div className="nextPageButton">
        <LinkS
          containerId="AppID"
          activeClass="active"
          to="sectionAbout"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          Proyectos
        </LinkS>
      </div>
    </>
  );
}
