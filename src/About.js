import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';

function About() {
  return (
    <div>
      <Typography variant="h1">
        About
      </Typography>
      <Typography variant="body1">
        This website was made to showcase a few of the organizations here at the University of Maryland.
      </Typography>
    </div>
  );
}

export default About;
