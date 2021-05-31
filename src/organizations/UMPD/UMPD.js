import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';
import VideoPlayer from '../../components/VideoPlayer';

function UMPD() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>University of Maryland Police Department (UMPD)</h1>
                <VideoPlayer url="https://www.youtube.com/watch?v=pkmHUKZpbhI"/>
                <VideoPlayer url="https://www.youtube.com/watch?v=o5bDiBxC3pk"/>
                <Image source={require('./UMPDContactMagnet.png')} altText="UMPD Contact Information"/>
                <Image source={require('./UMDAlert.jpg')} altText="UMD Alerts"/>
                <Image source={require('./WalkBikeDriveSmart.jpg')} altText="Walk Bike Drive Smart"/>
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={6}>
                        <Image source={require('./TipCard1.jpg')} altText="Tip Card 1"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Image source={require('./TipCard2.jpg')} altText="Tip Card 2"/>
                    </Grid>
                </Grid>
                <PDFViewer document={require('./SafeTerpTradeZone.pdf')}/>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Image source={require('./UMDSafety1.jpg')} altText="UMD Safety Tip 1"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image source={require('./UMDSafety2.jpg')} altText="UMD Safety Tip 2"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image source={require('./UMDSafety3.jpg')} altText="UMD Safety Tip 3"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image source={require('./UMDSafety6.jpg')} altText="UMD Safety Tip 6"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image source={require('./UMDSafety8.jpg')} altText="UMD Safety Tip 8"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Image source={require('./UMDSafety9.jpg')} altText="UMD Safety Tip 9"/>
                    </Grid>
                </Grid>
                <Image source={require('./UMPD1.jpg')} altText="Walk Bike Drive Smart"/>
                <Image source={require('./UMPD2.jpg')} altText="Walk Bike Drive Smart"/>
            </Grid>
        </Grid>
    </div>
  );
}

export default UMPD;
