import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    content: {
        color: props => props ? '#EDEDED' : '#272726',
        textAlign: 'center',
    },
    code: {
        fontFamily: 'monospace',
        
    }
});

export default useStyles;