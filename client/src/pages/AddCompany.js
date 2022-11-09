import React from 'react';
import Main from '../layouts/Main';

const AddCompany = () => (
  <Main
    title="AddCompany"
    description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >

    <h1>Company Data</h1>
    <form action="">
      <div className="form-group">
        <label htmlFor="company_name">Company name</label>
        <input id="company_name" type="text" className="form-control" />
        {/* <input id="company_name" type="text" className="textarea" /> */}
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
      <button className="button" type="submit">Submit</button>
    </form>
  </Main>
);

export default AddCompany;
