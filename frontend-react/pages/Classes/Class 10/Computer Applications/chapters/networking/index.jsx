import React, { useEffect } from 'react';
import styles from './style.module.css';
import Navbar from '../../../../../../src/components/Navbar';

const NetworkingChapter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const components = [
        { title: 'Nodes', desc: 'Devices connected to the network (computers, printers, etc.)' },
        { title: 'Links', desc: 'Wired or wireless connections between nodes' },
        { title: 'Protocols', desc: 'Rules that govern data communication' },
        { title: 'Network Devices', desc: 'Routers, switches, and hubs that facilitate communication' }
    ];

    const types = [
        { icon: 'fas fa-home', title: 'LAN', desc: 'Local Area Network - Covers a small geographical area like a home, school, or office building.' },
        { icon: 'fas fa-city', title: 'MAN', desc: 'Metropolitan Area Network - Covers a larger area than LAN, typically a city or town.' },
        { icon: 'fas fa-globe', title: 'WAN', desc: 'Wide Area Network - Spans large geographical areas, often connecting multiple LANs.' }
    ];

    const protocols = [
        { title: 'HTTP/HTTPS', desc: 'Used for web page access and secure communication.' },
        { title: 'FTP', desc: 'File Transfer Protocol for file sharing.' },
        { title: 'TCP/IP', desc: 'Fundamental protocol suite for internet communication.' },
        { title: 'SMTP', desc: 'Used for email transmission.' }
    ];

    return (
        <div className={styles.chapterPage}>
            <Navbar />

            <main className={styles.mainContent}>
                <section className={styles.chapterHero}>
                    <div className={styles.container}>
                        <h1>Networking</h1>
                        <p>Understanding the fundamentals of computer networks and their applications.</p>
                    </div>
                </section>

                <section id="introduction" className={styles.chapterSection}>
                    <div className={styles.container}>
                        <h2>Introduction to Networking</h2>
                        <div className={styles.contentBox}>
                            <p>A computer network is a collection of interconnected devices that can communicate and share resources. Networks enable data exchange between devices, allowing users to share files, printers, and internet connections.</p>

                            <h3>Key Components:</h3>
                            <ul className={styles.contentList}>
                                {components.map((c, i) => (
                                    <li key={i}><strong>{c.title}:</strong> {c.desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="types" className={`${styles.chapterSection} ${styles.bgLight}`}>
                    <div className={styles.container}>
                        <h2>Types of Networks</h2>
                        <div className={styles.gridLayout}>
                            {types.map((t, i) => (
                                <div key={i} className={styles.card}>
                                    <i className={t.icon}></i>
                                    <h3>{t.title}</h3>
                                    <p>{t.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="protocols" className={styles.chapterSection}>
                    <div className={styles.container}>
                        <h2>Network Protocols</h2>
                        <div className={styles.contentBox}>
                            <p>Protocols are sets of rules that govern how data is transmitted over a network. Some common protocols include:</p>

                            <div className={styles.protocolGrid}>
                                {protocols.map((p, i) => (
                                    <div key={i} className={styles.protocolItem}>
                                        <h4>{p.title}</h4>
                                        <p>{p.desc}</p>
                                    </div>
                                ))}
                            </div>
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

export default NetworkingChapter;
