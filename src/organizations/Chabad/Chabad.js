import React from 'react';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';

function Chabad() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Chabad</h1>
                <PDFViewer document={require('./Info.pdf')}/>
                <Image source={require('./GeneralInfo.jpeg')} altText="General Info"/>
                <PDFViewer document={require('./InstaStory-UMDChabad.pdf')}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default Chabad;
