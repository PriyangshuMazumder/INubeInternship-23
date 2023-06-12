import React from 'react'
import './section_three.css'
import {TextField} from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {useState, useEffect} from 'react';

  
const genders = [{value: 'M', label: 'Male'}, {value: 'F', label: "Female"}];

const SectionThree = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState('');
  useEffect(() => {
    props.onSecThreeDateChange(startDate);
  }, [startDate, props]);
  
  useEffect(() => {
    props.onSecThreeRestChange(gender);
  }, [gender, props]);
  return (
    <>
            <h2>Section 3</h2>
            <h3 textalign="center">Enter Patient's Birthday</h3>
            <DatePicker 
            showYearDropdown
            scrollableYearDropdown
            scrollableMonthYearDropdown
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat='MM/dd/yyyy'
            />

            <h3>Enter Patient's Gender</h3>
            <TextField select label = "Gender" variant = "filled" sx={{width: 100, m:0.8}} onChange = {(e) => setGender(e.target.value)} value = {gender}>
                {genders.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
            </TextField>

    </>
  )
}

export default SectionThree
