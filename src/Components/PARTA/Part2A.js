import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container} from 'react-bootstrap'
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

const General = () => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const[numberOfSiblings, setNumberOfSiblings]= useState('1')
    const [otherP, setOtherP] = useState('')
    const [Income, setIncome] = useState('1000')
    const [expenses, setexpenses] = useState('200')
    const[FullName,setFullName]=useState('')
    const[Address,setAddress]=useState('')
    const[TelephoneNumber,setTelephoneNumber]=useState('')
    const[Occupation,setOccupation]=useState('')
    const[Reason,setReason]=useState('')

    const [state, setState] = React.useState({
    
        bothDead: true,
        oneDead: false,
        bothAlive: false,
        single: false,

    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { bothDead, oneDead, bothAlive,single } = state;
    return (
        <Container>

            <Row>
             
                    <Form >
                        <FormControl component="fieldset" className={classes.formControl}>
                            <Form.Label component="legend">Kindly indicate your family status:</Form.Label>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={bothDead} onChange={handleChange} name="bothDead" />}
                                    label="Both Dead"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={oneDead} onChange={handleChange} name="oneDead" />}
                                    label="One Dead"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={bothAlive} onChange={handleChange} name="bothAlive" />}
                                    label="Both Parents Alive"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={single} onChange={handleChange} name="single" />}
                                    label="Single Parent"
                                />
                                <FormControl variant="outlined" >
                                    <Form.Label>Other</Form.Label>

                                    {/*<InputLabel htmlFor="component-outlined"> First Name</InputLabel>*/}
                                    <OutlinedInput id="component-outlined" value={otherP}  label="Name"
                                    onChange = {(e)=> setOtherP(e.target.value)}
                                                   labelWidth={60}
                                    />
                                </FormControl>

                            </FormGroup>

                        </FormControl>
                        <FormControl variant="outlined" >
                            <Form.Label>Number of siblings (alive)</Form.Label>

                           
                            <OutlinedInput id="component-outlined" value={numberOfSiblings}  label="Name"
                            onChange = {(e)=> setNumberOfSiblings(e.target.value)}
                                           labelWidth={60}
                            />
                        </FormControl>
                        <FormControl variant="outlined" > 

<Form.Label> income(annually ksh)</Form.Label>
<OutlinedInput id="component-outlined" value={Income}  label="income"
onchange = {(e)=>setIncome(e.target.value)}
/>
</FormControl>

<FormControl variant="outlined" > 

<Form.Label> expenses(annually ksh)</Form.Label>
<OutlinedInput id="component-outlined" value={expenses}  label="expenses"
onchange = {(e)=>setexpenses(e.target.value)}
/>
</FormControl>       


                <br/>
              
                <Form.Label> Attach support documents eg- death certificate / a verification letter from area chief/sub chief</Form.Label>
                <br/>
                
                <Form.Label> (a)Father</Form.Label>
                <FormControl variant="outlined" > 
                <Form.Label> Full Name</Form.Label>

<OutlinedInput id="component-outlined" value={FullName}  label="FullName"
onchange = {(e)=>setFullName(e.target.value)}
/>
</FormControl>       
<FormControl variant="outlined" > 
                <Form.Label> Address</Form.Label>

<OutlinedInput id="component-outlined" value={Address}  label="Address"
onchange = {(e)=>Address(e.target.value)}
/>
</FormControl>       



                <br/>
                <FormControl variant="outlined" > 
                <Form.Label> Telephone Number</Form.Label>

<OutlinedInput id="component-outlined" value={TelephoneNumber } label="TelephoneNumber"
onchange = {(e)=>setTelephoneNumber(e.target.value)}
/>
</FormControl>       
<FormControl variant="outlined" > 
                <Form.Label> Occupation</Form.Label>

<OutlinedInput id="component-outlined" value={Occupation}  label="Occupation"
onchange = {(e)=>Occupation(e.target.value)}
/>
</FormControl>   
<Form.Label> (b)Mother</Form.Label>
                <FormControl variant="outlined" > 
                <Form.Label> Full Name</Form.Label>

<OutlinedInput id="component-outlined" value={FullName}  label="FullName"
onchange = {(e)=>setFullName(e.target.value)}
/>
</FormControl>       
<FormControl variant="outlined" > 
                <Form.Label> Address</Form.Label>

<OutlinedInput id="component-outlined" value={Address}  label="Address"
onchange = {(e)=>Address(e.target.value)}
/>
</FormControl>       



                <br/>
                <FormControl variant="outlined" > 
                <Form.Label> Telephone Number</Form.Label>

<OutlinedInput id="component-outlined" value={TelephoneNumber } label="TelephoneNumber"
onchange = {(e)=>setTelephoneNumber(e.target.value)}
/>
</FormControl>       
<FormControl variant="outlined" > 
                <Form.Label> Occupation</Form.Label>

<OutlinedInput id="component-outlined" value={Occupation}  label="Occupation"
onchange = {(e)=>Occupation(e.target.value)}
/>
</FormControl>  
<Form.Label> (c)Guardian</Form.Label>
                <FormControl variant="outlined" > 
                <Form.Label> Full Name</Form.Label>

<OutlinedInput id="component-outlined" value={FullName}  label="FullName"
onchange = {(e)=>setFullName(e.target.value)}
/>
</FormControl>       
<FormControl variant="outlined" > 
                <Form.Label> Address</Form.Label>

<OutlinedInput id="component-outlined" value={Address}  label="Address"
onchange = {(e)=>Address(e.target.value)}
/>
</FormControl>       



                <br/>
                <FormControl variant="outlined" > 
                <Form.Label> Telephone Number</Form.Label>

<OutlinedInput id="component-outlined" value={TelephoneNumber } label="TelephoneNumber"
onchange = {(e)=>setTelephoneNumber(e.target.value)}
/>
</FormControl>       
<FormControl variant="outlined" > 
                <Form.Label> Occupation</Form.Label>

<OutlinedInput id="component-outlined" value={Occupation}  label="Occupation"
onchange = {(e)=>Occupation(e.target.value)}
/>
</FormControl> 


        </Form>                
                        



            </Row>
        </Container>
    )
}

export default General
