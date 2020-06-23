import React from 'react';
import useStyles from './useStyles';
import Logo from './Logo';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Logo />
        </div>
    )
}


export default Header;