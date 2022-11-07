import React from 'react';
import { useState,useEffect } from 'react';
import Main from '../layouts/Main';

// import "./AddQue.css"
const AddQue = () => {
  const [inputs, setInputs] = useState({});
  localStorage.setItem("mis",112003112);
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setInputs(values=>({...values,["mis"]:localStorage.getItem("mis")}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(inputs);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
  };
      let url="http://localhost:3001/posts/doubt";
      let data=await fetch(url,requestOptions);
      console.log(data);
      let parsedata=await data.json();
      console.log(parsedata)
    alert(inputs);
  }




  return (<Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <div id="form-main">
      <h4>Enter Your Que in below Form</h4>
      <div id="form-div">
        <form className="form" id="form1" onSubmit={handleSubmit}>

          <p className="name">
            <input name="company_name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Company Name" value={inputs.company_name || ""} 
        onChange={handleChange} />
          </p>

          <p className="text">
            <textarea name="doubt" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Question" value={inputs.doubt || ""} 
          onChange={handleChange}></textarea>
          </p>


          <div className="submit">
            <input type="submit" value="SEND" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>

  </Main>)
};

export default AddQue;
