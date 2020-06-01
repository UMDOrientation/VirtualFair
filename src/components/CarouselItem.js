import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

function CarouselItem({ source, href, caption }) {
    
    return (
        <div>
            <img src={source != null ? source : require("../organizations/placeholder.jpg")} alt={caption} className="carousel-image"/>
            <Link to={href}>
                <p className="legend">{caption}</p>
            </Link>
        </div>
    );
}

export default CarouselItem;