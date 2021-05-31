import React from 'react';
import PDFViewer from '../../components/PDFViewer';
import { Grid, Button } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

function DoGoodInstitute() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Do Good Institute</h1>
                <VideoPlayer url="https://www.youtube.com/watch?v=XpX8CAhvhUA&t=5s"/>
                <PDFViewer document={require("./DGINewStudentGuide.pdf")}/>
                <h2>The Do Good Institute Website: <a href= "dogood.umd.edu">dogood.umd.edu</a></h2>
                <h2>Keep up to date with all things Do Good by following @DoGoodatUMD on social media!</h2>
                <h2>The Do Good Institute is an office at the University of Maryland, College Park dedicated to motivating students to do good, and equipping them with the skills, experiences and resources that result in a lifelong commitment to social impact. 
 
 Our goals as an office are to inspire Terps to make a positive social impact for the issues, ideas, and communities they care about; provide resources for students to apply their skills, knowledge, and passion; build a community of advocators, innovators, and changemakers; and foster a culture of Do Good at the University of Maryland.
 </h2>
                <Button variant="contained" color="primary" href="http://eepurl.com/c9IRPz" target="_blank" size="large">Sign up for our newsletter!</Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default DoGoodInstitute;
