import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    app:{
        backgroundColor: props => props ? '#EDEDED' : '#272726',
        padding: 20,
        transition: '0.5s',
    },
    bodyApp:{
        height: '100%',
        backgroundColor: props => props ? '#272726' : '#EDEDED',
        minHeight: window.innerHeight - 40,
        transition: '0.5s',
    }
});

export default useStyles;