import React from 'react';
import Main from '../layouts/Main';

// import "./AddQue.css"
const AddQue = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <div id="form-main">
      <h4>Enter Your Que in below Form</h4>
      <div id="form-div">
        <form className="form" id="form1">

          <p className="name">
            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Company Name" id="name" />
          </p>

          <p className="text">
            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Question"></textarea>
          </p>


          <div className="submit">
            <input type="submit" value="SEND" id="button-blue" />
            <div className="ease"></div>
          </div>
        </form>
      </div>
    </div>

  </Main>
);

export default AddQue;
