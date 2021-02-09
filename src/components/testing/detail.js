import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import IconButton from '@material-ui/core/IconButton';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const AnsComponent = (props) => {
    const answer = props.data.answer;
    const type = props.data.type;
    const id = props.data.id;
    const { ans, setAns } = props;
    // const [multiAns, setMultiAns] = React.useState({});

    React.useEffect(() => {
        sessionStorage.setItem("answer", JSON.stringify(ans))
    }, [ans])
    // React.useEffect(() => {
    //     setAns({ ...ans, [id]: multiAns })
    // }, [])
    if (type === "single-correct") {
        const handleChange = (event) => {
            setAns({ ...ans, [props.data.id]: event.target.value })
            // setAns(event.target.value);
        };
        return <React.Fragment key={id}>
            <FormControl component="fieldset">
                <RadioGroup aria-label="sigle-correct-option" name="option" value={ans[id] || "-1"} onChange={handleChange}>
                    {answer.map((option, index) => (
                        <FormControlLabel key={index} value={option.option_text} control={<Radio />} label={option.option_text} />
                    ))}
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    }
    // else if (type === "multi-correct") {
    //     const handleChange = (event) => {
    //         setMultiAns({ ...multiAns, [event.target.name]: event.target.checked });
    //     };
    //     // const { gilad } = state;
    //     return <React.Fragment>
    //         <FormControl component="fieldset" >
    //             <FormGroup>

    //                 {answer.map((option, index) => (
    //                     <FormControlLabel key={index}
    //                         control={<Checkbox checked={multiAns[option.option_text] === true ? true : false} onChange={handleChange} name={option.option_text} />}
    //                         label={option.option_text}
    //                     />
    //                 ))}
    //             </FormGroup>
    //             <FormHelperText>! More than one correct</FormHelperText>
    //         </FormControl>
    //     </React.Fragment>
    // }
    else if (type === "para") {
        const handlePara = (e) => {
            setAns({ ...ans, [id]: e.target.value })

        }
        return <React.Fragment key={id}>
            <TextField
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                style={{ width: "100%" }}

                defaultValue={ans[id]}
                // defaultValue="Default Value"
                variant="outlined"
                onChange={handlePara}
            />
        </React.Fragment>

    }
    else if (type === "file-upload") {
        return <React.Fragment>
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    type="file"
                    hidden
                />
            </Button>
        </React.Fragment>
    }
}


const Detail = (props) => {
    const { data, handleNext, handlePrevious, handleBookmark, length } = props;
    const [ans, setAns] = React.useState(sessionStorage.getItem("answer") === null ? {} : JSON.parse(sessionStorage.getItem("answer")));


    const handleSave = (ans) => {
        sessionStorage.setItem(data.id, ans)
    }
    const handleClear = () => {




        delete ans[data.id]

        sessionStorage.removeItem("answer");
        sessionStorage.setItem("answer", JSON.stringify(ans));
    }

    React.useEffect(() => {

    }, [ans])
    return (
        <>
            <Grid container spacing={1}
                justify="center"
            >
                <Grid item xs={1} >
                    <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                        {"Q."}
                    </Typography>
                </Grid>
                <Grid item xs >
                    <Typography component="h1" variant="subtitle1" color="inherit" gutterBottom>
                        {data.question['question_text']}
                    </Typography>
                    <Divider style={{ marginTop: 20, marginBottom: 20 }} />

                    <AnsComponent data={data} handleSave={handleSave} ans={ans} setAns={setAns} />
                </Grid>
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
                            disabled={data.id === 1 ? true : false}
                        >
                            previous
                                </Button>
                        <Button
                            onClick={handleClear}
                            disabled={ans[data.id] ? false : true}
                        >
                            Clear
                            </Button>
                        <IconButton color="secondary" aria-label="bookmark-it"
                            onClick={() => handleBookmark(data.id)}
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
                            disabled={data.id === length ? true : false}
                        >
                            Next
                            </Button>
                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}

export default Detail
