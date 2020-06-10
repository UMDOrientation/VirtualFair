import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function MuslimChaplaincy() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Muslim Chaplaincy</h1>
                <PDFViewer document={require('./MuslimChaplaincyFlyer.pdf')}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default MuslimChaplaincy;
