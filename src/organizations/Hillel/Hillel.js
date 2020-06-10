import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid } from '@material-ui/core';

function Hillel() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Hillel</h1>
                <PDFViewer document={require('./MarylandHillelOverviewPostcard.pdf')} />
                <PDFViewer document={require('./MarylandHillelKosherDining.pdf')} />
                <PDFViewer document={require('./MarylandHillelNorthCampus.pdf')} />
                <PDFViewer document={require('./BirthrightIsraelWithMarylandHillel.pdf')} />
            </Grid>
        </Grid>
    </div>
  );
}

export default Hillel;
