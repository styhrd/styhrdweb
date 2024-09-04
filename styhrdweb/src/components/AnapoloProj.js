import React from 'react';
import '../styles/anapolo.scss'

export const AnapoloProj = ({ onBackToProjects }) => {
    return (
        <div className='anapolopage'>
            <div onClick={() => onBackToProjects('projects')} className='backbutt'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </div>
            <div className='anapolocont'>
                <div className='anapoloheader'>ANAPOLO</div>
                <div className='anapolopics'>
                    <img src='assets/anapolo1.png' className='laptop'></img>
                    <img src='assets/anapolo2.png' className='mobile'></img>
                </div>
                <p className='anapolodesc'>Anapoló is an innovative e-learning application designed for law students to enhance their learning and retention of legal concepts. Utilizing spaced repetition and Case-Based Reasoning (CBR), Anapoló helps students memorize complex legal material more effectively.</p>
            </div>
            <div className='anapolofeatures'>
                <div className='feathead'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4 icon" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    </svg>
                    <p > Flashcard Scheduling</p>
                </div>

                <div className='featdesc'>

                    <p>The Leitner system schedules flashcard reviews based on user performance, with correct answers leading to longer review intervals, and incorrect answers triggering more frequent reviews. Combined with the Fibonacci sequence, this approach ensures optimal intervals for long-term retention.</p>
                </div>
                <img src='assets/sched.png'></img>

                <div className='feathead'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-text icon" viewBox="0 0 16 16">
                        <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                    </svg>
                    <p > Mock Case Assessment</p>
                </div>

                <div className='featdesc'>

                    <p>This app used the ChatGPT API to assess mock case responses, scoring them based on accuracy and relevance. The API provides consistent, objective feedback and points, ensuring reliable performance evaluation.</p>
                </div>
                <img src='assets/case.png'></img>

                <div className='feathead'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text icon" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <p > Flashcard Customization</p>
                </div>

                <div className='featdesc'>

                    <p>The system allows users to customize flashcards through CRUD operations: creating new flashcards, reading and viewing existing ones, updating details, and deleting them as needed. This flexibility ensures that users can tailor their study materials to their preferences.</p>
                </div>
                <img src='assets/flash.png'></img>
            </div>


        </div>
    );
};
