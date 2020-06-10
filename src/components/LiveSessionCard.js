import React from 'react';
import { Grid, Card, CardHeader, CardActions, CardContent, IconButton, Collapse, Typography, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import "./components.css";

const useStyles = makeStyles((theme) => ({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
}));

function LiveSessionCard({org, description, sessions}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <>
            <Card>
                <CardHeader title={org}/>
                <CardContent>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        style={{margin:"auto"}}
                        >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container justify="center" spacing={2}>
                            {sessions.map((session, index) => {
                                return (
                                    <Grid item xs={12} lg={6}>
                                        <LiveSessionTime
                                            key={org + "_" + index}
                                            dateTime={session.dateTime}
                                            joinLink={session.joinLink}
                                            registerLink={session.registerLink}
                                            meetingId={session.meetingId}
                                            password={session.password}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}

function LiveSessionTime({dateTime, joinLink, registerLink, meetingId, password}) {
    return(
        <>
            <Card>
                <Typography variant="h6">
                    {dateTime}
                </Typography>
                <Divider/>
                <Typography variant="body1">
                    {(meetingId !== undefined) && <><span>Meeting ID: {meetingId}</span><br/></>}
                    {(password !== undefined) && <><span>Password: {password}</span><br/></>}
                    {(joinLink !== undefined) && <><Button href={joinLink} target="_blank">Join Here</Button><br/></>}
                    {(registerLink !== undefined) && <><Button href={registerLink} target="_blank">Register Here</Button><br/></>}
                </Typography>
            </Card>
        </>
    );
}

export default LiveSessionCard;