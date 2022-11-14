import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import "./SeeAns.css"
let company_lst = []
const GetHRQ = (props) => {
    let [companies, setcompany] = useState([])

    // console.log(id);
    const getdata = async () => {
        let url = `http://localhost:3001/posts//hrQ`;
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
        console.log(companies);
    }, [companies]);

    console.log(companies)
    return (

        <Main
            title="Stats"
            description="Some statistics about Michael D'Angelo and mldangelo.com"
        >
            <header>
        <h1>HR Questions</h1>
      </header>
            {companies.map((ele) => {
                return <div className="content">
                    <div className="card">
                        <div className="firstinfo">
                            <div className="profileinfo">
                                <h2>{ele.company_name}</h2>
                                <h3>Question Description : </h3>
                                <h4>{ele.question_description}</h4>
                                <h3>Contributed By : </h3>
                                <h4>{ele.mis}</h4>
                            </div>
                        </div>
                    </div>
                </div>

            })}
        </Main>)
};

export default GetHRQ;