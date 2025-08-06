import React from 'react';
import './skills.css';
import web from '../../assets/web.png';
import aiml from '../../assets/aiml.png';
import fullstack from '../../assets/fullstack.png';
const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Go Through my works.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={aiml} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AI/ML Development</h2>
                        <p> Developed real-time ML models such as food weight estimation, document RAG systems, and retinal disease classification.
</p>
<p> Expertise in computer vision, NLP, and deep learning.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={fullstack} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full-Stack Web Development
</h2>
                        <p>Built and deployed responsive applications using the MERN stack with JWT Auth and REST APIs.
</p>
<p>Skilled in building scalable frontend and backend apps.
</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={web} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web-App Development
</h2>
                        <p>Experience with building and deploying web apps using Streamlit, React, and FastAPI for real-world applications.
</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;