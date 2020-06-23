import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import LiveSessionTimes from './organizations/LiveSessionTimes';
import LiveSessionCard from './components/LiveSessionCard';

function LiveSessions() {
  return (
    <div>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} md={10} lg={6}>
                <Typography variant="h2">
                    Live Sessions
                </Typography>
                <Grid container justify="center" spacing={2}>
                    {LiveSessionTimes.map((orgSession, index) => {
                        return (
                            <Grid item xs={12}>
                                <LiveSessionCard key={orgSession.name} org={orgSession.name} sessions={orgSession.sessions} description={orgSession.desc}/>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default LiveSessions;
