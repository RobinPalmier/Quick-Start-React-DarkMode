import { createMuiTheme } from '@material-ui/core/styles';

export const GlobalStyles = (theme) => {

    const htmlBackground = (theme) => {
        return theme ? '#EDEDED' : '#272726';
    }

    const bodyBackground = (theme) => {
        return theme ? '#272726' : '#EDEDED';
    }
    
    return createMuiTheme({
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    html: {
                        backgroundColor: htmlBackground(theme),
                    },
                    body: {
                        backgroundColor: bodyBackground(theme),
                    }
                },
            },
        },
    });
}