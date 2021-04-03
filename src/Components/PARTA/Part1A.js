import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Container} from 'react-bootstrap'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const General = () => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDOB] = useState('2000-08-11')
    const [idNo, setIDNo] = useState('')
    const [schoolName, setSchoolName] = useState('USIU-Africa')
    const [admission, setadmission] = useState('APT2020/12/1')
    const [campus, setcampus] = useState('USIU-A')
    const [faculty, setfaculty] = useState('SCHOOL OF SCIENCE')
    const [course, setcourse] = useState('APT')
    const [modeOfStudy, setmodeOfStudy] = useState(null)

    const [instPhone, setinstPhone] = useState('')
    const [classs, setClass] = useState('')
    const [graduation, setgraduation] = useState('')
    const [courseDuration, setcourseDuration] = useState('')


    const [phone, setPhone] = useState('')
    const [pollingStation, setpollingStation] = useState('')
    const [ward, setward] = useState('')
    const [location, setlocation] = useState(null)
    const [sublocation, setsublocation] = useState('')
    const [physicalAddress, setphysicalAddress] = useState('')
    const [permanentAddress, setpermanentAddress] = useState('')
    const [instPOBOX, setinstPOBOX] = useState('')
    const [amount, setAmount] = useState(null)


    return (
        <Container>

            <Row>
                < >
                    <Form >
                        <FormControl variant="outlined" >
                            <Form.Label>Name of Student (as it appears in ID/official documents)</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined"> First Name</InputLabel>*/}
                            <OutlinedInput id="component-outlined" value={name}
                            
                            onChange={(e) => setName(e.target.value)}

                            label="name"
                                           labelWidth={60}
                            />
                        </FormControl>


                        <br/>
                        <FormControl variant="outlined">
                            <Form.Label>Gender                                 </Form.Label>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                label="Gender"
                                labelWidth={60}
                            >
                                <MenuItem value="">
                                    <em>Choose</em>
                                </MenuItem>
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                            </Select>
                        </FormControl>

{/* date of birth */}
<FormControl variant="outlined" >
                            <Form.Label>DATE OF BIRTH</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={dob}
                                onChange={(e) => setDOB(e.target.value)}  label="Name" />
                        </FormControl>
                        <br/>

                        <FormControl variant="outlined" >
                            <Form.Label>ID. NO./PASSPORT NO…</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={idNo}
                                onChange={(e) => setIDNo(e.target.value)}  label="Name" />
                        </FormControl>
                        <br/>

                        <FormControl variant="outlined" >
                            <Form.Label>NAME OF SCHOOL /COLLEGE / UNIVERSITY</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={schoolName}
                                onChange={(e) => setSchoolName(e.target.value)}
                            />
                        </FormControl>
                        <br/>


                        <FormControl variant="outlined" >
                            <Form.Label>ADMISSION/REGISTRATION NUMBER</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={admission}
                                onChange={(e) => setadmission(e.target.value)}
                            />
                        </FormControl>
                        <br/>

                        <FormControl variant="outlined" >
                            <Form.Label>CAMPUS/ BRANCH: (for tertiary institution and University)</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={campus}
                                onChange={(e) => setcampus(e.target.value)}
                            />
                        </FormControl>
                        <br/>

                        <FormControl variant="outlined" >
                            <Form.Label>FACULTY / DEPARTMENT: (for tertiary institution and University</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={faculty}
                                onChange={(e) => setfaculty(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>COURSE OF STUDY: (for tertiary institution and University)</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={course}
                                onChange={(e) => setcourse(e.target.value)}

                              />
                        </FormControl>
                        <br/>

                        <FormControl variant="outlined">
                            <Form.Label>Mode of Study</Form.Label>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={modeOfStudy}
                                onChange={(e) => setmodeOfStudy(e.target.value)}
                                label="Gender"

                            >

                                <MenuItem value={'Regular'}>Regular</MenuItem>
                                <MenuItem value={'Parallel'}>Parallel</MenuItem>
                                <MenuItem value={'Boarding'}>Boarding</MenuItem>
                                <MenuItem value={'Day'}>Day</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>COURSE OF STUDY: (for tertiary institution and University)</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={course}
                                onChange={(e) => setcourse(e.target.value)}

                            />
                        </FormControl>

                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>CLASS / GRADE/ YEAR OF STUDY</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={classs}
                                onChange={(e) => setClass(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>COURSE DURATION(in years)</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={courseDuration}
                                onChange={(e) => setcourseDuration(e.target.value)}

                                                           />
                        </FormControl>
                        <br/>

                        <FormControl variant="outlined" >
                            <Form.Label>EXPECTED YEAR AND MONTH OF COMPLETION:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={graduation}
                                onChange={(e) => setgraduation(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>MOBILE /TELEPHONE NUMBER:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>LOCATION:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={location}
                                onChange={(e) => setlocation(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>PHYSICAL ADDRESS:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={physicalAddress}
                                onChange={(e) => setphysicalAddress(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>PERMANENT ADDRESS:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={permanentAddress}
                                onChange={(e) => setpermanentAddress(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>INSTITUTION’S POSTAL ADDRESS:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={instPOBOX}
                                onChange={(e) => setinstPOBOX(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>INSTITUTION’S TELEPHONE NUMBER:</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={instPhone}
                                onChange={(e) => setinstPhone(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                        <FormControl variant="outlined" >
                            <Form.Label>AMOUNT APPLIED FOR (Kshs.):</Form.Label>

                            {/*<InputLabel htmlFor="component-outlined">ID No.</InputLabel>*/}
                            <OutlinedInput
                                id="component-outlined"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </FormControl>
                        <br/>
                    </Form>

                </>

            </Row>
        </Container>
    )
}

export default General
