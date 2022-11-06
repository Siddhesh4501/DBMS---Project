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
        <form class="form" id="form1">

          <p class="name">
            <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Company Name" id="name" />
          </p>

          <p class="text">
            <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Question"></textarea>
          </p>


          <div class="submit">
            <input type="submit" value="SEND" id="button-blue" />
            <div class="ease"></div>
          </div>
        </form>
      </div>
    </div>

  </Main>
);

export default AddQue;
