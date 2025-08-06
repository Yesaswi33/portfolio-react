import './contact.css';
import youtubeIcon from '../../assets/youtube.png'; // adjust the path based on your file structure
import link from '../../assets/link.png';
import git from '../../assets/git.png';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';
import ibm from '../../assets/ibm.png';
import nit from '../../assets/nit.png';
import salesforce from '../../assets/salesforce.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Experience</h1>
                <span className="clientDesc">
                    I have worked with diverse teams and organizations:
                </span>
                <ul className="experienceList">
                    <li>• NIT Warangal (AI/ML Intern)</li>
                    <li>• Salesforce (Virtual Intern – CRM Development)</li>
                    <li>• IBM Edunet Foundation / AICTE (Virtual Intern – Secure Data Hiding)</li>
                </ul>
                <div className="clientImgs">
                    
                    <img src={nit} alt="NIT" className="clientImg" />
                    <img src={salesforce} alt="Salesforce" className="clientImg" />
                    <img src={ibm} alt="IBM" className="clientImg" />
                </div>
            </div>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='from_email' required />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                    <button type="submit" className='submitBtn'>Submit</button>

                    <div className="links">
                        <a href="https://x.com/Yesaswiii" target="_blank" rel="noopener noreferrer">
                            <img src={twitterIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://github.com/Yesaswi33" target="_blank" rel="noopener noreferrer">
                            <img src={git} alt="git" className="link" />
                        </a>
                        <a href="www.linkedin.com/in/yesaswi-madabattula" target="_blank" rel="noopener noreferrer">
                            <img src={link} alt="link" className="link" />
                        </a>
                        <a href="https://www.youtube.com/@yesaswimadabattula8261" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="link" />
                        </a>
                        <a href="https://www.instagram.com/yesaswi_madabattulaaa/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;
