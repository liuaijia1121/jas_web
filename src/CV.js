import React from 'react';
import './CV.css';  // 引入CSS样式

function CV() {
    return (
        <div className="cv-container">
            <h1>Aijia Liu</h1>

            <section className="contact-info">
                <p>Email Address: liuaijia1121@gmail.com</p>
                <p>Address: Wilhelmstr.27, 74072, Heilbronn</p>
                <p>Phone: 0162 7047474</p>
                <p>Date of Birth: Nov 21, 2001</p>
                <p>Nationality: China</p>
            </section>

            <section className="objective">
                <h2>OBJECTIVE</h2>
                <p>Always looking to learn new skills, take on extra responsibilities, and grow professionally.</p>
            </section>

            <section className="education">
                <h2>EDUCATION</h2>
                <p>Zhejiang, China | Sep 2017 - Jun 2020 | CAIE A-Level | Hangzhou Foreign Language School</p>
                <p>Heilbronn, Germany | Oct 2021 - Present | Information Engineering | Technical University of Munich</p>
                <p>Stuttgart, Germany | Nov 2020 - Jun 2021 | German Language Course | University of Stuttgart</p>
            </section>

            <section className="skills">
                <h2>SKILLS</h2>
                <ul>
                    <li>Java (Competent)</li>
                    <li>C (Novice)</li>
                    <li>Python (Novice)</li>
                </ul>
            </section>

            <section className="languages">
                <h2>LANGUAGES</h2>
                <ul>
                    <li>Chinese: Native</li>
                    <li>German: Intermediate (Goethe Certificate B2 Level)</li>
                    <li>English: Advanced (IELTS 7.0, C1 Level)</li>
                </ul>
            </section>

            <section className="honors-awards">
                <h2>HONORS & AWARDS</h2>
                <ul>
                    <li>Jan. 2018: Third Prize at the Zhejiang Brain Bee (Neuroscience) Competition</li>
                    <li>Oct. 2017: Acquired the Global Golden Award at the UKMT.</li>
                </ul>
            </section>
        </div>
    );
}

export default CV;
