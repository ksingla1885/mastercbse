import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
import styles from './SamplePapers.module.css';

const SamplePapers = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const classParam = searchParams.get('class') || '';
    const subjectParam = searchParams.get('subject') || '';

    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedClass, setSelectedClass] = useState(classParam);
    const [selectedSubject, setSelectedSubject] = useState(subjectParam);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchPapers();
    }, [selectedClass, selectedSubject]);

    const fetchPapers = async () => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            if (selectedClass) params.append('class', selectedClass);
            if (selectedSubject) params.append('subject', selectedSubject);
            params.append('contentType', 'SAMPLE_PAPER');

            const baseUrl = import.meta.env.MODE === 'production' ? '/api' : 'http://localhost:3000/api';
            const res = await fetch(`${baseUrl}/content?${params}`);
            const data = await res.json();
            if (data.success) {
                setPapers(data.content || []);
            } else {
                setError('Failed to load sample papers.');
            }
        } catch (err) {
            setError('Could not connect to server. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenPaper = (url) => {
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
        else alert('Paper link not available yet.');
    };

    return (
        <div className={styles.page}>
            <Navbar />

            {/* Hero */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>📄 CBSE Practice</div>
                    <h1>Sample Papers</h1>
                    <p>
                        {selectedClass && selectedSubject
                            ? `Class ${selectedClass} · ${selectedSubject}`
                            : selectedClass
                            ? `Class ${selectedClass} — All Subjects`
                            : 'Browse all CBSE sample papers'}
                    </p>
                </div>
                <div className={styles.heroWave} />
            </header>

            {/* Content */}
            <main className={styles.container}>
                {loading ? (
                    <div className={styles.loadingState}>
                        <div className={styles.spinner} />
                        <p>Loading sample papers...</p>
                    </div>
                ) : error ? (
                    <div className={styles.errorState}>
                        <span>⚠️</span>
                        <p>{error}</p>
                        <button onClick={fetchPapers} className={styles.retryBtn}>Retry</button>
                    </div>
                ) : papers.length === 0 ? (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIcon}>📋</div>
                        <h3>No Sample Papers Found</h3>
                        <p>
                            We couldn't find any sample papers for this subject yet.
                            Please check back later or contact support if you believe this is an error.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className={styles.resultsHeader}>
                            <span className={styles.resultsCount}>
                                {papers.length} paper{papers.length !== 1 ? 's' : ''} found
                            </span>
                        </div>
                        <div className={styles.grid}>
                            {papers.map((paper, index) => (
                                <div key={paper.id || index} className={styles.card}>
                                    <div className={styles.cardTop}>
                                        <div className={styles.cardIcon}>📄</div>
                                        <div className={styles.cardMeta}>
                                            {paper.class && (
                                                <span className={styles.tag}>Class {paper.class}</span>
                                            )}
                                            {paper.subject && (
                                                <span className={`${styles.tag} ${styles.tagSubject}`}>
                                                    {paper.subject}
                                                </span>
                                            )}
                                            {paper.is_premium && (
                                                <span className={`${styles.tag} ${styles.tagPremium}`}>
                                                    ⭐ Premium
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className={styles.cardTitle}>{paper.title}</h3>
                                    {paper.description && (
                                        <p className={styles.cardDesc}>{paper.description}</p>
                                    )}

                                    <div className={styles.cardFooter}>
                                        {paper.created_at && (
                                            <span className={styles.cardDate}>
                                                🗓️ {new Date(paper.created_at).toLocaleDateString('en-IN', {
                                                    year: 'numeric', month: 'short', day: 'numeric'
                                                })}
                                            </span>
                                        )}
                                        <button
                                            className={styles.downloadBtn}
                                            onClick={() => handleOpenPaper(paper.content_url || paper.contentUrl)}
                                        >
                                            Open Paper ↗
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>

            <footer className={styles.footer}>
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    ← Go Back
                </button>
                <p>© 2024 mastercbse. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SamplePapers;
