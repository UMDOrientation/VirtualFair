import React from 'react';
import { Grid, Button } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';
import VideoPlayer from '../../components/VideoPlayer';

function EducationAbroad() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Education Abroad</h1>
                <PDFViewer document={require("./UMDEducationAbroad_Infographic.pdf")}/>
                <PDFViewer document={require("./EA.pdf")}/>
                <VideoPlayer url="https://youtu.be/Sgnzspy3Z7U" />
                <Button variant = 'contained' color = "primary" href = "https://mailchi.mp/umd/summer-orientation" target="_blank" size="large">Start your journey with Global UMD</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default EducationAbroad;
