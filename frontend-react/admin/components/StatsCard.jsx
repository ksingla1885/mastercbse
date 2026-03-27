import React from 'react';

const StatsCard = ({ title, value, icon, color }) => {
    return (
        <div className="stats-card">
            <div className="stats-icon" style={{ backgroundColor: color }}>
                <i className={icon}></i>
            </div>
            <div className="stats-content">
                <h3 className="stats-title">{title}</h3>
                <p className="stats-value">{value}</p>
            </div>
        </div>
    );
};

export default StatsCard;
