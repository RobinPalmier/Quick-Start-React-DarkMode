import React, { useContext } from 'react';
import Context from '../../../store/context';
import useStyles from './useStyles';
import Moon from '../../../assets/img/moon.svg';
import Sun from '../../../assets/img/sun.svg';

const ThemeChoice = () => {
    const { state, dispatch } = useContext(Context);
    const classes = useStyles();

    const handleChangeTheme = () => {
        dispatch({type: "TOGGLE_DARK_MODE"});
    }

    return (
            <img 
                className={classes.iconeThemeChange}
                src={state.isDark ? Sun : Moon}
                alt="darkmode-toggle-img"
                onClick={handleChangeTheme}
            />
    )
}


export default ThemeChoice;