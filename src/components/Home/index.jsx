import React, { useContext } from 'react';
import Context from '../../store/context';
import useStyles from './useStyles';

const Home = () =>  {
    const { state } = useContext(Context);
    const classes = useStyles(state.isDark);

    return (
        <div className={classes.content}>
            <h2>Quick Start : React Dark/Light Mode</h2>
            <h3>Build with : ReactJS - React Router - Material UI</h3>
            <div className={classes.code}>
                git clone
            </div>
        </div>
    )
}

export default Home;