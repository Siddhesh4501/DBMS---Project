import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import "./AddAns.css"


// const [inputs, setInputs] = useState({});

// const handleChange = (event) => {
//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs(values => ({...values, [name]: value}))
// }

// const handleSubmit = (event) => {
//   event.preventDefault();
//   alert(inputs);
// }

const AddAns = (props) => {
  let id = props.match.params.id;
  const [inputs, setInputs] = useState({});
  // localStorage.setItem("mis", 112003112);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
    setInputs(values => ({ ...values, ["mis"]: localStorage.getItem("mis") }));
    setInputs(values => ({ ...values, ["doubt_id"]: id }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    // console.log(inputs);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    };
    let url = `http://localhost:3001/posts/ans/${id}`;
    let data = await fetch(url, requestOptions);
    console.log(data);
    let parsedata = await data.json();
    console.log(parsedata);
    alert(parsedata["status"]);
  }


  return (
    <Main
      title="Stats"
      description="Some statistics about Michael D'Angelo and mldangelo.com"
    >
      <div id="form-main">
        <h4>Enter Your Answer in below Form</h4>
        <div id="form-div">
          <form className="form" id="form1" onSubmit={handleSubmit}>


            <p className="text">
              <textarea name="answer" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Enter your answer here..." value={inputs.answer || ""}
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

export default AddAns;
