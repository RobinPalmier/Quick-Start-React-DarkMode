import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    content: {
        color: props => props ? '#EDEDED' : '#272726',
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    code: {
        marginTop: 50,
    },
    titleCode: {
        textAlign: "left",
    },
    editor: {
        padding: 15,
        color: '#EDEDED',
        backgroundColor: '#000000b5',
        borderRadius: 5,
        maxWidth: 500,
        width: '50%',
        margin: '10px auto 50px auto',
        '&:nth-child(4)': {
            maxWidth: 530,
        }
    }
});

export default useStyles;