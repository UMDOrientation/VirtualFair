import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';
import VideoPlayer from '../../components/VideoPlayer';
import Image from '../../components/Image';

function MarylandBands() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Maryland Bands</h1>
                <h3>
                Join us this Summer for our Virtual Information Sessions: <br></br>
 
 Monday and Wednesday afternoons from 3:00-3:30pm June 7-30 and July 12-28<br></br>
  
 <a href= "https://umd.zoom.us/j/94377275631?pwd=OUp4VUpSKzZrNWlIaXVmUVVvMk1JUT09">Zoom Sessions</a> <br></br>
  
 Meeting ID: 943 7727 5631
 Passcode: joinmsom21<br></br>
  
 For more information about the Mighty Sound of Maryland Marching Band, please visit: <a href ="ter.ps/msom2021info">ter.ps/msom2021info</a>
                </h3>
                <VideoPlayer url="https://youtu.be/S8KGyxEXUvU"/>
                <Image source={require('./DrumlineSchedule.jpg')} altText="UMD Alerts"/>
                <PDFViewer document={require("./MSOMFlyer.pdf")} />
                <PDFViewer document={require("./MSOMOpenHouseSlideshow.pdf")} />
            </Grid>
        </Grid>
    </div>
  );
}

export default MarylandBands;
