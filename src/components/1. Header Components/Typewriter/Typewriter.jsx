import React, { useState, useEffect, useMemo } from 'react';
import { typeWriterText } from '../../../your_info'
import './Typewriter.css';


const typing_speed = 150;
const backspace_speed = 50;

function Typewriter() {
  const [skill, setSkill] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isDeleting) {
        setSkill(prevSkill => prevSkill.substring(0, prevSkill.length - 1));
        if (skill === '') {
          setIsDeleting(false);
          setIsFullyDisplayed(false);
        }
      } else {
        const nextSkill = typeWriterText[index];
        setSkill(prevSkill => nextSkill.substring(0, prevSkill.length + 1));
        if (skill === nextSkill) {
          setIsFullyDisplayed(true);
          setTimeout(() => {
            setIsDeleting(true);
            setTimeout(() => {
              setIsFullyDisplayed(false);
              setIndex((index + 1) % typeWriterText.length);
            }, 500);
          }, 1000);
        }
      }
    }, isFullyDisplayed ? backspace_speed : typing_speed);

    return () => clearInterval(interval);
  }, [skill, isDeleting, index, isFullyDisplayed]);

  const blinkingCursor = useMemo(() => {
    return isFullyDisplayed ? '' : <span className="blinking-cursor">_</span>;
  }, [isFullyDisplayed]);

  return (
    <p>{skill}{blinkingCursor}</p>
  );
}

export default Typewriter;
