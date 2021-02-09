import React from 'react'
import { useState } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const Quiz = () => {
    const [formData, setformData] = useState([
        { "id": 1, "type": "", "question": "", "answer": [] },
        { "id": 2, "type": "", "question": "", "answer": [] }
    ])
    // const [option, setOption] = useState([{ "option_text": "" }])
    const [type, setType] = React.useState("single-correct");

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <React.Fragment>
            <Container >
                <Paper style={{ margin: 40, padding: 20 }}>
                    <form>
                        {formData.map((subform, index) => (
                            <Paper key={index} style={{ padding: 10, marginTop: 10, marginBottom: 10 }}>

                                <FormControl variant="filled" style={{ minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-filled-label">Select Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={type}
                                        onChange={handleChange}
                                        key={index}
                                    >
                                        <MenuItem value={"single-correct"}>Single correct</MenuItem>
                                        <MenuItem value={"para"}>Paragraph</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    color="secondary"
                                    id="email"
                                    label="Add Question text"
                                    name="email"
                                />
                                {type === "single-correct"
                                    ?
                                    <>

                                    </>
                                    :
                                    <>
                                        default instruction
                                    </>}

                            </Paper>))}
                        <Grid
                            justify="space-between"
                            container
                        // spacing={10}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    setformData([...formData, { "id": 2, "type": "", "question": "", "answer": [] }])
                                }}
                            >
                                Add new
                                </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                Create
                                </Button>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </React.Fragment>
    )
}

export default Quiz
