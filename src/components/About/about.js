import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id='about'>
            <span className="aboutTitle">Who I Am</span>
            <span className="aboutDesc">
                I am currently pursuing B.Tech in CSE (AIML) at MVGR College of Engineering with a strong CGPA of 9.29.
                <br /><br />
                I have completed multiple internships and built various real-time projects in AI/ML, full-stack development, and computer vision.
                <br /><br />
                I'm proficient in JavaScript, Python, React.js, Node.js, and frameworks like FastAPI, Flask, and Django.
                <br /><br />
                I'm also experienced in ML/DL tools like PyTorch, OpenCV, and LangChain.
            </span>
        </section>
    );
};

export default About;
