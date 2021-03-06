import { makeStyles } from '@material-ui/styles';
import palette from '../../../assets/style/colors';

const useStyles = makeStyles({
    logoReactJS:{
        width:500,
        margin: '50px auto 0px auto;',
        fill : props => props.isDark ? palette.themeLight : palette.themeDark,
        animation: '$rotate 10s linear infinite',
        '-webkit-transform': '$rotate 10s linear infinite',
        '-ms-transform': '$rotate 10s linear infinite',
        '-moz-transform': '$rotate 10s linear infinite',
        '-o-transform': '$rotate 10s linear infinite',
    },
    "@keyframes rotate": {
        "0%": {
          transform: 'rotate(0deg)',
          '-webkit-transform': 'rotate(0deg)',
          '-ms-transform': 'rotate(0deg)',
          '-moz-transform': 'rotate(0deg)',
          '-o-transform': 'rotate(0deg)',
        },
        "100%": {
            transform: 'rotate(360deg)',
            '-webkit-transform': 'rotate(360deg)',
            '-ms-transform': 'rotate(360deg)',
            '-moz-transform': 'rotate(360deg)',
            '-o-transform': 'rotate(360deg)',
          },
      },
});

export default useStyles;