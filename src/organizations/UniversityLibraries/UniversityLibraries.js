import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';

function UniversityLibraries() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>University Libraries</h1>
                <PDFViewer document={require('./UniversityLibraries_GetItDoneGuide.pdf')}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default UniversityLibraries;
