import React from 'react';
// import "./AddExperience.css"
import Main from '../layouts/Main';
import { useState, useEffect } from 'react';
import Select from 'react-select';
// import { useHistory } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
const AddExperience = () => {
    // const history = useHistory();
    // const navigate = useNavigate();
    // const navigateToQuestions = () => {
    //     navigate('/add-experience');
    // };
    const [inputs, setInputs] = useState({});
    // const mis = localStorage.getItem("mis")
    let [companies, setcompany] = useState([])

    // console.log(id);
    const getdata = async () => {
        let url = `http://localhost:3001/posts/getcompany`;
        let data = await fetch(url);
        // console.log(data);
        let parsedata = await data.json();
        // console.log(parsedata)
        setcompany(parsedata)
        // console.log(companies)
    }
    useEffect(() => {
        getdata();
    }, []);

    useEffect(() => {
        // console.log(companies);
    }, [companies]);

    let company_lst = []
    // let company_lst = []
    companies.forEach((item) => {
        let tmp = { "label": item.company_name, "value": item.company_name }
        company_lst.push(tmp)
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        // setInputs(values => ({ ...values, ["mis"]: "112003117", ["company_name"]: Select.value }));
        setInputs(values => ({ ...values, ["mis"]: localStorage.getItem("mis"), ["company_name"]: Select.value }));
        // setInputs(values => ({ ...values, ["company_name"]: "BNY Mellon" }));
    }

    const handleSubmit = async (event) => {
        // event.preventDefault();
        console.log(inputs);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        let url = "http://localhost:3001/posts/add-experience";
        let data = await fetch(url, requestOptions);
        // console.log(data);
        let parsedata = await data.json();
        // console.log(parsedata)
        // alert(inputs);
        alert(parsedata["status"]);
        alert("Data added successfully")
        // history.push('/add-interview-questions');
        // navigate("/add-interview-questions");
    }
    return (<Main>
        <h1>Tell Us about your experience</h1>
        <form className="form" onSubmit={handleSubmit} action="/add-interview-questions">
            <div className="form-group">
                <label htmlFor="company_name">Company Name</label>
                <Select
                    className="drop-down"
                    options={company_lst}
                    name="company_name"
                    // value={inputs.company_name || ""}
                    onChange={opt => Select.value = opt.value}
                // onChange={opt => console.log(opt.value)}
                // onChange={handleCompanyChange}
                // onChange="opt => Select.value = opt.value; this.handleChange(); console.log('Was here')"
                />
            </div>
            <br />
            <div className="form-group">
                <label htmlFor="interview_rating">Company rating</label>
                {/* <div class="rating"> */}
                <div>
                    <input type="radio" name="interview_rating" id="1" value="1" onChange={handleChange}></input>
                    <label htmlFor="1">1</label>
                    <input type="radio" name="interview_rating" id="2" value="2" onChange={handleChange}></input>
                    <label htmlFor="2">2</label>
                    <input type="radio" name="interview_rating" id="3" value="3" onChange={handleChange}></input>
                    <label htmlFor="3">3</label>
                    <input type="radio" name="interview_rating" id="4" value="4" onChange={handleChange}></input>
                    <label htmlFor="4">4</label>
                    <input type="radio" name="interview_rating" id="5" value="5" onChange={handleChange}></input>
                    <label htmlFor="5">5</label>
                </div>
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="overall_experience">Overall Experience </label>
                <input name="overall_experience" id="overall_experience" type="text" className="form-control" value={inputs.overall_experience || ""} onChange={handleChange} />
            </div>
            <br />

            <div className="form-group">
                <label htmlFor="verdict">Verdict</label>
                <br />
                <div>

                    <input type="radio" name="verdict" value="Selected" id="selected" onChange={handleChange} />
                    <label htmlFor="selected">Selected</label>
                    <input type="radio" name="verdict" value="Not Selected" id="not_selected" onChange={handleChange} />
                    <label htmlFor="not_selected">Not Selected</label>
                </div>
            </div>
            <div>
                <br />
            </div>
            <button className="button">Submit</button>
            {/* <button className="button"  onClick={navigateToQuestions}>Submit</button> */}
        </form>
    </Main>)
};

export default AddExperience;
