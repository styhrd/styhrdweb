import React from 'react'
import '../styles/skills.scss'
const Skills = () => {
    return (<>

        <div className='skillspage'>
            <div><p className='skillheader'>HERE'S HOW I CAN HELP YOU</p></div>

            <div className='services'>
                <div className='servicescont'>
                    <div className='service'>
                        <div className='serviceheader'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-database icon" viewBox="0 0 16 16">
                                <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
                            </svg>
                            <p>Backend Software Development</p>
                        </div>
                        <div className='servicecontent'>
                            <p>As a backend developer, I specialize in building secure and scalable systems using MongoDB with Node.js and PHP with MySQL. I design efficient databases and optimize server performance to support dynamic web applications.</p>
                        </div>
                    </div>
                    <div className='service'>
                        <div className='serviceheader'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash icon" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                            </svg>
                            <p>Frontend Software Development</p>
                        </div>
                        <div className='servicecontent'>
                            <p>For frontend development, I use HTML, CSS, and React.js to create responsive and interactive user interfaces. My focus is on delivering intuitive and engaging experiences, ensuring seamless functionality and visually appealing designs.</p>
                        </div>
                    </div>
                </div>



                <div className='servicescont'>
                    <div className='service'>
                        <div className='serviceheader'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" icon bi bi-display" viewBox="0 0 16 16">
                                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
                            </svg>
                            <p>UI/UX Design</p>
                        </div>
                        <div className='servicecontent'>
                            <p>I prioritize following key UI principles and best practices to create intuitive, user-friendly interfaces. I focus on crafting designs that are not only visually appealing but also enhance the overall user experience, ensuring accessibility, usability, and consistency throughout the application.</p>
                        </div>
                    </div>

                    <div className='service'>
                        <div className='serviceheader'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" icon bi bi-git" viewBox="0 0 16 16">
                                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.03 1.03 0 0 0 0-1.457" />
                            </svg>
                            <p>Version Control</p>
                        </div>
                        <div className='servicecontent'>
                            <p>As a full stack developer, I am proficient in version control using Git and GitHub, allowing me to manage code efficiently and collaborate effectively on projects.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='frameworks'>
                <div>
                    <p className='frameheader'>FRAMEWORKS</p>
                </div>

                <div className='frameworkcont'>
                    <div className='framework' >
                        <div className='mernframe'>
                            <img src='/assets/mern.webp'></img>
                            <p className='framecontent'>As an experienced MERN stack developer, I specialize in building robust applications using MongoDB, Express.js, React.js, and Node.js. I focus on implementing secure authentication mechanisms, optimizing performance, and ensuring smooth, responsive user interfaces. My approach includes comprehensive testing and debugging to deliver reliable and high-quality applications. I am skilled in using this stack to create scalable, dynamic web applications that meet diverse client needs.</p>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='framework'>
                        <div className='mernframe'>
                            <div className='framepics'>
                                <img src='/assets/apachelogo.png'></img>
                                <img src='/assets/php.png'></img>
                                <img src='/assets/sql.png' className='sqlpic'></img>
                            </div>

                            <p className='framecontent'> I excel in building dynamic web applications using Apache, MySQL, and PHP. I focus on creating efficient server-side scripts, managing databases, and optimizing server performance for fast and secure applications. My expertise includes implementing robust authentication systems, optimizing SQL queries, and applying best practices for security and scalability. I am dedicated to delivering reliable and well-tested applications that provide seamless user experiences.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>

    )
}

export default Skills