import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import "./AddAns.css"
const AddAns = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <div id="form-main">
        <h4>Enter Your Answer in below Form</h4>
  <div id="form-div">
    <form class="form" id="form1">
      
      <p class="name">
        <input name="name" type="text" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Question to answer" id="name" />
      </p>
      
      <p class="text">
        <textarea name="text" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Enter your answer here..."></textarea>
      </p>
      
      
      <div class="submit">
        <input type="submit" value="SEND" id="button-blue"/>
        <div class="ease"></div>
      </div>
    </form>
  </div>
  </div>

  </Main>
);

export default AddAns;
