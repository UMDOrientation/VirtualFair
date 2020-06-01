import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function TheDiamondback() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>The Diamondback</h1>
                <PDFViewer document={require('./TheDiamondback.pdf')} />
                <PDFViewer document={require('./NewStudentOrientationGuide.pdf')} />
            </Grid>
        </Grid>
    </div>
  );
}

export default TheDiamondback;
