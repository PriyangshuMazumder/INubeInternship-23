import React from 'react'
import './section_four.css'
import {TextField} from '@mui/material'
import {useState, useEffect} from 'react'

const SectionFour = (props) => {

  const [secFourInputs, setSecFourInputs] = useState({
    last_name: '',
    first_name: '',
    mi: '',
  });

  useEffect (() => {
    props.onSecFourChange(secFourInputs);
  }, [secFourInputs, props]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSecFourInputs(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <h2>Section 4</h2>
      <TextField label = "Insured's Last Name" variant = "filled" helperText = "Please enter Insured's Last Name" sx={{m:1}} name='last_name' onChange={handleInputChange} value = {secFourInputs.last_name}/>
      <TextField label = "Insured's First Name" variant = "filled" helperText = "Please enter Insured's First Name" sx={{m:1}} name='first_name' onChange={handleInputChange} value = {secFourInputs.first_name}/>
      <TextField label = "MI" variant = "filled" helperText = "M. Initial" sx ={{width: 90, m:1}}  name='mi' onChange={handleInputChange} value = {secFourInputs.mi}/>
    </>
  )
}

export default SectionFour
