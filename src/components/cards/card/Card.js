import React from 'react';
import './Card.css';

export default function Card({ title, img, url, text, stack, id, subtitle }) {
  const handleClick = () => {
    window.open(url);
  };
  return (
    <>
      <div className="project">
        <div className="imgProjectContainer">
          <img src={img} alt="projectPreview" />
        </div>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="stack">
          {stack && stack.map((icon) => <img className="iconT" alt="imgIcon" src={icon} />)}
        </div>
        <div className="projectInfo">
          <p className="fontText">{text}</p>
        </div>

        <div className="siteBtn" onClick={handleClick}>
          web
        </div>
      </div>
    </>
  );
}
