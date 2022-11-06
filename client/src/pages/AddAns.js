import React from 'react';
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

const AddAns = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <div id="form-main">
      <h4>Enter Your Answer in below Form</h4>
      <div id="form-div">
        <form className="form" id="form1">

          <p className="name">
            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Question to answer" id="name" />
          </p>

          <p className="text">
            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Enter your answer here..."></textarea>
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

export default AddAns;
