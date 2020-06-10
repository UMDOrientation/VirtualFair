import React from 'react';
import { Grid, Button } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';

function Chabad() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Chabad</h1>
                <VideoPlayer url="https://youtu.be/jQO6K5Uq0Js"/>
                <PDFViewer document={require('./Info.pdf')}/>
                <Image source={require('./GeneralInfo.jpeg')} altText="General Info"/>
                <PDFViewer document={require('./InstaStory-UMDChabad.pdf')}/>
                <Button variant="contained" color="primary" href="http://www.umdchabad.org/contact-us/contact-form/" target="_blank" size="large">Sign up for more info today!</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default Chabad;
