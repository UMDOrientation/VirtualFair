import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function MarylandBands() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Maryland Bands</h1>
                <PDFViewer document={require("./MSOMFlyer.pdf")} />
                <PDFViewer document={require("./MSOMInfoPresentation.pdf")} />
                <PDFViewer document={require("./2020UMDrumlineAuditionInfo.pdf")} />
            </Grid>
        </Grid>
    </div>
  );
}

export default MarylandBands;
