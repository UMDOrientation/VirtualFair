import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function CounselingCenter() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Counseling Center</h1>
                <VideoPlayer url="https://www.youtube.com/watch?v=8BBBJNZaLQ0"/>
                <PDFViewer document={require("./CounselingCenterBrochure.pdf")}/>
                <PDFViewer document={require("./CounselingServiceBrochure.pdf")}/>
                <PDFViewer document={require("./ADSBrochure.pdf")}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default CounselingCenter;
