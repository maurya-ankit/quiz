import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { data } from '../data'
import Detail from './detail'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        justifyContent: "space-between"
    },
    root: {
        flexGrow: 1,
        paddingTop: 20,
    },
    paper: {
        padding: theme.spacing(2),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    questionList: {
        margin: theme.spacing(1),
    },
}));

export default function AutoGrid() {
    const classes = useStyles();
    const [activeQuestion, setActiveQuestion] = React.useState(1);
    const [bookmark, setBookmark] = React.useState({ 1: true, 2: false, 3: false, 4: true, 5: true });
    const handleNext = () => {
        setActiveQuestion(activeQuestion < data.length ? activeQuestion + 1 : activeQuestion)
    }
    const handlePrevious = () => {
        setActiveQuestion(activeQuestion > 1 ? activeQuestion - 1 : activeQuestion)
    }
    const handleBookmark = (active) => {
        setBookmark({ ...bookmark, active: !bookmark[`${active}`] })
        console.log(active)
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}
                justify="center"
                // alignItems="center"
                wrap="wrap-reverse"
            >
                {/* <Grid item md={3} xs={12} >
                    <Paper className={classes.paper}>xs=6</Paper>
                </Grid> */}
                <Grid item md={6} xs={12} >
                    <Paper
                        className={classes.paper}
                    >
                        <Detail data={data[`${activeQuestion}` - 1]} />
                        <Grid
                            justify="space-between"
                            container
                            spacing={10}
                        >
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handlePrevious}
                                    disabled={activeQuestion === 1 ? true : false}
                                >
                                    previous
                                </Button>
                                <Button
                                    // variant="contained"
                                    color="primary"
                                    onClick={handlePrevious}
                                    disabled
                                >
                                    Clear
                            </Button>
                                <IconButton color="secondary" aria-label="bookmark-it"
                                    onClick={() => handleBookmark(activeQuestion)}
                                >
                                    <BookmarkIcon />
                                </IconButton>
                            </Grid>

                            <Grid item>
                                <Button variant="contained" style={{ marginInline: 10 }} color="primary">
                                    Save
                            </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    disabled={activeQuestion === data.length ? true : false}
                                >
                                    Next
                            </Button>
                            </Grid>
                        </Grid>

                    </Paper>
                </Grid>
                <Grid item md={3} xs>
                    <Paper className={classes.paper}>
                        {data.map((question) => (
                            <Fab color={question.id === activeQuestion ? "secondary" : "primary"}
                                size="small"
                                className={classes.questionList}
                                key={question.id}
                                onClick={() => setActiveQuestion(question.id)}>
                                <Badge badgeContent={bookmark[`${question.id}`] && <BookmarkIcon />}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }} >
                                    {question.id}
                                </Badge>
                            </Fab>
                        ))}

                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
}
