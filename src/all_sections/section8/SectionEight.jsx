import React from 'react'
import './section_eight.css'
import { TextField } from '@mui/material'
import { useState, useEffect } from 'react'


const SectionEight = (props) => {
  const [secEightInputs, setSecEightInputs] = useState({
    reserved: '',
  });

  useEffect(() => {
    props.onSecEightChange(secEightInputs);
  }, [secEightInputs, props]);

  function handleInputChange(event){
    const {name, value} = event.target;
    setSecEightInputs((prevState) => {
      return {
      ...prevState,
      [name]: value,
      };
    });
  }
  return (
    <>
      <h2>Section 8</h2>
      <br />
      <TextField label="Reserved for NUC use" variant="filled" helperText="Reserved for NUC use" name = 'reserved' onChange = {handleInputChange} value = {secEightInputs.reserved}/>
    </>
  )
}

export default SectionEight
