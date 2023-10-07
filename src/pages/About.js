import React from 'react';
import AboutImage from "../assets/About.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          <b>Indian cuisine</b> consists of a variety of <b>religion</b> and <b>traditional cuisines</b> native to India.
          Given the diversity in <i>soil, climate, culture, ethnic groups, and occupations</i>
          these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.
          Indian food is also heavily influenced by <b>religion cultural choices and traditions</b>.
        </p>
      </div>
    </div>
  );
}

export default About