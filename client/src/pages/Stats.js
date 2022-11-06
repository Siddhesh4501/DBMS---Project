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

const showallans=(doubt_id)=>{
  window.open(`/seeans/${doubt_id}`)

}


return(
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >


                           {doubts.map((ele)=>{
                            return  <div className="content">
                            <div className="card">
                              <div className="firstinfo">
                                <div className="profileinfo">
                                  <h1>{ele.first_name+" " + ele.last_name}</h1>
                                  <h3>{ele.company_name}</h3>
                                  <p className="bio"> {ele.doubt}</p>
                                  <button onClick={()=>showallans(ele.doubt_id)} type="button" className="btn btn-success btn-sm">See all ans</button>
                                  <button type="button" className="ml-5 btn btn-primary">Answer Que</button>
                                </div>
                              </div>
                            </div>
                          </div>
                      
                                })} 
  </Main>)
};

export default Stats;
