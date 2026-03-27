import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();
    
    return (
        <button className="global-back-btn" onClick={() => navigate(-1)}>
            ← Go Back
        </button>
    );
};

export default BackButton;
