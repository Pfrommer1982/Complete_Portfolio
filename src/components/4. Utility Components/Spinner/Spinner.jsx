import React, { useEffect, useState } from 'react';
import './Spinner.css';

const Spinner = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 100) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 6);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="page-loader">
      <div className="team-loader">
        <div id="loader-text" className="loader-text">
          <span>WELCOME</span>
        </div>
        <div className="pulse-loader">
          <div className="countup">{count}%</div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
