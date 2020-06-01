import React from 'react';
import { Card } from '@material-ui/core';
import './components.css';

function Image({ source, altText }) {
    return (
        <div>
            <Card className="card">
                <img src={source} alt={altText} className="image-fit"/>
            </Card>
        </div>
    );
}

export default Image;