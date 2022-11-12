import React from 'react';
import Main from '../layouts/Main';
import { useState, useEffect } from 'react';

const AddCompany = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(inputs);
    // console.log(inputs);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    };
    let url = "http://localhost:3001/posts/company";
    let data = await fetch(url, requestOptions);
    // console.log(data);
    let parsedata = await data.json();
    // console.log(parsedata)
    // alert(inputs);
    alert(parsedata["status"]);
  }

  return (<Main>

    <h1>Company Data</h1>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="company_name">Company name</label>
        <input name="company_name" id="company_name" type="text" className="form-control" value={inputs.company_name || ""} onChange={handleChange} />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <input name="role" id="role" type="text" className="form-control" value={inputs.role || ""} onChange={handleChange} />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input name="location" id="location" type="text" className="form-control" value={inputs.location || ""} onChange={handleChange} />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="stipend">Stipend</label>
        <input name="stipend" id="stipend" type="number" className="form-control" value={inputs.stipend || ""} onChange={handleChange} />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="no_of_rounds">Number of Rounds</label>
        <input name="no_of_rounds" id="no_of_rounds" type="number" className="form-control" value={inputs.no_of_rounds || ""} onChange={handleChange} />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="no_of_people_selected">Number of students recruited</label>
        <input name="no_of_people_selected" id="no_of_people_selected" type="number" className="form-control" value={inputs.no_of_people_selected || ""} onChange={handleChange} />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="duration_of_aptitude">Duration of Aptitude</label>
        <input name="duration_of_aptitude" id="duration_of_aptitude" type="number" className="form-control" value={inputs.duration_of_aptitude || ""} onChange={handleChange} />
      </div>
      <br />
      <button className="button" type="submit">Submit</button>
    </form>
  </Main>)
};

export default AddCompany;
