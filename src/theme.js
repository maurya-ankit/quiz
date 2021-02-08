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
            default: "#e3f2fd",
            paper: "#bbdefb"
        },
        type: "light"
    },
});
export const DarkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#212121',
        },
        secondary: {
            main: '#880061',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#424242',
            paper: "#757575"
        },
    },
});

