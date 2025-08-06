import React from 'react';
import './works.css';

const projects = [
    {
        title: "Food Scanner with Weight Estimation",
        description: "A real-time Computer Vision system built using OpenCV, YOLOv5, and custom CNN models to detect food items and estimate their weight. Developed during an internship at NIT Warangal. The system helps automate food calorie tracking using visual inputs.",
        link: "https://github.com/Yesaswi33/food_scanner_wt_estimation"
    },
    {
        title: "RAG-Based Legal Assistant",
        description: "An AI-powered assistant for legal professionals that uses LangChain, OpenAI APIs, FAISS, and Retrieval-Augmented Generation (RAG) to analyze lengthy legal documents efficiently. Built with FastAPI and React, achieving up to 50% faster legal research.",
        link: "https://github.com/Yesaswi33/rag_based_leagal_document_reader"
    },
    {
        title: "Retinal Disease Classifier",
        description: "A deep learning solution for detecting retinal diseases from fundus images using PyTorch and CNNs. Integrated with a Streamlit UI for end-user interaction. Supports early diagnosis for medical practitioners.",
        link: "https://github.com/Yesaswi33/retinal_disease_classification_web_app_DL"
    },
    {
        title: "Potato Leaf Disease Detection",
        description: "An end-to-end plant disease detection app using Convolutional Neural Networks for classifying potato leaf diseases. Built with FastAPI (backend) and React.js (frontend), suitable for real-time agricultural diagnostics.",
        link: "https://github.com/Yesaswi33/potato_leaf_disease_diagnosis"
    },
    {
        title: "Helmet Detection System",
        description: "A safety enforcement tool using deep learning models (MobileNetV2, EfficientNet, ResNet50) for real-time detection of helmet compliance in surveillance footage. Trained on custom datasets using TensorFlow/Keras.",
        link: "https://github.com/Yesaswi33/helmet-nohelmet_dl"
    },
    {
        title: "Multi-Domain Recommendation System",
        description: "A machine learning-based content recommendation system supporting multiple domains like movies, books, and products. Built using Scikit-Learn, pandas, and Flask, offering collaborative and content-based filtering approaches.",
        link: "https://github.com/Yesaswi33/multi_domain_recommendation_system_ml"
    },
    {
        title: "Video Summarization",
        description: "An AI tool for summarizing long videos using AgenticAI, NLP techniques, and embedding models. Built for improving content digestion in educational and professional domains. Technologies include Python, Transformers, and LangChain.",
        link: "https://github.com/Yesaswi33/video_summerizarion_agenticai"
    },
    {
        title: "culiNYary_quest",
        description: "A Django-powered social platform for food enthusiasts to explore, share, and review recipes. Includes user authentication, image uploads, and search functionality. Built with Django, PostgreSQL, Bootstrap, and Cloudinary.",
        link: "https://github.com/Yesaswi33/culiNYary_quest"
    },
];

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">Here are a few selected works:</span>
            <div className="projectGrid">
                {projects.map((project, index) => (
                    <div
                        className={`projectCard ${index % 2 === 0 ? 'horizontalCard' : 'verticalCard'}`}
                        key={index}
                    >
                        <h3 style={{ color: '#BDC2F2' }}>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
                    </div>
                ))}
            </div>
            <button className="workBtn">See More</button>
        </section>
    );
};

export default Works;
