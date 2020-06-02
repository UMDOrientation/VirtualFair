import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';

function STAMP() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>STAMP</h1>
                <PDFViewer document={require('./STAMP_Orientation_One_Sheet_Summer_2020.pdf')}/>
                <Image source={require('./STAMP_Brand_Orientation_Summer_2020.png')} altText="STAMP Brand Orientation 2020"/>
                <Image source={require('./StudioA_one-sheets_Orientation_Summer_2020_CERAMICS.png')} altText="Ceramics at STAMP"/>
                <Image source={require('./StudioA_one-sheets_Orientation_Summer_2020_DANCE.png')} altText="Dance at STAMP"/>
                <Image source={require('./StudioA_one-sheets_Orientation_Summer_2020_DRAWING-PAINTING.png')} altText="Drawing and Painting at STAMP"/>
                <Image source={require('./StudioA_one-sheets_Orientation_Summer_2020_MUSIC.png')} altText="Music at STAMP"/>
                <Image source={require('./StudioA_one-sheets_Orientation_Summer_2020_PHOTOGRAPHY.png')} altText="Photography at STAMP"/>
                <Image source={require('./StudioA_one-sheets_Orientation_Summer_2020_YOGA.png')} altText="Yoga at STAMP"/>
                <Image source={require('./TerpZone_Orientation_one-sheet_Summer_2020.png')} altText="Terpzone at STAMP"/>
            </Grid>
        </Grid>
    </div>
  );
}

export default STAMP;
