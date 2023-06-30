import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {

let [user, setUser] = useState([]);
const [search, setSearch] = useState('');
const navigate = useNavigate();
let headers = {
  'Content-Type': 'application/json'
}
let baseUrl = "https://patient-list.free.beeceptor.com/api/patient";

useEffect(() =>{
  axios.get(baseUrl, {headers})
       .then((res) =>{
        setUser(eval(res.data));
        console.log("type>>>",typeof(eval(res.data)));
       })
       .catch((err) =>{
        console.error("error>>",err)
       })
},[])

const searchElem = (elem) =>{
  let input = elem.target.value;
  setSearch(input);
}

const signOut = () =>{
    toast("Logout succesful",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: 'success'
        } )
    localStorage.clear();
    setTimeout(() => navigate('/'), 2000)
  }


const logOut = () =>{
    toast("Logout succesful",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: 'success'
        } )
    localStorage.clear();
    setTimeout(() => navigate('/'), 2000)
  }

  const editButton = () =>{
    setTimeout(() => navigate('/edit'), 2000)
  }

const moveToDetails = (e, item) =>{
  // console.log("route", item);
  e.preventDefault();
  let moveDetails = JSON.stringify(item);
   localStorage.setItem('Customers', moveDetails);
  navigate(`/details/${item.firstName}`)
  console.log(typeof(item.firstName));
}


const showItems = user.filter((item) =>{
  return search.toLowerCase() === "" ? item : item.firstName.toLowerCase().includes(search) ||
  item.lastName.toLowerCase().includes(search) || 
  item.phoneNumber.includes(search)
}).map((item, index) =>{
  return(
          <tbody>
            <tr key={index + 1} className="text-xs ease-in-out duration-500 hover:bg-slate-100">
              <td className=""><img src={item.id} alt="" className="rounded-full md:w-12"/></td>
              <td className="px-4 py-2">{item.firstName} {item.lastName}</td>
              <td className="px-4 py-2">{item.gender}</td>
              <td className="px-4 py-2">{item.age}</td>
              <td className="px-4 py-2">{item.phoneNumber}</td>
              <td className="px-4 py-2">{item.address}</td>
              <td className="px-16 py-2">
              <button onClick={(e)=>moveToDetails(e, item)} className="text-indigo-700 bg-indigo-200 px-2 font-bold py-3 text-[10px] rounded hover:bg-indigo-300 ">View Profile</button>
              </td>
              <td className="py-2">
              <button className="text-indigo-700 bg-indigo-200 font-bold py-2 text-[10px] rounded px-2 hover:bg-indigo-300 ">Edit Profile</button>
              </td>
            </tr>
          </tbody>


    )
})


  return(

  <div className="flex">
    <div className="bg-indigo-900 w-52 h-[740px] hidden md:block">
      <h1 className="text-[70px] text-center blur text-white">R</h1>
      <button className="hover:bg-indigo-800 ease-in-out duration-500 px-5 rounded py-1 flex justify-between mx-auto mt-5">
        <img src="./image/group.svg" alt="" className="w-9"/>
        <span className="mt-2 text-white text-[12px] mx-2 font-semibold">Patent List</span>
      </button>

      <button className="hover:bg-indigo-800 mt-5 ease-in-out py-2 duration-500 px-5 rounded py-1 flex justify-between mx-auto mt-5">
        <img src="./image/avatar-badged.svg" alt="" className="w-5"/>
        <span className="mt-1 text-white text-[10px] mx-4 font-bold">Register Patient</span>
      </button>

      <button className="mt-[370px] py-2 px-5 rounded py-1 flex justify-between mx-auto">
        <span className="mt-1 tracking-wider text-white text-[10px] mx-4 font-semibold">Darlene Robertson</span>
      </button>
    <div>
      <button onClick={logOut} className="text-white hover:bg-indigo-800 text-[12px] ease-in-out py-2 duration-500 px-12 rounded py-1 flex justify-between mx-auto mt-5">
      <img src="./image/switch.svg" alt="" className="w-4"/>
      <span className="mt-0 tracking-widest text-white text-[12px] mx-4 font-semibold">Logout</span>
      </button>  
      <ToastContainer /> 
    </div>         
    </div>
  <div>

      <div className="flex justify-between mt-4">
        <input type="text" onChange={searchElem} className="border-2 mx-2 w-[280px] md:w-[400px] px-4 font-semibold outline-indigo-200 text-xs py-3 rounded-lg" placeholder="Search for patient's name"/>
        
        <div className="flex ml-32 md:ml-[290px]">
          <img src="./image/Vector (5).png" alt="" className=" w-5 h-5 mr-5 mt-2"/>
          <img src="./image/Rectangle 21.png" alt="" className="w-10 h-10"/>
        </div>
      </div>

      <p className="text-xl ml-3 pb-5 font-semibold mt-4">Patient List</p>
    
      <div className="px-4 relative overflow-x-auto shadow-lg">
        <table className=" text-sm text-left relative overflow-x-auto">
          <thead className="text-gray-700 ">
            <tr className="text-[9px] md:text-xs">
              <th className="px-6 md:px-12 py-3 pb-9"></th>
              <th className="px-4">NAME</th>
              <th className="px-4">GENDER</th>
              <th className="px-4">AGE</th>
              <th className="px-4">PHONE NUMBER</th>
              <th className="px-4">ADDRESS</th>
              <th className="px-4"></th>
            </tr>
          </thead>
          {showItems}
        </table>
      </div>

     <div className="md:hidden">
      <button onClick={signOut} className="bg-indigo-900 px-12 hover:bg-indigo-800 text-[12px] ease-in-out py-2 duration-500 rounded py-1 flex justify-between mx-auto mt-5">
      <img src="./image/switch.svg" alt="" className="w-4"/>
      <span className="mt-0 tracking-widest text-white text-[12px] mx-4 font-semibold">Logout</span>
      </button>  
      <ToastContainer /> 
    </div>         
     </div>
  </div>
)
}
// Dashboard.propTypes = {};

// Dashboard.defaultProps = {};

export default Dashboard;
