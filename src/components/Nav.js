import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MediaQuery from 'react-responsive';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = {
    menuButton: {
        color: 'white'
    },
    menuLinks: {
        textDecoration: 'none',
        color: 'black'
    }
}

function Nav(props) {
    // const navStyle = {
    //     color: 'white',
    //     textDecoration: 'none'
    // };

    const { classes, className } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMediaQueryChange = (matches) => {}

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <nav>
        {/* <Link style={navStyle} to="/">
            <h3>Virtual Fair</h3>
        </Link>
        <ul className="nav-links">
            <Link style={navStyle} to="/">
                <li>Home</li>
            </Link>
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
        </ul> */}
        <div className="inner-nav">
            <ul>
                <li>
                    <Link to="/">
                        <Typography variant="h6">Virtual Fair</Typography>
                    </Link>
                </li>

                <MediaQuery minDeviceWidth={600} onChange={handleMediaQueryChange}>
                    <li className="nav-items">
                        <Link to="/About">
                        <Typography variant="h6">About</Typography>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/LiveSessions">
                        <Typography variant="h6">Live Sessions</Typography>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/">
                        <Typography variant="h6">Home</Typography>
                        </Link>
                    </li>
                </MediaQuery>

                <MediaQuery maxDeviceWidth={600} onChange={handleMediaQueryChange}>
                    <li className="nav-items">
                        <div className="menu-button">
                            <Button
                                startIcon={<MenuIcon/>}
                                aria-controls="nav-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                                className={clsx(classes.menuButton, className)}
                            ></Button>
                            <Menu
                                id="nav-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to="/" className={clsx(classes.menuLinks, className)}>
                                        Home
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/LiveSessions" className={clsx(classes.menuLinks, className)}>
                                        Live Sessions
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/About" className={clsx(classes.menuLinks, className)}>
                                        About
                                    </Link>
                                </MenuItem>
                            </Menu>
                        </div>
                    </li>
                </MediaQuery>
            </ul>
        </div>
    </nav>
  );
}

export default withStyles(styles)(Nav);
