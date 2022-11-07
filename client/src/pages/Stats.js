import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';
import "./stats.css"



// fetchData();




const Stats = () => {
  let [doubts, setdoubts] = useState([])
//   const requestOptions = {
//     method: 'GET'
// };

const getdata=async()=>{
  let url="http://localhost:3001/posts/doubt";
  let data=await fetch(url);
  console.log(data);
  let parsedata=await data.json();
  console.log(parsedata)
  setdoubts(parsedata)
  console.log(doubts)
}
  useEffect(() => {
     getdata();
   }, []);

   useEffect(() => {
    console.log(doubts);
  }, [doubts]);



return(
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
       <button type="button" id="headbutton" className="btn btn-success btn-sm"><Link to={`/addque`}>Add Your Doubts</Link></button>
    
                           {doubts.map((ele)=>{
                            return  <div className="content">
                            <div className="card">
                              <div className="firstinfo">
                                <div className="profileinfo">
                                  <h2>{ele.first_name+" " + ele.last_name}</h2>
                                  <h3>{ele.company_name}</h3>
                                  <p className="bio"> Que. {ele.doubt}</p>
                                  <Link to={`/seeans/${ele.doubt_id}`}><button type="button" className="btn btn-success btn-sm">See all ans</button></Link>
                                  
                                  <Link to={`/addans/${ele.doubt_id}`}><button  type="button" className="ml-5 btn btn-primary">Answer Que</button></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                      
                                })} 
  </Main>)
};

export default Stats;
