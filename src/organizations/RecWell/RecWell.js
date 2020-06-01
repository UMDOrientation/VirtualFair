import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function RecWell() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>RecWell</h1>
                <PDFViewer document={require('./ProgramAreaPrintPieces_AP.pdf')}/>
                <PDFViewer document={require('./ProgramAreaPrintPieces_ClubSports.pdf')}/>
                <PDFViewer document={require('./ProgramAreaPrintPieces_Fitness.pdf')}/>
                <PDFViewer document={require('./ProgramAreaPrintPieces_Golf.pdf')}/>
                <PDFViewer document={require('./ProgramAreaPrintPieces_IMs.pdf')}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default RecWell;
