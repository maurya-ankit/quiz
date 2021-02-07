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

import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

const AnsComponent = (props) => {
    const answer = props.data.answer;
    const type = props.data.type;
    const [value, setValue] = React.useState('');
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    if (type === "single-correct") {

        const handleChange = (event) => {
            setValue(event.target.value);
        };
        return <React.Fragment>

            <FormControl component="fieldset">
                <RadioGroup aria-label="sigle-correct-option" name="option" value={value} onChange={handleChange}>
                    {answer.map((option, index) => (
                        <FormControlLabel key={index} value={option.option_text} control={<Radio />} label={option.option_text} />
                    ))}
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    }
    else if (type === "multi-correct") {
        const handleChange = (event) => {
            setState({ ...state, [event.target.name]: event.target.checked });
        };
        const { gilad } = state;
        return <React.Fragment>
            <FormControl component="fieldset" >
                <FormGroup>

                    {answer.map((option, index) => (
                        <FormControlLabel key={index}
                            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                            label={option.option_text}
                        />
                    ))}
                </FormGroup>
                <FormHelperText>! More than one correct</FormHelperText>
            </FormControl>
        </React.Fragment>
    }
    else if (type === "para") {
        return <React.Fragment>
            <TextField
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                style={{ width: "100%" }}
                // defaultValue="Default Value"
                variant="outlined"
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
    const data = props.data;
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

                    <AnsComponent data={data} />
                </Grid>
            </Grid>

        </>
    )
}

export default Detail
