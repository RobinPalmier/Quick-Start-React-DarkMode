import { makeStyles } from '@material-ui/styles';
import palette from './colors';

const useStyles = makeStyles({
    app:{
        backgroundColor: props => props ? palette.themeLight : palette.themeDark,
        padding: 20,
        transition: '0.5s',
    },
    bodyApp:{
        height: '100%',
        backgroundColor: props => props ? palette.themeDark : palette.themeLight,
        minHeight: window.innerHeight - 40,
        transition: '0.5s',
    }
});

export default useStyles;