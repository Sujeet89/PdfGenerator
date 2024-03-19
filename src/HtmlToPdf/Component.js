import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Component =() =>{
    const contentRef = useRef(null);

    const handleDownloadPDF = () => {
        const element = contentRef.current;
        const opt = {
            margin: 1,
            filename: 'my_document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    };

    return (<>
        <div ref={contentRef}>
            <div>
                <nav className="Navbar">
                    <div className="l-Wrapper l-Wrapper--reset@sm-down">
                        <ul className="u-pullRight u-hidden@xs-down">
                            <li>
                                <a className="Navbar-btn Navbar-btn--main" href="http://sonjastrieder.com/download/sonja-strieder-frontend-ui-developer.pdf" target="_blank" rel="noreferrer">Download
                                    <span>(pdf)</span>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/sonjastrieder" target="_blank" rel="noreferrer">Linkedin</a></li>
                            <li><a href="https://twitter.com/sonjastrieder" target="_blank" rel="noreferrer">Twitter</a></li>
                            <li><a href="https://codepen.io/sonjastrieder" target="_blank" rel="noreferrer">Codepen</a></li>
                        </ul>
                    </div>
                </nav>

                <article className="l-Wrapper">

                    <div className="l-Header">
                        <div className="l-Header-col">
                            <a href="http://www.sonjastrieder.com" target="_blank" rel="noreferrer">
                                <h1 className="Title">
                                    <span className="u-shadow">
                                        Sonja<br />
                                        Strieder
                                    </span>
                                    <span className="Title-sub">Front-end UI developer</span>
                                </h1>
                            </a>
                        </div>
                        <div className="l-Header-col Contact">
                            <div>Seattle, WA</div>
                            <div><a className="u-link" href="http://sonjastrieder.com/" target="_blank" rel="noreferrer">www.sonjastrieder.com</a></div>
                            <div><a className="u-link" href="mailto:sonja.strieder@gmail.com" target="_blank" rel="noreferrer">sonja.strieder@gmail.com</a></div>
                        </div>
                    </div>

                    <section className="l-Section">
                        <h2 className="l-Section-title h3 u-hidden@sm-down">Profile</h2>
                        <div className="l-Section-content">
                            <p>I specialize in component based HTML/CSS architecture, with a focus on maintainability and scalability, a mobile first approach.</p>
                        </div>
                    </section>

                    <section className="l-Section">
                        <h2 className="l-Section-title h3">Skills</h2>
                        <div className="l-Section-content">
                            <ul>
                                <li>Highly skilled in creating performant <strong className="Tag">HTML</strong>, <strong className="Tag">CSS</strong></li>
                                <li>Passionate about <strong className="Tag">CSS Methodologies</strong> and <strong className="Tag">CSS Preprocessors</strong></li>
                                <li>Skilled in creating <strong className="Tag">Component Libraries</strong>, <strong className="Tag">Prototypes</strong> and <strong className="Tag">Style Guides</strong></li>
                                <li>Experienced with <strong className="Tag">Templating Languages</strong> and <strong className="Tag">JavaScript</strong></li>
                                <li>Proficient with <strong className="Tag">Task Runners</strong> and <strong className="Tag">Package Managers</strong> and <strong className="Tag">Version Control Systems</strong></li>
                                <li>Knowledgeable about <strong className="Tag">User Experience</strong>, <strong className="Tag">Accessibility</strong>, <strong className="Tag">Performance</strong>, <strong className="Tag">Responsive Web Development</strong> with a <strong className="Tag">Mobile First</strong>          approach, <strong className="Tag">Cross-Browser Compatibilities</strong> and <strong className="Tag">Progressive Enhancement</strong>.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="l-Section">
                        <h2 className="l-Section-title h3">Experience</h2>
                        <div className="l-Section-content">
                            <h3>Freelance Front-end Developer</h3>
                            <a className="u-link" href="http://www.sonjastrieder.com/" target="_blank" rel="noreferrer">Self-employed, Seattle</a> (WA) May 2017 - present

                            <h3>Front-end Developer</h3>
                            <a className="u-link" href="https://www.snaptechnology.co.uk/" target="_blank" rel="noreferrer">Snap Fashion, London</a> (UK) May 2014 - Jul 2016
                            <ul className='list'>
                                <li>Re-architected CSS/HTML codebase of the responsive Snap Fashion website for better maintainability and performancehttps://www.snaww.snapttps://www.snaww.snapttps://www.snaww.snapttps://www.snaww.snapttps://www.snaww.snaptectecttps://www.snawwnaww.snapttps://www.snaww.snaptectecttps://www.snaww.snaptechnology.co.uk/https://www.snaptechnology.co.uk/https://www.snaptechnology.co.uk/https://www.snaptechnology.co.uk/</li>
                                <li>Introduced Grunt, Bower and npm to automate common tasks, optimize frontend assets and manage third party packages.</li>
                                <li>Created and maintained a style guide to use as a reference for our design language.</li>
                                <li>Delivered front-end work for various external and internal projects to the backend team.</li>
                                <li>Built a JavaScript widget for integration of product feeds on third party websites using the Snap Fashion API.</li>
                                <li>Developed prototypes including a Chrome extension and browser bookmarklet.</li>
                                <li>Offered guidance and support to the design team, advising on core web design principles, best practice and work flow.
                                </li>
                            </ul>

                            <h3>Web Design & Interface Specialist</h3>
                            <a className="u-link" href="http://www.johnhenry.net/" target="_blank" rel="noreferrer">JohnHenry, London</a> (UK)Jun 2010 - May 2014
                            <ul>
                                <li>Working within a team of 16+ I’ve established myself as a front-end developer with a strong focus on web standards, semantics, accessibility and progressive enhancement (HTML/CSS).</li>
                                <li>Designed and/or built Wordpress themes as well as Shopify themes from scratch or customized them depending on the client’s needs.</li>
                                <li>Headed the design team and designed simple and clean user interfaces.
                                </li>
                            </ul>

                            <h3>Web Specialist</h3>
                            <a className="u-link" href="http://www.johnhenry.net/" target="_blank" rel="noreferrer">JohnHenry, London</a> (UK) Oct 2009 - Jun 2010
                            <ul>
                                <li>Designed client websites and features as well as customized social media channels to improve their online presence.</li>
                                <li>Content management, including image processing for the web.</li>
                                <li>Built HTML newsletters and managed the distribution through the in house newsletter management system.</li>
                                <li>Assisted the development team with HTML and CSS updates
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="l-Section">
                        <h2 className="l-Section-title h3">Education</h2>
                        <div className="l-Section-content">
                            <h3>BSc, Media-technology and -design</h3>
                            <a className="u-link" href="https://www.fh-ooe.at/en/hagenberg-campus/" target="_blank" rel="noreferrer">University of Applied Sciences Campus Hagenberg</a> (AUT)<br /> 2006 - 2009
                            <p>A full-time degree programme that provides the technical expertise as well as the design and communication skills in areas including web (backend and frontend development), multimedia, 3D modelling, animation, audio & video production.</p>
                        </div>
                    </section>

                    <section className="l-Section u-hidden@print">
                        <h2 className="l-Section-title h3">Interests</h2>
                        <div className="l-Section-content">
                            <p>User Experience, Accessibility, Web Standards, Automatization, Technology, Simplicity, Snowboarding, Bouldering, Coffee, Food, Art, Music, Movies, Traveling, Cabins, Plants, Goats, Chickens</p>
                        </div>
                    </section>
                </article>

                <div className="l-Wrapper u-keyline">
                    <div className="l-Footer">
                        <div className="l-Footer-col">
                            <strong className="Tag">S. Strieder</strong>
                        </div>
                        <div className="l-Footer-col Contact">
                            <a href="http://sonjastrieder.com" target="_blank" rel="noreferrer">sonjastrieder.com</a>
                            <a href="mailto:sonja.strieder@gmail.com" target="_blank" rel="noreferrer">sonja.strieder@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
    </>
    );
}

export default Component;
