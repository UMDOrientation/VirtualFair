import React from 'react';
import { Grid } from '@material-ui/core';
import Image from '../../components/Image';
import VideoPlayer from '../../components/VideoPlayer';

function SORC() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Student Org Resource Center (SORC)</h1>
                <Image source={require('./StudentInvolvementSuiteFrontEntrance.JPG')} altText="SORC Front Entrance"/>
                <VideoPlayer url="https://youtu.be/HRsjiMdXFEQ" />
                <VideoPlayer url="https://youtu.be/bjCqlw0cay8" />
                <VideoPlayer url="https://youtu.be/1MyxyPA8dJI" />
                <VideoPlayer url="https://youtu.be/SDvGt6p1ip0" />
                <VideoPlayer url="https://youtu.be/3DrzxdBjP98" />
                <VideoPlayer url="https://youtu.be/Yr1pQCgh6fA" />
                <Image source={require('./SORCCard01.jpg')} altText="TerpLink Front"/>
                <Image source={require('./SORCCard02.jpg')} altText="TerpLink Back"/>
                <Image source={require('./SORCCard03.jpg')} altText="Funds Front"/>
                <Image source={require('./SORCCard04.jpg')} altText="Funds Back"/>
                <Image source={require('./FirstLookFair.jpg')} altText="First Look Fair"/>
                <Image source={require('./FLFStickerTshirt.jpg')} altText="FLF Tshirt"/>
            </Grid>
        </Grid>
    </div>
  );
}

export default SORC;
