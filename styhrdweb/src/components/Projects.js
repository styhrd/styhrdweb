import React from 'react';
import '../styles/project.scss'

const Projects = ({ onProjectSelect }) => {
    return (
        <div className='projectpage'>
            <div className='projects'>
                <div className='project'>
                    <img src="/assets/anapolo.png" alt="Project Thumbnail" className='projpic' />
                    <div className='projdescription'>
                        <p className='projheader'>ANAPOLO</p>
                        <p>Anapoló is an innovative e-learning application designed for law students to enhance their learning and retention of legal concepts. Utilizing spaced repetition and Case-Based Reasoning (CBR), Anapoló helps students memorize complex legal material more effectively.</p>
                        <button onClick={() => onProjectSelect('anapoloProj')}>More Information -> </button>
                    </div>



                </div>

                <div className='project'>
                    <img src="assets/baryo.png" alt="Project Thumbnail" className='projpic' />
                    <div className='projdescription'>
                        <p className='projheader'>BARYOWORK</p>
                        <p>BaryoWork connects employers with top talent, offering streamlined job postings, applications, and candidate management. It simplifies the recruitment process with personalized job recommendations and efficient profile management.</p>

                        <button onClick={() => onProjectSelect('baryoProj')}>More Information -></button>
                    </div>

                </div>


            </div>

            <div className='ikonicproject'>
                <div className='projdescription'>
                    <p className='projheader'>IKONIC STUDIOS</p>
                    <p className='mobdes'>Ikonic Studios is a newborn photograph studio in the Philippines. To see the studios website, visit this link: <i><a target='_blank' href='https://ikonicstudios.online'>https://ikonicstudios.online</a> </i> </p>
                </div>

            </div>

            <div className='kisigcont'>
                <p className='kisigheader'>ONGOING PROJECT</p>
                <div className='kisigproj'>
                    <img src='assets/kisig.png'></img>
                    <div className='kisigdesc'>
                        <p className='projheader'>
                            KISIG
                        </p>

                        <p className='kisigp'>
                            Kisig is your all-in-one fitness app, designed to guide you from beginner to expert. With tailored workout plans, nutrition advice, and progress tracking, Kisig empowers you to achieve your fitness goals at your own pace. Whether you're just starting out or looking to refine your regimen, Kisig adapts to your needs, providing expert guidance and motivation every step of the way. Elevate your fitness journey with Kisig!
                        </p>

                    </div>


                </div>
                <p className='projfeatures'>
                    Features
                </p>
                <div className='features'>
                    <ul>
                        <li>Automatic Calorie Calculator</li>
                        <li>Workout Progress Tracker</li>
                        <li>Running Progress Tracker</li>
                    </ul>
                    <ul className='ul2'>
                        <li>Customizable Workout Plans</li>
                        <li>Goal Setting and Reminders</li>
                        <li>Social Sharing and Community Support</li>
                    </ul>
                </div>
            </div>




            <div>

            </div>
        </div >
    );
};

export default Projects;
