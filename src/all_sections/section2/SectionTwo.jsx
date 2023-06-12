import React from 'react'
import {TextField} from '@mui/material'
import './section_two.css'
import { useState, useEffect } from 'react';


const SectionTwo = (props) => {

  const [secTwoInputs, setSecTwoInputs] = useState({
    last_name: '',
    first_name: '',
    mi: '',
  });

  useEffect (() => {
    props.onSecTwoChange(secTwoInputs);
  }, [secTwoInputs, props]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSecTwoInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    
    <>   
    <h2>Section 2</h2>
    <TextField label = "Patient's Last Name" variant = "filled" helperText = "Please enter patients last Name" sx={{m:1}} name = "last_name" onChange = {handleInputChange} value = {secTwoInputs.last_name}/>
    <TextField label = "Patient's First Name" variant = "filled" helperText = "Please enter patients First Name" sx={{m:1}} name = "first_name" onChange={handleInputChange} value = {secTwoInputs.first_name}/>
    <TextField label = "MI" variant = "filled" helperText = "M. Initial" sx ={{width: 90, m:1}} name = "mi" onChange = {handleInputChange} value = {secTwoInputs.mi}/>
    </>    

  )
}

export default SectionTwo
