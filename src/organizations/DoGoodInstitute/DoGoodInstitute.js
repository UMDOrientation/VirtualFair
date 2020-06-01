import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid, Button } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function DoGoodInstitute() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Do Good Institute</h1>
                <VideoPlayer url="https://youtu.be/xfKurBJLB8w"/>
                <PDFViewer document={require("./DGINewStudentGuide.pdf")}/>
                <Button variant="contained" color="primary" href="http://eepurl.com/c9IRPz" target="_blank">Sign up for our newsletter!</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default DoGoodInstitute;
