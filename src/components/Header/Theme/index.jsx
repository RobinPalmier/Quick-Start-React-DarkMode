import React from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch, connect } from 'react-redux';
import { defineTheme } from '../../../Redux/actions';
import actions from '../../../Redux/actionsLabels';
import Moon from '../../../assets/img/moon.svg';
import Sun from '../../../assets/img/sun.svg';
import useStyles from './useStyles';

const ThemeChoice = () => {
    const theme = useSelector(state => state.theme);
    const classes = useStyles(theme);
    const dispatch = useDispatch();

    const handleChangeTheme = () => dispatch({type: actions.TOGGLE_DARK_MODE});

    return (
        <img 
            className={classes.iconeThemeChange}
            src={theme.isDark ? Sun : Moon}
            alt="darkmode-toggle-img"
            onClick={handleChangeTheme}
        />
    )
}

const mapStateTorops = state => ({
        utheme: state.theme
})

const mapDispatchToProps = dispatch => ({
    theme: bindActionCreators(defineTheme, dispatch),
})


export default connect(
    mapStateTorops,
    mapDispatchToProps,
)(ThemeChoice);