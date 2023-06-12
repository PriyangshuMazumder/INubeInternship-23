import React from 'react'
import './section_nine.css'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'


const SectionNine = (props) => {
  const [secNineInputs, setSecNineInputs] = useState({
    name: '',
    policyNumber: '',
    reservedNUCC1: '',
    reservedNUCC2: '',
    insurancePlanName: '',
  });

  useEffect(() => {
    props.onSecNineChange(secNineInputs);
  }, [secNineInputs, props]);

  function handleInputChange(event){
    const {name, value} = event.target;
    setSecNineInputs((prevState) => {
      return {
      ...prevState,
      [name]: value,
      };
    });
  }
  return (
    <>
      <h2>Section 9</h2>
      <TextField label="Other Insured's Name" variant="filled" helperText="Please enter the name of the other insured" name = 'name' onChange = {handleInputChange} value = {secNineInputs.name}/>
      <TextField label="Other Insured's Policy or Group Number" variant="filled" helperText="Please enter the policy or group number of the other insured" name = 'policyNumber' onChange = {handleInputChange} value = {secNineInputs.policyNumber}/>
      <TextField label="Reserved for NUCC use" variant="filled" helperText="Please enter the reserved for NUCC use" name = 'reservedNUCC1' onChange = {handleInputChange} value = {secNineInputs.reservedNUCC1} />
      <TextField label="Reserved for NUCC use" variant="filled" helperText="Please enter the reserved for NUCC use" name = 'reservedNUCC2' onChange = {handleInputChange} value = {secNineInputs.reservedNUCC2}/>
      <TextField label="Insurance plan or program name" variant="filled" helperText="Please enter the insurance plan or program name" name = 'insurancePlanName' onChange = {handleInputChange} value = {secNineInputs.insurancePlanName} />
    </>
  )
}

export default SectionNine
