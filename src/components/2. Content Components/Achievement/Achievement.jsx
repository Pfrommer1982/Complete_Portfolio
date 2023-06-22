import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Achievement.css';
import { achievements } from '../../../your_info';

const Achievement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="our-achievement section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 col-md-12 col-12">
            <div className="title">
              <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing"</h2>
              <p>Fusce at libero id massa ornare molestie sed eu tellus.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
            <div className="row">
              {achievements.map((info, index) => (
                <div className="col-lg-4 col-md-4 col-12" key={index}>
                  <div ref={ref} className="single-achievement wow fadeInUp" data-wow-delay={(index * 0.2) + 's'}>
                    {isVisible && (
                      <h3 className="counter">
                        <CountUp start={0} end={info.value} duration={4} separator="," />
                        <span>{info.unit}</span>
                      </h3>
                    )}
                    <p>{info.word}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
