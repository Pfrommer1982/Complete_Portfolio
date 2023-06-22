import React from 'react';
import { name, socialProfiles } from '../../../your_info';
import Navbar from '../Navbar/Navbar';
import Typewriter from '../Typewriter/Typewriter';
import './Hero.css';
import { backgroundImageUrl } from '../../../your_info';


const Hero = () => {
  const { firstname, lastname } = name;

  const heroStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  return (
    <section id='Home' className='hero-area' style={heroStyle}>
      <Navbar />
      <div className='container'>
        <div className='row align-items-center'>
          <div className='hero-content'>
            <div className='name-container wow fadeInLeft' data-wow-delay='.4s'>
              <name>
                <h1 className='first-name'>{firstname}</h1>
                <h1 className='last-name'>{lastname}</h1>
              </name>
            </div>
            <div className='typewriter-container wow fadeInLeft' data-wow-delay='.6s'>
              <Typewriter />
      
            </div>
            <div className='btn-pos'>
              {socialProfiles.map((profile, index) => (
                <a
                  href={profile.url}
                  id={`button`}
                  className='btn wow fadeInLeft'
                  data-wow-delay={`${index * 0.2 + 0.8}s`}
                  key={index}
                >
                  <i className={`icon ${profile.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
