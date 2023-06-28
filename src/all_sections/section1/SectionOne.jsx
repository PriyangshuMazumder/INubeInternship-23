import React from 'react'
import './section_one.css'
import {TextField} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import {useState, useEffect} from 'react'



const insurance_providers = [
    {
      value: 'MB',
      label: 'MEDICARE',
    },
    {
      value: 'MC',
      label: 'MEDICAID',
    },
    {
      value: 'CH',
      label: 'TRICARE',
    },
    {
      value: 'VA',
      label: 'CHAMPVA',
    },
    {
      value: 'CI',
      label: 'GROUP HEALTH PLAN',
    },
    {
      value: 'OF',
      label: 'FECA BLK LUNG',
    },
    {
      value: 'ZZ',
      label: 'OTHER',
    },
  
];

const SectionOne = (props) => {

  const [secOneInputs, setSecOneInputs] = useState({
    insurance_provider: '',
    id_number: '',
  })

  useEffect (() => {
    props.onSecOneChange(secOneInputs);
  }, [secOneInputs, props]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSecOneInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
    <h2>Section 1</h2>
    <TextField select  label="Select" variant="filled" helperText="Please select your Insurance provider" sx={{margin: 1}} name = "insurance_provider" onChange={handleInputChange} value = {secOneInputs.insurance_provider}>
      {insurance_providers.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    <TextField label="Insurance ID Number" variant="filled" helperText="Please enter your Insurance ID Number" sx = {{m:1}} name = "id_number" onChange={handleInputChange} value = {secOneInputs.id_number}/>
    </>
  )
}

export default SectionOne
