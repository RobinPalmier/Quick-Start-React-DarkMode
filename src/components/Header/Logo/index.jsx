import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg'
import Context from '../../../store/context';
import logo from '../../../assets/img/logo.svg'
import useStyles from './useStyles';

const Logo = () => {
    const { state } = useContext(Context);
    const classes = useStyles(state);

    return <ReactSVG src={logo} className={classes.logoReactJS} />
}

export default Logo;