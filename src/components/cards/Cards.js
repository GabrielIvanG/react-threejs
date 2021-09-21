import React from 'react';
import Card from './card/Card';
import airGarageIMG from '../../Imgs/pres.jpg';
import './Cards.css';
import ReactLogo from '../../Svgs/react.png';
import HtmlLogo from '../../Svgs/html5.png';
import nodeLogo from '../../Svgs/nodejs_small.png';

const cards = [
  {
    id: 1,
    title: 'Air-Garage',
    subtitle: 'WebApp',
    text: ' Challenge realizado para empresa air garage, utilizando React, Css, HTML, Express, Node',
    img: airGarageIMG,
    url: 'https://parking-challenge.vercel.app/',
    icons: [ReactLogo, HtmlLogo, nodeLogo],
  },
  {
    id: 2,
    title: 'Air-Garage',
    subtitle: 'WebApp',
    text: ' Challenge realizado para empresa air garage, utilizando React, Css, HTML, Express, Node',
    img: airGarageIMG,
    url: 'https://parking-challenge.vercel.app/',
    icons: [ReactLogo, HtmlLogo, nodeLogo],
  },
];

export default function Cards() {
  return (
    <div className="cardsGrid">
      {cards.map(({ title, subtitle, text, img, url, icons, id }) => (
        <div className="Card">
          <Card
            key={id}
            title={title}
            subtitle={subtitle}
            text={text}
            img={img}
            url={url}
            stack={icons}
          />
        </div>
      ))}
    </div>
  );
}
