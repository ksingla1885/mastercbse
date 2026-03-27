import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const HtmlCssChapter = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const htmlElements = [
        {
            title: 'Headings',
            code: '<h1> to <h6>',
            preview: (
                <>
                    <h1 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>Heading 1</h1>
                    <h2 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>Heading 2</h2>
                    <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Heading 3</h3>
                </>
            )
        },
        {
            title: 'Paragraph & Links',
            code: '<p>, <a href="">',
            preview: (
                <>
                    <p style={{ margin: '0.5rem 0' }}>This is a paragraph.</p>
                    <a href="#" style={{ color: '#3182ce', textDecoration: 'none' }}>This is a link</a>
                </>
            )
        },
        {
            title: 'Lists',
            code: '<ul>, <ol>, <li>',
            preview: (
                <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
                    <li>Unordered item</li>
                    <li>Another item</li>
                </ul>
            )
        }
    ];

    const cssProperties = [
        {
            title: 'Colors & Background',
            code: `color: #2d3748;
background-color: #f7fafc;
background: linear-gradient(45deg, #4f46e5, #7c3aed);`
        },
        {
            title: 'Text & Fonts',
            code: `font-family: 'Inter', sans-serif;
font-size: 16px;
text-align: center;
text-decoration: none;`
        },
        {
            title: 'Box Model',
            code: `margin: 10px;
padding: 15px;
border: 1px solid #e2e8f0;
border-radius: 8px;`
        },
        {
            title: 'Flexbox',
            code: `display: flex;
justify-content: center;
align-items: center;
flex-direction: column;`
        }
    ];

    const projects = [
        {
            title: 'Personal Portfolio',
            description: 'Build a responsive portfolio website to showcase your projects and skills.',
            gradient: 'linear-gradient(135deg, #f6ad55, #f6e05e)',
            previewText: 'personal portfolio'
        },
        {
            title: 'Blog Layout',
            description: 'Create a responsive blog layout with articles, sidebar, and comments section.',
            gradient: 'linear-gradient(135deg, #63b3ed, #4299e1)',
            previewText: 'blog layout'
        }
    ];

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <main className={styles.mainContent}>
                <section className={styles.chapterHero}>
                    <div className={styles.container}>
                        <h1>HTML & CSS</h1>
                        <p>Master the building blocks of web development with interactive examples.</p>
                    </div>
                </section>

                <section id="html-basics" className={styles.chapterSection}>
                    <div className={styles.container}>
                        <h2>HTML Fundamentals</h2>
                        <div className={styles.contentBox}>
                            <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It provides the structure of a webpage.</p>

                            <div className={styles.exampleBox}>
                                <h3>Basic HTML Structure</h3>
                                <div className={styles.exampleContainer}>
                                    <div className={styles.codePreview}>
                                        <pre><code className="language-html">{`<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
</body>
</html>`}</code></pre>
                                        <button className={styles.btnTryIt}>Try it Yourself</button>
                                    </div>
                                    <div className={styles.outputPreview}>
                                        <h4>Output:</h4>
                                        <div className={styles.outputFrame}>
                                            <h1 style={{ margin: 0, color: '#2d3748' }}>My First Heading</h1>
                                            <p style={{ margin: '0.5rem 0 0' }}>My first paragraph.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.htmlElements}>
                                <h3>Common HTML Elements</h3>
                                <div className={styles.elementsGrid}>
                                    {htmlElements.map((el, index) => (
                                        <div key={index} className={styles.elementCard}>
                                            <h4>{el.title}</h4>
                                            <pre><code>{el.code}</code></pre>
                                            <div className={styles.elementPreview}>
                                                {el.preview}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="css-basics" className={`${styles.chapterSection} ${styles.bgLight}`}>
                    <div className={styles.container}>
                        <h2>CSS Styling</h2>
                        <div className={styles.contentBox}>
                            <p>CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content.</p>

                            <div className={styles.cssExample}>
                                <h3>Basic CSS Syntax</h3>
                                <div className={styles.exampleContainer}>
                                    <div className={styles.codePreview}>
                                        <pre><code className="language-css">{`/* Selector */
p {
    /* Property: Value; */
    color: blue;
    font-size: 16px;
    margin: 10px 0;
}`}</code></pre>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cssProperties}>
                                <h3>Common CSS Properties</h3>
                                <div className={styles.propertiesGrid}>
                                    {cssProperties.map((prop, index) => (
                                        <div key={index} className={styles.propertyCard}>
                                            <h4>{prop.title}</h4>
                                            <pre><code>{prop.code}</code></pre>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className={styles.chapterSection}>
                    <div className={styles.container}>
                        <h2>Practice Projects</h2>
                        <div className={styles.projectsGrid}>
                            {projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    <div className={styles.projectPreview} style={{ background: project.gradient }}>
                                        <div className={styles.previewContent}>
                                            <h3>{project.title}</h3>
                                            <p>{project.previewText}</p>
                                        </div>
                                    </div>
                                    <div className={styles.projectDetails}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <button className={styles.btnProject} onClick={() => navigate('/premium')}>Start Project</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2024 mastercbse Educational Excellence. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HtmlCssChapter;
