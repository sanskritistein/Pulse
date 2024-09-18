// src/components/Breadcrumb.js
import React from 'react';
import './Breadcrumb.css'; // Import custom CSS for styling

const Breadcrumb = ({ path }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {path.map((item, index) => (
                    <li 
                        key={index} 
                        className={`breadcrumb-item ${index === path.length - 1 ? 'active' : ''}`}
                        aria-current={index === path.length - 1 ? 'page' : undefined}
                    >
                        {index === path.length - 1 ? item.label : (
                            <a href={item.link}>{item.label}</a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
