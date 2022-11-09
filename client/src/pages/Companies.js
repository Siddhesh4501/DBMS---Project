import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../layouts/Main';
import "./SeeAns.css"
let company_lst = []
const GetCompanies = (props) => {
    let [companies, setcompany] = useState([])

    // console.log(id);
    const getdata = async () => {
        let url = `http://localhost:3001/posts/getCompanyDetails`;
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

    return (
        <Main
            title="Stats"
            description="Some statistics about Michael D'Angelo and mldangelo.com"
        >
            {companies.map((ele) => {
                return <div className="content">
                    <div className="card">
                        <div className="firstinfo">
                            <div className="profileinfo">
                                <h3>{ele.company_name}</h3>
                                <h4>Role: {ele.role}</h4>
                                <h4>Location: {ele.location}</h4>
                                <h4>Stipend: ₹{ele.stipend}</h4>
                                <h4>Number of rounds: {ele.no_of_rounds}</h4>
                                <h4>Number of people recruited: {ele.no_of_people_selected}</h4>
                                <h4>Duration of Aptitude: {ele.duration_of_aptitude}</h4>
                            </div>
                        </div>
                    </div>
                </div>

            })}
        </Main>)
};

export default GetCompanies;