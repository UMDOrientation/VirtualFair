import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid } from '@material-ui/core';

function ArmyROTC() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Army ROTC</h1>
                <PDFViewer document={require('./WHO_WE_ARE_AND_WHAT_WE_DO.pdf')}/>
                <PDFViewer document={require('./ARMY_ROTC_VIDEO_LINKS.pdf')}/>
                <PDFViewer document={require('./ARMY106_COURSE_OFFERING.pdf')}/>
                <PDFViewer document={require('./Financial_Benefit_Pamphlet.pdf')}/>
                <PDFViewer document={require('./FOR_PARENTS.pdf')}/>
                <PDFViewer document={require('./MDARNG_Minuteman_Scholarship.pdf')}/>
                <PDFViewer document={require('./RESERVE-NATIONAL_GUARD.pdf')}/>
                <PDFViewer document={require('./SMP-GRFD.pdf')}/>
                <PDFViewer document={require('./Terrapin_Battalion.pdf')}/>
                <PDFViewer document={require('./USAR_Minuteman_scholarship.pdf')}/>
            </Grid>
        </Grid>
    </div>
  );
}

export default ArmyROTC;
