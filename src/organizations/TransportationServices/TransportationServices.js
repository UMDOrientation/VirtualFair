import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function TransportationServices() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Transportation Services</h1>
                <PDFViewer document={require('./DOTS/DOTS1.pdf')}/>
                <PDFViewer document={require('./DOTS/DOTS2.pdf')}/>
                <PDFViewer document={require('./DOTS/DOTS3.pdf')}/>
                <PDFViewer document={require('./DOTS/DOTS4.pdf')}/>
                <PDFViewer document={require('./DOTS/DOTS5.pdf')}/>
                <PDFViewer document={require('./DOTS/6_Summer21_Parking.pdf')}/>

                <a href = "https://drive.google.com/file/d/1soT3cK0QYqbCbCxnVyVvYd8pdoGhL4ga/view?usp=sharing">Click here to view the UMD Bike Flyer!</a>
            </Grid>
        </Grid>
    </div>
  );
}

export default TransportationServices;
