import React from 'react';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function EducationAbroad() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Education Abroad</h1>
                <VideoPlayer url="https://youtu.be/Sgnzspy3Z7U" />
            </Grid>
        </Grid>
    </div>
  );
}

export default EducationAbroad;
