import React from 'react';
import { Grid } from '@material-ui/core';
import Image from '../../components/Image';

function MarylandAthletics() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <h1>Maryland Athletics</h1>
                <Image source={require("./GameDayFlyer.jpg")} altText="Game Day Flyer" />
                <Image source={require("./StudentTickets2020.jpg")} altText="Student Tickets 2020" />
            </Grid>
        </Grid>
    </div>
  );
}

export default MarylandAthletics;
