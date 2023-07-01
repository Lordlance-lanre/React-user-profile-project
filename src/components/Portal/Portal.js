import React from 'react';

const Portal = () =>{
return(

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


	)
}

export default Portal;