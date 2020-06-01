import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function TransportationServices() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Transportation Services</h1>
                <PDFViewer document={require('./DOTS1.pdf')}/>
                <PDFViewer document={require('./DOTS2.pdf')}/>
                <PDFViewer document={require('./DOTS3.pdf')}/>
                <PDFViewer document={require('./DOTS4.pdf')}/>
                <PDFViewer document={require('./DOTS5.pdf')}/>
                <PDFViewer document={require('./DOTS6.pdf')}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default TransportationServices;
