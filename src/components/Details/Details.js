import React from 'react';
// import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';


const Details = () =>{
  const [showItems, setShowItems] = useState([]);
  const navigate = useNavigate();

  const returnBack = () =>{
    localStorage.removeItem("Customers");
    navigate('/dashboard');
    
  }

  useEffect(()=>{
  if(localStorage.getItem("Customers") !== null){
    let userItems = JSON.parse(localStorage.getItem("Customers"));  
  setShowItems(userItems);
  console.log("show>>",showItems);
  }
  },[])

  return (
  <div className="md:flex">

    <div className="bg-indigo-900 w-52 h-[730px] hidden md:block">
      <h1 className="text-[70px] text-center blur text-white">R</h1>
      <button className="hover:bg-indigo-800 ease-in-out duration-500 px-5 rounded py-1 flex justify-between mx-auto mt-5">
        <img src="./image/group.svg" alt="" className="w-9"/>
        <span className="mt-2 text-white text-[12px] mx-2 font-semibold">Patent List</span>
      </button>

      <button className="hover:bg-indigo-800 mt-5 ease-in-out py-2 duration-500 px-5 rounded py-1 flex justify-between mx-auto mt-5">
        <img src="./image/avatar-badged.svg" alt="" className="w-5"/>
        <span className="mt-1 text-white text-[10px] mx-4 font-bold">Register Patient</span>
      </button>

      <button className="mt-[340px] py-2 px-5 rounded py-1 flex justify-between mx-auto">
        <span className="mt-1 tracking-wider text-white text-[10px] mx-4 font-semibold">Darlene Robertson</span>
      </button>

      <button className=" text-white hover:bg-indigo-800 text-[12px] ease-in-out py-2 duration-500 px-12 rounded py-1 flex justify-between mx-auto mt-5">
      <img src="./image/switch.svg" alt="" className="w-4"/>
      <span className="mt-0 tracking-widest text-white text-[12px] mx-4 font-semibold">Logout</span>
      </button>            
    </div>

    <div className="mt-10 md:mt-5 md:mx-auto md:px-3 py-7 shadow-2xl md:shadow-lg">
      <img src={showItems.image} alt="" className="mx-auto w-40 md:w-[300px] rounded-full md:w-12"/> 
      <p className="text-center text-2xl font-bold mt-10">Fullname: {showItems.firstname} {showItems.lastname}<span className="text-sm font-semibold">{showItems.lastName}</span></p>
      <p className="text-center text-2xl font-bold mt-4">Username: {showItems.username}</p>
      <p className="text-center text-2xl font-bold mt-4">Website: {showItems.website}</p>
      <p className="text-center text-2xl font-bold mt-4">Email: {showItems.email}</p>
      <p className="text-center text-2xl font-bold mt-4">Address: {showItems.macAddress}</p>
      <button onClick={returnBack} className=" bg-indigo-900 font-bold text-sm text-white hover:bg-indigo-400 px-28 md:px-10 flex mx-auto mt-20 py-2 rounded">
        <img src="../image/arrow-left.svg" alt="" className="w-5 h-5 mx-2"/>
        Return
      </button>   
    </div>
    
    
  </div>
)

};


export default Details;
