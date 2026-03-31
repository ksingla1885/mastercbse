
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (path, isHash = false) => {
        if (isHash) {
            const targetPath = path.startsWith('#') ? '/home' : path.split('#')[0];
            const hash = path.includes('#') ? path.split('#')[1] : path.substring(1);

            if (location.pathname !== targetPath) {
                navigate(`${targetPath}#${hash}`);
                // The Home component should handle the scroll on mount if hash exists
            } else {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <div className={styles.logoAndBack}>
                    {location.pathname !== '/' && location.pathname !== '/home' && (
                        <button className={styles.backButton} onClick={() => navigate(-1)} title="Go Back">
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    )}
                    <div className={styles.logo} onClick={() => navigate('/')}>
                        <span>mastercbse</span>
                    </div>
                </div>

                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <a onClick={() => handleNavClick('/home')}>Home</a>
                    <a onClick={() => handleNavClick('#about', true)}>About</a>
                    <a onClick={() => handleNavClick('#classes', true)}>Classes</a>
                    <button
                        className={styles.premiumBtn}
                        onClick={() => handleNavClick('/sample-papers')}
                    >
                        Sample Papers
                    </button>
                </div>

                <div className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
                    <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
