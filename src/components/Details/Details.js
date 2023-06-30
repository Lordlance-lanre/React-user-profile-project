import React from 'react';
// import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Portal from "/home/matthew/react-oauth-project/project-oauth/src/components/Portal.js";

const Details = () =>{
  const [showItems, setShowItems] = useState([]);
  const navigate = useNavigate();

  const returnBack = () =>{
    localStorage.removeItem("Customers");
    navigate('/dashboard');
    
  }

  useEffect(()=>{
  let giveItems = JSON.parse(localStorage.getItem("Customers"));  
  setShowItems(eval(giveItems));
  console.log("show>>",showItems);
  },[])

  return (
  <div className="md:flex">
    <Portal/>
    <div className="mt-10 md:mt-5 md:mx-auto md:px-3 py-7 shadow-2xl md:shadow-lg">
      <img src={showItems.id} alt="" className="mx-auto w-40 md:w-[300px] rounded-full md:w-12"/> 
      <p className="text-center text-2xl font-bold mt-10">Fullname: {showItems.firstName} <span className="text-sm font-semibold">{showItems.lastName}</span></p>
      <p className="text-center text-2xl font-bold mt-4">Gender: {showItems.gender}</p>
      <p className="text-center text-2xl font-bold mt-4">Age: {showItems.age}</p>
      <p className="text-center text-2xl font-bold mt-4">Phone Number: {showItems.phoneNumber}</p>
      <p className="text-center text-2xl font-bold mt-4">Address: {showItems.address}</p>
      <button onClick={returnBack} className=" bg-indigo-900 font-bold text-sm text-white hover:bg-indigo-400 px-28 md:px-10 flex mx-auto mt-20 py-2 rounded">
        <img src="../image/arrow-left.svg" alt="" className="w-5 h-5 mx-2"/>
        Return
      </button>   
    </div>
    
    
  </div>
)

};


export default Details;
