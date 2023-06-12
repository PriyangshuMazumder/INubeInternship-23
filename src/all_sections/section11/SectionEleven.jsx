import React from 'react'
import './section_eleven.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {useState, useEffect} from 'react'
import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';


const genders = [{value: 'M', label: 'Male'}, {value: 'F', label: "Female"}];
const yes_or_no = [{value: 'Y', label: 'Yes'}, {value: 'N', label: 'No'}];

const SectionEleven = (props) => {
    const [startDate, setStartDate] = useState(new Date());

    const [secElevenInputs, setSecElevenInputs] = useState({
        policy_number: '',
        gender: '',
        claim_id: '',
        plan_name: '',
        another_plan: '',
    });

    useEffect (() => {
        props.onSecElevenRestChange(secElevenInputs);
    }, [secElevenInputs, props]);

    useEffect(() => {
        props.onSecElevenDateChange(startDate);
      }, [startDate, props]);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSecElevenInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    return (
    <>
        <h2>Section 11</h2>
        <TextField label = "Insured's Policy Group or FECA #" variant = 'filled' sx = {{m: 1, width: 275}} name = 'policy_number' onChange = {handleInputChange} value = {secElevenInputs.policy_number}/>
        <h3>Insured's Date of Birth</h3>
        <DatePicker 
        showYearDropdown
        scrollableYearDropdown
        scrollableMonthYearDropdown
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat='MM/dd/yyyy'
        />
  
        <h3>Enter Insured's Gender</h3>
        <TextField select label = "Gender" variant = "filled" sx={{m:1, width: 100}} name = 'gender' onChange = {handleInputChange} value = {secElevenInputs.gender}>
            {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>
        <br />
        <TextField label = "OTHER CLAIM ID (Designated by NUCC)" variant = 'filled' sx = {{m: 1, width: 350}} name = 'claim_id' onChange = {handleInputChange} value = {secElevenInputs.claim_id}/>
        <TextField label = "Insurance Plan Name or Program Name" variant = 'filled' sx = {{m: 1, width: 275}} name = 'plan_name' onChange = {handleInputChange} value = {secElevenInputs.plan_name}/>
        <h3>Is there another health benefit plan?</h3>
        <TextField select label = "Yes or No" variant = "filled" sx={{m:1, width: 125}} name = 'another_plan' onChange = {handleInputChange} value = {secElevenInputs.another_plan}>
            {yes_or_no.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>
    </>
  )
}

export default SectionEleven
