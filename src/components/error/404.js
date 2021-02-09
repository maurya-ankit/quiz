import React from 'react'
import error404 from '../../images/404.svg'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: 400
        },
    },
}));
const Error404 = () => {
    const classes = useStyles();
    return (
        // <div style={{ alignItems: 'center' }}>
        //     Error Page


        // </div>
        <Grid container justify="center" style={{ marginTop: 80 }}>
            <img src={error404} alt="err0r 404" className={classes.sectionMobile} />

        </Grid>
    )
}

export default Error404
