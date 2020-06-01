import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid, Button } from '@material-ui/core';

function EquityCenter() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Equity Center</h1>
                <PDFViewer document={require("./PostCard.pdf")}/>
                <PDFViewer document={require("./StickersAndPronounsMatterCard.pdf")}/>
                <PDFViewer document={require("./LGBTButtons.pdf")}/>
                <Button variant="contained" color="primary" href="https://forms.gle/BBaDpmPcCRbik6ks6" target="_blank">Sign up for our newsletter!</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default EquityCenter;
