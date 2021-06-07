import React from 'react';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import PDFViewer from '../../components/PDFViewer';

function SUCCEEDSClinic() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>SUCCEEDS Clinic</h1>
                <VideoPlayer url="https://www.youtube.com/watch?v=MVgzaPW2DsU&t=3s"/>
              
            </Grid>
        </Grid>
    </div>
  );
}

export default SUCCEEDSClinic;
