import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';
import { Grid } from '@material-ui/core';

function ChristianChaplaincies() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Christian Chaplaincies</h1>
                <PDFViewer document={require("./BaptistCollegiateMinistriesFlyer.pdf")}/>
                <Image source={require("./ChristianScienceOrientationFlyer.png")} altText="Christian Science Orientation Flyer"/>
                <Image source={require("./EpiscopalTerpsFlyer.png")} altText="Episcopal Terps Flyer"/>
                <Image source={require("./Hub1.png")} altText="Episcopal Terps Flyer"/>
                <Image source={require("./Hub2.png")} altText="Episcopal Terps Flyer"/>
                <PDFViewer document={require("./UCM-L3Flyer.pdf")}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default ChristianChaplaincies;
