import React from 'react'
import './section_seven.css'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'


const SectionSeven = (props) => {
  const [secSevenInputs, setSecSevenInputs] = useState({
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
  });

  useEffect(() => {
    props.onSecSevenChange(secSevenInputs);
  }, [secSevenInputs, props]);

  function handleInputChange(event){
    const {name, value} = event.target;
    setSecSevenInputs((prevState) => {
      return {
      ...prevState,
      [name]: value,
      };
    });
  }
  return (
  <>
    <h2>Section 7</h2>
    <h3>Enter Insured's Information: </h3>
    <TextField label="Address" variant="filled" sx={{width: 300, m:1}} name = 'address' onChange = {handleInputChange} value = {secSevenInputs.address}/>
    <TextField label="City" variant="filled"sx={{width: 150, m:1}} name = 'city' onChange = {handleInputChange} value = {secSevenInputs.city}/>
    <TextField label="State" variant="filled"sx={{width: 75, m:1}} name = 'state' onChange = {handleInputChange} value = {secSevenInputs.state}/>
    <TextField label="Zip Code" variant="filled"sx={{width: 75, m:1}} name = 'zipCode' onChange = {handleInputChange} value = {secSevenInputs.zipCode}/>
    <TextField label="Phone Number" variant="filled"sx={{width: 150, m:1}} name = 'phoneNumber' onChange = {handleInputChange} value = {secSevenInputs.phoneNumber}/>
  </>
  )
}

export default SectionSeven
