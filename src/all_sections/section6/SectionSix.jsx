import React from 'react'
import './section_six.css'
import {TextField} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import {useState, useEffect} from 'react';  


const relationship_to_patient = [
    {
        value: 'SELF',
        label: 'SELF',
    },
    {
        value: 'SPOUSE',
        label: 'SPOUSE',
    },
    {
        value: 'CHILD',
        label: 'CHILD',
    },
    {
        value: 'OTHER',
        label: 'OTHER',
    },
];

const SectionSix = (props) => {
    const [secSixInputs, setSecSixInputs] = useState({
        relationship: '',
    });

    useEffect(() => {
        props.onSecSixChange(secSixInputs);
    }, [secSixInputs, props]);

    function handleInputChange(event){
        const {name, value} = event.target;
        setSecSixInputs((prevState) => {
            return {
            ...prevState,
            [name]: value,
             };
        });
    }
  return (
    <>
      <h2>Section 6</h2>
      <h3>Please select your relationship to the patient: </h3>
      <TextField select label="Select" variant="filled" sx={{width:200, m:1}} name = 'relationship' onChange = {handleInputChange} value = {secSixInputs.relationship}>
          {relationship_to_patient.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
          ))}
      </TextField>
    </>
  )
}

export default SectionSix
