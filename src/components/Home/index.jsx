import React, { useContext } from 'react';
import Context from '../../store/context';
import useStyles from './useStyles';

const Home = () =>  {
    const { state } = useContext(Context);
    const classes = useStyles(state.isDark);

    return (
        <div className={classes.content}>
            <h2>Quick Start : React Dark/Light Mode</h2>
            <h3>Build with : ReactJS - React Router - Material Style</h3>
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