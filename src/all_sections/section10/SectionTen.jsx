import React from 'react'
import './section_ten.css'
import {TextField} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import {useState, useEffect} from 'react'

const employment_options = [
    {value: 'Y', label: 'Yes'},
    {value: 'N', label: 'No'}
];

const auto_accident_options = [
    {value: 'Y', label: 'Yes'},
    {value: 'N', label: 'No'}
];

const other_options = [
    {value: 'Y', label: 'Yes'},
    {value: 'N', label: 'No'}
];


const SectionTen = (props) => {
    const [secTenInputs, setSecTenInputs] = useState({
        employment: '',
        auto_accident: '',
        place: '',
        other: '',
        claim_code: '',
    });
    
    useEffect(() => {
        props.onSecTenChange(secTenInputs);
    }, [secTenInputs, props]);
    
    function handleInputChange(event){
        const {name, value} = event.target;
        setSecTenInputs((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    return (
   <>
        <h2>Section 10</h2>
        <h3>Is patient's condition related to:</h3>
        <TextField select label = "Employment?" variant = 'filled' sx = {{width: 150, m:1}} name = 'employment' onChange = {handleInputChange} value={secTenInputs.employment}>
            {employment_options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}

        </TextField>
        <br />
        <TextField select label = "Auto Accident?" variant = 'filled' sx = {{width: 150, m:1}} name = 'auto_accident' onChange = {handleInputChange} value={secTenInputs.auto_accident}>
            {auto_accident_options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}

        </TextField>
        <TextField label = "Place(state)" variant = 'filled' sx = {{m: 1}} name = 'place' onChange = {handleInputChange} value={secTenInputs.place}/>      
        <br />      
        <TextField select label = "Other?" variant = 'filled' sx = {{width: 150 , m: 1}} name = 'other' onChange = {handleInputChange} value={secTenInputs.other}>
            {other_options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}

        </TextField>
        <br />
        <TextField label = "CLAIM CODES(Designated by NUCC)" variant = 'filled' sx = {{m: 1}} name = 'claim_code' onChange = {handleInputChange} value={secTenInputs.claim_code}/>
    </>
  )
}

export default SectionTen
