import React from 'react';
import { ReactSVG } from 'react-svg';
import { useSelector } from 'react-redux';
import logo from '../../../assets/img/logo.svg';
import useStyles from './useStyles';

const Logo = () => {
    const theme = useSelector(state => state.theme);
    const classes = useStyles(theme);

    return <ReactSVG src={logo} className={classes.logoReactJS} />
}

export default Logo;