import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const Waitroom = () => {
    return (
        <React.Fragment>
            <Container maxWidth="md" style={{ marginTop: 80 }}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Welcome to online Quiz App
            </Typography>
                {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Wait for Quiz to start. We will let you in once Quiz starts
                    start Button below will be activated soon ...
            </Typography> */}
                <div
                >
                    <Grid container spacing={2} justify="center">

                        <Grid item>
                            <Button variant="contained" component={Link} to="/quiz" color="secondary">
                                start

                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>

    )
}

export default Waitroom
