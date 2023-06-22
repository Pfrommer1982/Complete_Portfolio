import React, { useRef, useState } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import { emailConfig } from '../../../your_info';

const ContactMe = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, userID } = emailConfig;

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='ContactMe'>
      <div className='form-container wow fadeInRight' data-wow-delay='.4s'>
        <div className='contact-form-wrapper d-flex justify-content-center'>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <h5 className='title'>Contact Me</h5>
            <p className='description'>
              Feel free to contact me if you like to reach out or have any
              questions.
            </p>
            <div>
              <input
                type='text'
                className='form-control rounded border-white mb-3 form-input'
                name='user_name'
                placeholder='Name'
                required
              />
            </div>
            <div>
              <input
                type='email'
                className='form-control rounded border-white mb-3 form-input'
                name='user_email'
                placeholder='Email'
                required
              />
            </div>
            <div>
              <textarea
                className='form-control rounded border-white mb-3 form-text-area'
                name='message'
                rows='5'
                cols='30'
                placeholder='Message'
                required
              ></textarea>
            </div>
            <div className='submit-button-wrapper' data-wow-delay='.6s'>
              {!isMessageSent ? (
                <button type='submit' className='submit-button'>
                  Send
                </button>
              ) : (
                <div className='success-message'>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for contacting me.</p>
                  
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
