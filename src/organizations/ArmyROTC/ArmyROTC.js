import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';
import Image from '../../components/Image';

function ArmyROTC() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Army ROTC</h1>
                <VideoPlayer url="https://www.youtube.com/watch?v=4fU4nUW9h0g&list=PL6kkKfGlcAJypqk3fQKCdRmUyfpef8MSv&index=1"></VideoPlayer>
                <PDFViewer document={require('./WHO_WE_ARE_AND_WHAT_WE_DO.pdf')}/>
                <PDFViewer document={require('./ARMY_ROTC_VIDEO_LINKS.pdf')}/>
                <PDFViewer document={require('./ARMY106_COURSE_OFFERING.pdf')}/>
                {/* <PDFViewer document={require('./Financial_Benefit_Pamphlet.pdf')}/> */}
                <Image source={require('./Financial Benefit Pamphlet_Page_1.jpg')} altText="Financial Benefits 1"></Image>
                <Image source={require('./Financial Benefit Pamphlet_Page_2.jpg')} altText="Financial Benefits 2"></Image>
                {/* <PDFViewer document={require('./FOR_PARENTS.pdf')}/> */}
                <Image source={require('./FOR PARENTS_Page_1.jpg')} altText="For Parents 1"></Image>
                <Image source={require('./FOR PARENTS_Page_2.jpg')} altText="For Parents 2"></Image>
                {/* <PDFViewer document={require('./MDARNG_Minuteman_Scholarship.pdf')}/> */}
                <Image source={require('./MDARNG Minuteman Scholarship_Page_1.jpg')} altText="MDARNG Minuteman Scholarship 1"></Image>
                <Image source={require('./MDARNG Minuteman Scholarship_Page_2.jpg')} altText="MDARNG Minuteman Scholarship 2"></Image>
                {/* <PDFViewer document={require('./RESERVE-NATIONAL_GUARD.pdf')}/> */}
                <Image source={require('./RESERVE - NATIONAL GUARD_Page_1.jpg')} altText="Reserve National Guard 1"></Image>
                <Image source={require('./RESERVE - NATIONAL GUARD_Page_2.jpg')} altText="Reserve National Guard 2"></Image>
                {/* <PDFViewer document={require('./SMP-GRFD.pdf')}/> */}
                <Image source={require('./SMP-GRFD_Page_1.jpg')} altText="SMP-GRFD 1"></Image>
                <Image source={require('./SMP-GRFD_Page_2.jpg')} altText="SMP-GRFD 2"></Image>
                {/* <PDFViewer document={require('./Terrapin_Battalion.pdf')}/> */}
                <Image source={require('./Terrapin Battalion_Page_1.jpg')} altText="Terrapin Battalion 1"></Image>
                <Image source={require('./Terrapin Battalion_Page_2.jpg')} altText="Terrapin Battalion 2"></Image>
                {/* <PDFViewer document={require('./USAR_Minuteman_scholarship.pdf')}/> */}
                <Image source={require('./USAR Minuteman scholarship_Page_1.jpg')} altText="USAR Minuteman Scholarship 1"></Image>
                <Image source={require('./USAR Minuteman scholarship_Page_2.jpg')} altText="USAR Minuteman Scholarship 2"></Image>
            </Grid>
        </Grid>
    </div>
  );
}

export default ArmyROTC;
