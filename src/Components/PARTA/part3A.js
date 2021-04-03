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
    const[Reason,setReason]=useState('')
    const [everGetSupport, setEverGetSupport] = useState('')
    const [everGetSupportfromOtherOrganization, seteverGetSupportfromOtherOrganization] = useState('')
return(
   <Container>
             <Row>
                    <Form >
                        
                                    
                                                
                  
                   
                        <FormControl variant="outlined" >
                            <Form.Label>a) Why are you applyinasg for bursary assistance?</Form.Label>

                           
                            <OutlinedInput id="component-outlined" value={Reason}  label="Reason"
                            
                            onChange = {(e)=> setReason(e.target.value)}
                                           
                            />
                        </FormControl>
                       <br/>
                       <FormControl variant="outlined" >
                            <Form.Label>b) Have you received any financial support / bursaries from NG-CDF in the past? Yes ( ) No. ( )
If yes, specify how much and when you last received the support</Form.Label>

                           
                            <OutlinedInput id="component-outlined" value={everGetSupport}  label="everGetSupport"
                            
                            onChange = {(e)=> setEverGetSupport(e.target.value)}
                                           
                            />
                        </FormControl>


                        <br/>
                       <FormControl variant="outlined" >
                            <Form.Label>c) Have you received any financial support / bursaries from other organizations in the past? Yes ( ) No. ( )
If yes, please provide details.</Form.Label>

                           
                            <OutlinedInput id="component-outlined" value={everGetSupportfromOtherOrganization}  label="everGetSupportfromOtherOrganization
                            "
                            
                            onChange = {(e)=> seteverGetSupportfromOtherOrganization(e.target.value)}
                                           
                            />
                        </FormControl>


              

        </Form>                
                        



            </Row>
        </Container>
    )
}

export default General
