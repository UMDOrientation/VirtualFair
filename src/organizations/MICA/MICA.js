import React from 'react';
import { Grid } from '@material-ui/core';
import PDFViewer from '../../components/PDFViewer';
import Image from '../../components/Image';

function MICA() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Multicultural Involvement Community Advocacy (MICA)</h1>
                <Image source={require("./MICA_Overview_1920X1080.jpg")} altText="MICA Overview" />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_AAPI.pdf")} />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_Black.pdf")} />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_Interfaith.pdf")} />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_Latinx.pdf")} />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_LGBTQ.pdf")} />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_Multiracial.pdf")} />
                <PDFViewer document={require("./MICA_Orientation_Summer_2020_Involvement_Areas_One_Sheets_Native.pdf")} />
            </Grid>
        </Grid>
    </div>
  );
}

export default MICA;
