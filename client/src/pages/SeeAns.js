import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import "./SeeAns.css"
const SeeAns = (props) => {
  let id= props.match.params.id;
  let [ans, setans] = useState([])

  // console.log(id);
  const getdata=async()=>{
    let url=`http://localhost:3001/posts/ans/${id}`;
    let data=await fetch(url);
    console.log(data);
    let parsedata=await data.json();
    console.log(parsedata)
    setans(parsedata)
    console.log(ans)
  }
    useEffect(() => {
       getdata();
     }, []);
  
     useEffect(() => {
      console.log(ans);
    }, [ans]);
  

return(

  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >


{ans.map((ele)=>{
                            return  <div className="content">
                            <div className="card">
                              <div className="firstinfo">
                                <div className="profileinfo">
                                  <h2>{ele.first_name+" " + ele.last_name}</h2>
                                  <h3>{ele.company_name}</h3>
                                  <p className="bio"> Ans. {ele.answer}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      
                                })} 
    


  </Main>)
};

export default SeeAns;
