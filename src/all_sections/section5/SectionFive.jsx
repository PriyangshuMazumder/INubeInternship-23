import React from 'react'
import './section_five.css'
import {TextField} from '@mui/material'
import {useState, useEffect} from 'react'

const SectionFive = (props) => {
  const [secFiveInputs, setSecFiveInputs] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  useEffect(() => {
    props.onSecFiveChange(secFiveInputs);
  }, [secFiveInputs, props]);

  function handleInputChange(event){
    const {name, value} = event.target;
    setSecFiveInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <>
      <h2>Section 5</h2>
      <h3>Enter Patient's Address: </h3>
      <TextField label="Address" variant="filled" sx={{width: 300, m:1}} name = 'address' onChange = {handleInputChange} value = {secFiveInputs.address}/>
      <TextField label="City" variant="filled" sx={{width: 150, m:1}} name = 'city' onChange = {handleInputChange} value = {secFiveInputs.city}/>
      <TextField label="State" variant="filled"sx={{width: 75, m:1}} name = 'state' onChange = {handleInputChange} value = {secFiveInputs.state}/>
      <TextField label="Zip Code" variant="filled"sx={{width: 75, m:1}} name = 'zip' onChange = {handleInputChange} value = {secFiveInputs.zip}/>
      <TextField label="Phone Number" variant="filled" sx={{width: 150, m:1}} name = 'phone' onChange = {handleInputChange} value = {secFiveInputs.phone}/>
    </>
  )
}

export default SectionFive
