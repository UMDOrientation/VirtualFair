import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function HealthProfessionsAdvisingOffice() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Health Professions Advising Office</h1>
                <VideoPlayer url="https://youtu.be/f1FAIpyRCwI"/>
                <PDFViewer document={require("./HPAOBrochure.pdf")}/>
                <PDFViewer document={require("./PreMedPrerequisites.pdf")}/>
                <PDFViewer document={require("./DentalPrerequisites.pdf")}/>
                <PDFViewer document={require("./PreOT.pdf")}/>
                <PDFViewer document={require("./PrePA.pdf")}/>
                <PDFViewer document={require("./PrePharmacy.pdf")}/>
                <PDFViewer document={require("./PrePT.pdf")}/>
                <PDFViewer document={require("./WhatToKnowPreMedDentParentAndTransfer.pdf")}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default HealthProfessionsAdvisingOffice;
