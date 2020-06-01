import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea, Grid } from '@material-ui/core';
import './components.css';
import { Link } from 'react-router-dom';

function FrontpageCard({ source, title, href }) {
    return (
        <Grid item xs={12} sm={4}>
            <Card className="card">
                <Link to={href} className="no-style">
                <CardActionArea>
                <CardMedia 
                    component="img"
                    height="140"
                    image={source != null ? source : require("../organizations/placeholder.jpg")}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </CardContent>
                </CardActionArea>
                </Link>
            </Card>
        </Grid>
    );
}

export default FrontpageCard;