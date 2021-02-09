import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { data } from '../data'
import Detail from './detail'


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
    const [bookmark, setBookmark] = React.useState(sessionStorage.getItem("bookmark") === null ? {} : JSON.parse(sessionStorage.getItem("bookmark")));
    const handleNext = () => {
        setActiveQuestion(activeQuestion < data.length ? activeQuestion + 1 : activeQuestion)
    }
    const handlePrevious = () => {
        setActiveQuestion(activeQuestion > 1 ? activeQuestion - 1 : activeQuestion)
    }
    const handleBookmark = (name) => {
        setBookmark({ ...bookmark, [name]: bookmark[`${name}`] === true ? false : true })
    }

    React.useEffect(() => {
        sessionStorage.setItem("bookmark", JSON.stringify(bookmark));
    }, [bookmark])
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
                        <Detail data={data[`${activeQuestion}` - 1]} handleNext={handleNext} handlePrevious={handlePrevious} handleBookmark={handleBookmark} length={data.length} id={activeQuestion} />

                    </Paper>
                </Grid>
                <Grid item md={3} xs>
                    <Paper className={classes.paper} >
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
