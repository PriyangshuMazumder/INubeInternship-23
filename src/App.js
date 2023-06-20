import './App.css';
import React from 'react';
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, SectionSeven, SectionEight, SectionNine, SectionTen } from './all_sections';
import { SectionEleven} from './all_sections'
import axios from 'axios';
import { getElementError } from '@testing-library/react';
let section_one = {
  insurance_provider: "",
  id_number: "",
};

let section_two = {
  first_name: "",
  last_name: "",
  middle_initial: "",
};

let section_three = {
  dob: "",
  gender: "",
};

const section_four = {
  first_name: "",
  last_name: "",
  middle_initial: "",
};

let section_five = {
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
};

let section_six = {
  relationship: "",
};

let section_seven = {
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
};

let section_eight = {
  nuc_input: "",
};

let section_nine = {
  name: "",
  policy_number: "",
  nuc_input_1: "",
  nuc_input_2: "",
  plan_name: "",
};

let section_ten = {
  employment: "",
  auto_accident: "",
  place:  "",
  other: "",
  claim_code: "",
};

let section_eleven = {
  policy_number: "",
  dob: "",
  gender: "",
  claim_id: "",
  plan_name: "",
  another_plan: "",
};
let arr = [section_one,section_two,section_three,section_four,section_five,section_six,section_seven,section_eight
  ,section_nine,section_ten,section_eleven]

export default function MyApp() {

  async function callbackFunction(event) {
    event.preventDefault();

// TO GET PROPER SEGMENTED DATA
    var final={}
    var formobj ={section_one,section_two,section_three,section_four,section_five,section_six,section_seven,section_eight
      ,section_nine,section_ten,section_eleven}
      arr.forEach((field)=>{
        const keys = Object.keys(field);
        var section = {};
        keys.forEach((value, key) => (section[keys] = value))
        formobj[field]= section
      }
    )
    const data = JSON.stringify(formobj)
    const send = await axios.post('http://127.0.0.1:8000/tofile',formobj);
    // console.log(send.data.data);
    const myFormData = new FormData(event.target);
    // const formDataObj = {};
    myFormData.forEach((value, key) => (formobj[key] = value));
    await axios.post('http://127.0.0.1:8000/tofile',formobj);
    // console.log(formDataObj)
}
    async function fillform(event) {
      event.preventDefault();
      await axios.get('http://127.0.0.1:8000/toform').then((res)=>{
        // console.log(res.data);
        const obj = JSON.parse(res.data)
            arr.forEach((field)=>{
              console.log(field)
              field.forEach((ip)=>{
                  console.log(ip)
              })
            })
          })
        };
  

  function handleSecOneChange(inputs){
    section_one.insurance_provider = inputs.insurance_provider;
    section_one.id_number = inputs.id_number;
  }

  function handleSecTwoChange(inputs){
    section_two.first_name = inputs.first_name;
    section_two.last_name = inputs.last_name;
    section_two.middle_initial = inputs.mi;
  }

  function handleSecThreeDateChange(inputs){
    section_three.dob = inputs;
  }

  function handleSecThreeRestChange(inputs){
    section_three.gender = inputs;
  }

  function handleSecFourChange(inputs){
    section_four.first_name = inputs.first_name;
    section_four.last_name = inputs.last_name;
    section_four.middle_initial = inputs.mi;
  }

  function handleSecFiveChange(inputs){
    section_five.address = inputs.address;
    section_five.city = inputs.city;
    section_five.state = inputs.state;
    section_five.zip = inputs.zip;
    section_five.phone = inputs.phone;
  }

  function handleSecSixChange(inputs){
    section_six.relationship = inputs.relationship;
  }

  function handleSecSevenChange(inputs){
    section_seven.address = inputs.address;
    section_seven.city = inputs.city;
    section_seven.state = inputs.state;
    section_seven.zip = inputs.zipCode;
    section_seven.phone = inputs.phoneNumber;
  }

  function handleSecEightChange(inputs){
    section_eight.nuc_input = inputs.reserved;
  }

  function handleSecNineChange(inputs){
    section_nine.name = inputs.name;
    section_nine.policy_number = inputs.policyNumber;
    section_nine.nuc_input_1 = inputs.reservedNUCC1;
    section_nine.nuc_input_2 = inputs.reservedNUCC2;
    section_nine.plan_name = inputs.planName;
  }

  function handleSecTenChange(inputs){
    section_ten.employment = inputs.employment;
    section_ten.auto_accident = inputs.auto_accident;
    section_ten.place = inputs.place;
    section_ten.other = inputs.other;
    section_ten.claim_code = inputs.claim_code;
  }

  function handleSecElevenDateChange(inputs){
    section_eleven.dob = inputs;
  }

  function handleSecElevenRestChange(inputs){
    section_eleven.policy_number = inputs.policy_number;
    section_eleven.gender = inputs.gender;
    section_eleven.plan_name = inputs.plan_name;
    section_eleven.claim_id = inputs.claim_id;
    section_eleven.another_plan = inputs.another_plan;
  }


  return (
    <center>
     <form onSubmit={callbackFunction} id = "form">
      <div className="wrapper">
        <div id="section_one">
          <SectionOne onSecOneChange = {handleSecOneChange}/>
        </div>
      </div>
        
      
      <div className="wrapper">
        <div className="group_of_three" id="section_two">
          <SectionTwo onSecTwoChange = {handleSecTwoChange} />
        </div>
        <div className="group_of_three" id="section_three">
          <SectionThree onSecThreeDateChange = {handleSecThreeDateChange} onSecThreeRestChange = {handleSecThreeRestChange}/>
        </div>
        <div className="group_of_three" id="section_four">
          <SectionFour onSecFourChange = {handleSecFourChange} />
        </div>
      </div>

      <div className="wrapper">
        <div className="group_of_three" id="section_five">
          <SectionFive onSecFiveChange = {handleSecFiveChange}/>
        </div>
        <div className="group_of_three" id="section_six_and_eight">
          <div className="wrapper">
            <div id="section_six">
              <SectionSix onSecSixChange = {handleSecSixChange}/>
            </div>
            <div id="section_eight">
              <SectionEight onSecEightChange = {handleSecEightChange}/>
            </div>
          </div>
        </div>
        <div className="group_of_three" id="section_seven">
          <SectionSeven onSecSevenChange = {handleSecSevenChange}/>
        </div>
      </div>
      <div className="wrapper">
        <div className="group_of_three" id="section_nine">
          <SectionNine onSecNineChange = {handleSecNineChange}/>
        </div>
        <div className="group_of_three" id="section_ten">
          <SectionTen onSecTenChange = {handleSecTenChange}/>
        </div>
        <div className="group_of_three" id="section_eleven">
          <SectionEleven onSecElevenRestChange = {handleSecElevenRestChange} onSecElevenDateChange = {handleSecElevenDateChange}/>
        </div>
      </div>
      <input type='submit' onSubmit={callbackFunction} style={{width:'20%',padding:'10px', margin:'20px',}}/>
      {/* <button onClick={callbackFunction}> Make JSON</button> */}
      <button onClick={fillform} style={{width:'20%',padding:'10px', margin:'20px',}}> Fill Form</button>
      </form>
      </center>
  );
}