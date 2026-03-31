import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../src/components/Navbar';
import styles from './SamplePapers.module.css';

const SamplePapers = () => {
    const navigate = useNavigate();

    const [papers, setPapers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // States for view management
    const [activeClassView, setActiveClassView] = useState(null); // '10' or '12' or null
    const [selectedStream, setSelectedStream] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState('');

    const STREAMS_12 = [
        { id: 'Medical', name: 'Medical', dbName: 'Science (Medical)', icon: '🩺' },
        { id: 'Non-Medical', name: 'Non-Medical', dbName: 'Science (Non-Medical)', icon: '🧪' },
        { id: 'Commerce', name: 'Commerce', dbName: 'Commerce', icon: '📊' },
        { id: 'Humanities', name: 'Humanities', dbName: 'Arts', icon: '🏛️' }
    ];

    const SUBJECTS_10 = ['Mathematics', 'Science', 'Social Science', 'English', 'Computer Applications'];
    
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchPapers();
    }, []);

    const fetchPapers = async () => {
        setLoading(true);
        setError(null);
        try {
            const baseUrl = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' ? '/api' : 'http://localhost:3000/api');
            const res = await fetch(`${baseUrl}/content?contentType=SAMPLE_PAPER&limit=200`);
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

    const resetFilters = () => {
        setActiveClassView(null);
        setSelectedStream(null);
        setSelectedSubject('');
    };

    const getFilteredPapers = () => {
        let filtered = papers;
        if (activeClassView) {
            filtered = filtered.filter(p => String(p.class) === activeClassView);
        }
        if (selectedStream) {
            filtered = filtered.filter(p => p.stream === selectedStream.dbName);
        }
        if (selectedSubject) {
            filtered = filtered.filter(p => p.subject === selectedSubject);
        }
        return filtered;
    };

    const filteredPapers = getFilteredPapers();
    const currentSubjects = activeClassView === '10' ? SUBJECTS_10 : [...new Set(filteredPapers.map(p => p.subject))].sort();

    return (
        <div className={styles.page}>
            <Navbar />

            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>📄 CBSE Practice Hub</div>
                    <h1>Sample Papers</h1>
                    <p>Select your class and stream to browse curated sample papers.</p>
                </div>
                <div className={styles.heroWave} />
            </header>

            <main className={styles.container}>
                {loading ? (
                    <div className={styles.loadingState}>
                        <div className={styles.spinner} />
                        <p>Fetching papers...</p>
                    </div>
                ) : error ? (
                    <div className={styles.errorState}>
                        <span>⚠️</span>
                        <p>{error}</p>
                        <button onClick={fetchPapers} className={styles.retryBtn}>Retry</button>
                    </div>
                ) : !activeClassView ? (
                    /* INITIAL VIEW: CLASS SELECTION CARDS */
                    <div className={styles.classSelectorGrid}>
                        <div className={styles.selectorCard} onClick={() => setActiveClassView('10')}>
                            <div className={styles.selectorIcon}>🎓</div>
                            <h2>Class 10</h2>
                            <p>Secondary Education Sample Papers</p>
                            <span className={styles.selectBtn}>Explore All</span>
                        </div>

                        <div className={styles.selectorCard} onClick={() => setActiveClassView('12')}>
                            <div className={styles.selectorIcon}>📜</div>
                            <h2>Class 12</h2>
                            <p>Senior Secondary Education Papers</p>
                            <span className={styles.selectBtn}>Explore All</span>
                        </div>
                    </div>
                ) : (
                    /* DRILL DOWN VIEW */
                    <div className={styles.drillDownContainer}>
                        <button className={styles.backToSelect} onClick={resetFilters}>
                            ← Back to Classes
                        </button>

                        <div className={styles.drillHeader}>
                            <div className={styles.drillTitleGroup}>
                                <span className={styles.classLabel}>CLASS {activeClassView}</span>
                                <h2>{selectedStream ? `${selectedStream.name} Stream` : 'Select Stream'}</h2>
                            </div>
                            {(activeClassView === '10' || selectedStream) && (
                                <div className={styles.drillFilters}>
                                    <select 
                                        value={selectedSubject} 
                                        onChange={(e) => setSelectedSubject(e.target.value)}
                                        className={styles.subjectSelect}
                                    >
                                        <option value="">All Subjects</option>
                                        {currentSubjects.map(sub => (
                                            <option key={sub} value={sub}>{sub}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {activeClassView === '12' && !selectedStream ? (
                            /* CLASS 12 STREAM SELECTION */
                            <div className={styles.streamGrid}>
                                {STREAMS_12.map(stream => (
                                    <div 
                                        key={stream.id} 
                                        className={styles.streamCard}
                                        onClick={() => setSelectedStream(stream)}
                                    >
                                        <div className={styles.streamIcon}>{stream.icon}</div>
                                        <h3>{stream.name}</h3>
                                        <p>Find {stream.name} papers</p>
                                        <span className={styles.streamBtn}>Open Stream</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* PAPERS LIST */
                            <div className={styles.resultsArea}>
                                {selectedStream && (
                                    <div className={styles.streamBreadcrumb}>
                                        <button onClick={() => { setSelectedStream(null); setSelectedSubject(''); }}>
                                            <i className="fas fa-exchange-alt"></i> Change Stream
                                        </button>
                                    </div>
                                )}
                                
                                {filteredPapers.length === 0 ? (
                                    <div className={styles.cardEmptyState}>
                                        <div className={styles.emptyIcon}>📂</div>
                                        <h3>No Papers Found</h3>
                                        <p>We couldn't find any papers for {selectedSubject || 'this selection'}. Try another filter.</p>
                                    </div>
                                ) : (
                                    <div className={styles.internalGrid}>
                                        {filteredPapers.map((paper) => (
                                            <div key={paper.id} className={styles.paperItem}>
                                                <div className={styles.paperIcon}>📄</div>
                                                <div className={styles.paperContent}>
                                                    <h4>{paper.title}</h4>
                                                    <div className={styles.paperTags}>
                                                        <span className={styles.miniTag}>{paper.subject}</span>
                                                        {paper.is_premium && <span className={styles.premiumTag}>⭐ PREMIUM</span>}
                                                    </div>
                                                </div>
                                                <button 
                                                    className={styles.itemOpenBtn}
                                                    onClick={() => handleOpenPaper(paper.content_url || paper.contentUrl)}
                                                >
                                                    View
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </main>

            <footer className={styles.footer}>
                <button className={styles.backBtn} onClick={() => navigate('/home')}>
                    ← Back to Dashboard
                </button>
                <p>© 2024 mastercbse. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SamplePapers;
