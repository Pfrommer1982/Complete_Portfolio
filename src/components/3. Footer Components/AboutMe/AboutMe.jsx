import React from 'react';
import './AboutMe.css';
import ContactMe from '../ContactMe/ContactMe';
import { aboutMeText } from '../../../your_info';

const AboutMe = () => {
  const { infotext , power_slogan } = aboutMeText;
  return (
    <section id="AboutMe" className="section About">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex align-items-center">
            <div className="cta-content">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                About me: <br />
              </h2>

              <p className="wow fadeInUp" data-wow-delay=".4s">
                <hr /> {infotext}
              
                <hr />
                <h2>{power_slogan} </h2>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="contact-sidebar">
              <ContactMe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;



