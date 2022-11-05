import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const AddCompany = () => (
  <Main
    title="AddCompany"
    description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >

    {/* form for student */}

    {/* <h1>Student's Data</h1>
    <form action="">
      <div className="form-group">
        <label htmlFor="mis">Mis</label>
        <input id="mis" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email_id">Email Id</label>
        <input id="email_id" type="text" className="form-control" />
      </div>
      <div>
        <br />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form> */}


    {/* form for company */}

    <h1>Company's Data</h1>
    <form action="">
      <div className="form-group">
        <label htmlFor="company_name">Company name</label>
        <input id="company_name" type="text" className="form-control" />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <input id="role" type="text" className="form-control" />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input id="location" type="text" className="form-control" />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="stipend">Stipend</label>
        <input id="stipend" type="number" className="form-control" />
      </div>
      <br />
      {/* company_id, company_name, role, location, stipend, no_of_rounds, no_of_people_selected, duration_of_aptitude */}
      <div className="form-group">
        <label htmlFor="no_of_rounds">Number of Rounds</label>
        <input id="no_of_rounds" type="number" className="form-control" />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="no_of_people_selected">Number of students recruited</label>
        <input id="no_of_people_selected" type="number" className="form-control" />
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="duration_of_aptitude">Duration of Aptitude</label>
        <input id="duration_of_aptitude" type="number" className="form-control" />
      </div>
      <br />
      <div>
        <br />
      </div>
      <button className="button">Submit</button>
    </form>
  </Main >
);

export default AddCompany;
