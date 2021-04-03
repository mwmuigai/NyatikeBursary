import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const General = () => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)


    return (
        <Container>
            <h5>Personal, Institutional and Other Details</h5>

            <form className={classes.root} noValidate autoComplete="off">
                <Row>
                <FormControl variant="outlined" >
                    <InputLabel htmlFor="component-outlined"> First Name</InputLabel>
                    <OutlinedInput id="component-outlined" value={name}  label="Name" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Second Name</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} label="Name" />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="component-outlined">Surname</InputLabel>
                    <OutlinedInput id="component-outlined" value={name} label="Name" />
                </FormControl>
                </Row>
                <Row>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> Year of Birth</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Month</InputLabel>
                        <OutlinedInput id="component-outlined" value={name} label="Name" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined">Day</InputLabel>
                        <OutlinedInput id="component-outlined" value={name} label="Name" />
                    </FormControl>
                </Row>

                <Row>
                    <FormControl variant="outlined"  >
                        <InputLabel htmlFor="component-outlined"> Disability (if any) : State Type</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>

                </Row>
                <Row>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> Fathers Name</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> ID. No</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> Mobile No.</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>

                </Row>
                <Row>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> Mothers Name</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> ID. No</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> Mobile No.</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>

                </Row>
                <Row>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="component-outlined"> Guardians Name</InputLabel>
                        <OutlinedInput id="component-outlined" value={name}  label="Name" />
                    </FormControl>
                </Row>
            </form>
        </Container>
    )
}

export default General
