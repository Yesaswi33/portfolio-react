import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Yesaswi Madabattula</span> </span>
                <p className="introPara">I am a passionate AI/ML enthusiast and full-stack web developer  
with hands-on experience in building intelligent and scalable web applications.</p>
<a href="https://github.com/Yesaswi33" target="_blank" rel="noopener noreferrer">
  <button className="btn">
    <img src={btnImg} alt="Hire" className='btnImg' /> Hire Me
  </button>
</a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;