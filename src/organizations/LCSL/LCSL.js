import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid } from '@material-ui/core';
import Image from '../../components/Image';

function LCSL() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Leadership & Community Service-Learning (LCSL)</h1>
                <Image source={require("./MDMentorCorpsOrientationOneSheet2020.jpg")} altText="MD Mentor Corps" />
                <PDFViewer document={require('./LCSLOrientationOneSheetSummer2020.pdf')} />
            </Grid>
        </Grid>
    </div>
  );
}

export default LCSL;
