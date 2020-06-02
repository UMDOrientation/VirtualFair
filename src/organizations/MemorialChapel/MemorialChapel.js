import React from 'react';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';

function MemorialChapel() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Memorial Chapel</h1>
                <PDFViewer document={require('./Chapel_Orientation_One_Sheet_Summer_2020.pdf')}/>
                <Image source={require('./Garden_of_Reflection_and_Remembrance_Orientation_One_Sheet_Summer_2020.png')} altText="Garden of Reflection and Remembrance"/>
                <Image source={require('./Terps_Interfaith_Orientation_One_Sheet_Summer_2020.png')} altText="Interfaith Orientation Sheet 2020"/>

                <PDFViewer document={require("../ChristianChaplaincies/BaptistCollegiateMinistriesFlyer.pdf")}/>
                <Image source={require("../ChristianChaplaincies/ChristianScienceOrientationFlyer.png")} altText="Christian Science Orientation Flyer"/>
                <Image source={require("../ChristianChaplaincies/EpiscopalTerpsFlyer.png")} altText="Episcopal Terps Flyer"/>
                <PDFViewer document={require("../ChristianChaplaincies/MethodistFlyer.pdf")}/>
                <PDFViewer document={require("../ChristianChaplaincies/UCM-L3Flyer.pdf")}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default MemorialChapel;
