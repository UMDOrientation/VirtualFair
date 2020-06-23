import React from 'react';
import { Grid, Button } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function EducationAbroad() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Education Abroad</h1>
                <VideoPlayer url="https://youtu.be/Sgnzspy3Z7U" />
                <Button variant="contained" color="primary" href="http://go.umd.edu/EAInfo" target="_blank" size="large">Sign up to receive more information from Education Abroad!</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default EducationAbroad;
