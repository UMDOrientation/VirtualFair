import React from 'react';
import './App.css';
import { Typography, Button } from '@material-ui/core';

function About() {
  return (
    <div>
      <Typography variant="h2">
        About
      </Typography>
      <Typography variant="body1">
        This website was made to showcase a few of the organizations here at the University of Maryland.
      </Typography>
      <Button href="http://orientation.umd.edu/" size="large">Visit the UMD Orientation website for more info about Orientation 2020.</Button>
    </div>
  );
}

export default About;
