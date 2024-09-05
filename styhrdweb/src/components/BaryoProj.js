import React, { useState } from 'react';
import '../styles/baryo.scss'

export const BaryoProj = ({ onBackToProjects }) => {
    const slides = [
        {
            title: 'Location-Based Filtering',
            description: 'Users can easily filter job listings by location, allowing them to find opportunities near them or in their preferred areas. This feature helps streamline the search process, making it quicker to find relevant local jobs.',
            img: 'assets/baryo3.png'
        },
        {
            title: 'Tailored Job Listings by Skills',
            description: 'Baryo Work provides a personalized job search experience by matching users skills with job requirements.The platform analyzes user profiles and suggests roles that align with their abilities, ensuring a better fit between candidates and job openings.',
            img: 'assets/baryo2.png'
        },
        {
            title: 'Easy Application Process',
            description: 'Applying for jobs on Baryo Work is fast and simple. Users can submit applications with just a few clicks, reducing the time and effort traditionally required, while ensuring all relevant information is included.',
            img: 'assets/baryo2.png'
        },
        {
            title: 'Easy Profiling for Employers',
            description: 'Employers can easily view detailed profiles of applicants, allowing them to quickly assess qualifications, skills, and suitability for the role without needing to sift through extensive resumes.',
            img: 'assets/baryo2.png'
        }
        // Add more slides as needed
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };


    return (
        <div className='baryopage'>
            <div onClick={() => onBackToProjects('projects')} className='backbutt'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </div>

            <div className='anapolocont'>
                <div className='anapoloheader'>BARYOWORK</div>
                <div className='anapolopics'>
                    <img src='assets/baryo1.png' className='laptop'></img>
                    <img src='assets/baryo2.png' className='mobile'></img>
                </div>
                <p className='anapolodesc'>BaryoWork connects employers with top talent, offering streamlined job postings, applications, and candidate management. It simplifies the recruitment process with personalized job recommendations and efficient profile management.</p>
            </div>
            <div className='anapoloheader'>FEATURES</div>
            <p className='anapolodesc2'> This platform is designed to simplify your job search and hiring process. Explore our features below to discover how we make finding tailored opportunities, filtering by location, and applying for jobs easier than ever. Employers can also benefit from streamlined profiling, making it effortless to connect with the right candidates. Browse the features to learn more!</p>

            <div className='slideshow'>
                <div className='slide'>
                    <img src={slides[currentSlide].img} alt={slides[currentSlide].title} className='slide-img' />
                    <div className='slide-info'>
                        <h2 className='slide-title'>{slides[currentSlide].title}</h2>
                        <p className='slide-description'>{slides[currentSlide].description}</p>
                    </div>
                </div>

                <div className='slideshow-controls'>
                    <button onClick={goToPreviousSlide}>Previous</button>
                    <button onClick={goToNextSlide}>Next</button>
                </div>
            </div>
        </div>
    )
}
