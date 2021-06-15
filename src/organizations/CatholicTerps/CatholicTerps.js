import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';
import CatholicTerpsPostcard from './CatholicTerpsPostcard.pdf';
import CatholicTerpsFreshmanRetreat2020 from './CatholicTerpsFreshmanRetreat2020.png';
import { Button, Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function CatholicTerps() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Catholic Terps</h1>
                <Button variant="contained" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSfEFaa9oOoW6GjENaQRcYCdMuSQvPKubp3gN1cxNshM3UeQBQ/viewform" target="_blank" size="large">I want to receive more information.</Button>
                <VideoPlayer url=" https://youtu.be/mXB4wlcTKoI" />
                <PDFViewer document={CatholicTerpsPostcard}/>
                <Image source={CatholicTerpsFreshmanRetreat2020} altText="Catholic Terps Freshman Retreat 2020"/>
            </Grid>
        </Grid>
    </div>
  );
}

export default CatholicTerps;
