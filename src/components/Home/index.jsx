import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './useStyles';

const Home = () =>  {
    const theme = useSelector(state => state.theme);
    const classes = useStyles(theme);

    return (
        <div className={classes.content}>
            <h2>Quick Start : React Dark/Light Mode</h2>
            <h3>Build with : ReactJS - React Redux - React Router - Redux - Material Style</h3>
            <div className={classes.code}>
                <span className={classes.titleCode}>Clone with SSH</span>
                <p className={classes.editor}>git clone git@github.com:RobinPalmier/Quick-Start-React-DarkMode.git</p>
                <span className={classes.titleCode}>Clone with HTTPS</span>
                <p className={classes.editor}>git clone https://github.com/RobinPalmier/Quick-Start-React-DarkMode.git</p>
            </div>
            <p>Credits : Robin Palmier</p>
        </div>
    )
}

export default Home;