import React from 'react';
import { Link } from 'react-router-dom';
import "./AddExperience.css"
import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

// const sections = [
//     'Education',
//     'Experience',
//     'Skills',
//     'Courses',
//     'References',
// ];

const AddExperience = () => (
    <Main
        title="AddExperience"
        description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
    >

        <h1>Tell Us about your experience</h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="mis">Mis</label>
                <input id="mis" type="text" className="form-control" />
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="company_name">Company Name</label>
                <input id="company_name" type="text" className="form-control" />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="rating">Company rating</label>
                <div class="rating">
                    <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="5" id="5"></input>
                    <label for="5">☆</label>
                    <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="4" id="4"></input>
                    <label for="4">☆</label>
                    <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="3" id="3"></input>
                    <label for="3">☆</label>
                    <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="2" id="2"></input>
                    <label for="2">☆</label>
                    <input type="radio" onClick={(e) => setrating(e.target.value)} name="rating" value="1" id="1"></input>
                    <label for="1">☆</label>
                </div>
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="overall_experience">Overall Experience </label>
                <input id="overall_experience" type="text" className="form-control" />
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="verdict">Verdict</label>
                <br />
                <input type="radio" name="selected"></input>
                <label>Selected</label>
                <input type="radio" name="not_selected"></input>
                <label>Not Selected</label>
            </div>
            <div>
                <br />
            </div>
            <button className="button">Submit</button>
        </form>
        <br />
        <br />
        <h1>Questions Asked</h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="mis">Mis</label>
                <input id="mis" type="text" className="form-control" />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="question_tag">Question Type</label>
                <br />
                <input type="radio" name="dsa"></input>
                <label>Dsa</label>
                <input type="radio" name="core"></input>
                <label>Core</label>
                <input type="radio" name="hr"></input>
                <label>HR</label>
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="question_description">Question</label>
                <input id="question_description" type="text" className="form-control" />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="company_name">Company Name</label>
                <input id="company_name" type="text" className="form-control" />
            </div>
            <br />

            <div>
                <br />
            </div>
            <button className="button">Submit</button>
        </form>

    </Main>
);

export default AddExperience;
