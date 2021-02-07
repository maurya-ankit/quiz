import { red, } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#b9eeff',
        },
        secondary: {
            main: '#b794f6',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fdd835',
        },
        type: "light"
    },
});
export const DarkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#2c2e37',
        },
        secondary: {
            main: '#880061',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

