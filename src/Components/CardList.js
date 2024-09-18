import React from 'react';
import './Card.css'; // Import custom CSS for styling

const cardData = [
    {
        id: 1,
        title: 'Innovative Tech Solutions',
        text: 'Explore our cutting-edge technologies that drive innovation and efficiency.',
        imgSrc: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
        link: '#'
    },
    {
        id: 2,
        title: 'AI & Machine Learning',
        text: 'Harness the power of AI and ML to unlock new possibilities for your business.',
        imgSrc: 'https://img.freepik.com/premium-photo/abstract-surreal-sand-dune-landscape-backgrounds-nature-art-concept-digital-art-illustration-generative-ai_1021198-18074.jpg',
        link: '#'
    },
    {
        id: 3,
        title: 'Data Analytics Services',
        text: 'Transform your data into actionable insights with our advanced analytics solutions.',
        imgSrc: 'https://img.freepik.com/free-photo/abstract-fantasy-landscape-with-color-year-purple-tones_23-2151394172.jpg',
        link: '#'
    },
    {
        id: 4,
        title: 'Cybersecurity Services',
        text: 'Protect your digital assets with our comprehensive cybersecurity services.',
        imgSrc: 'https://img.freepik.com/premium-photo/sunset-with-mountain-range-lake-background_1274269-159255.jpg',
        link: '#'
    }
];

const Card = ({ title, text, imgSrc, link }) => {
    return (
        <div className="card my-3" style={{ width: '18rem' }}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">Learn More</a>
            </div>
        </div>
    );
};

const CardList = () => {
    return (
        <div className="card-container">
            {cardData.map(card => (
                <Card 
                    key={card.id}
                    title={card.title}
                    text={card.text}
                    imgSrc={card.imgSrc}
                    link={card.link}
                />
            ))}
        </div>
    );
};

export default CardList;
