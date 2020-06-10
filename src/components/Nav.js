import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import '../App.css';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
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
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
