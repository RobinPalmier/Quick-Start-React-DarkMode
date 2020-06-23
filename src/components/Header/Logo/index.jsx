import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg'
import Context from '../../../store/context';
import useStyles from './useStyles';
import logo from '../../../assets/img/logo.svg'

const Logo = () => {
    const { state } = useContext(Context);
    const classes = useStyles(state.isDark);

    return <ReactSVG src={logo} className={classes.logoGwadas} />
}

export default Logo;