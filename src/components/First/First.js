import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';


const First = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [emailValidation, setEmailValidation] = useState('')
  let [passwordValidation, setPasswordValidation] = useState('');
   const [showBlindToggle, setShowBlindToggle] = useState(false);
  const [showSeeToggle, setShowSeeToggle] = useState(true);

  const navigate = useNavigate();

  const getElems = (e) =>{
    e.preventDefault();
    let putItems = {
      email: email,
      password: password
    }
    console.log('items>>', putItems);
      if(email && password){
        toast("Login succesful",{
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
        setTimeout(() => navigate('/dashboard'), 2000)
        console.log("successful");  
      }
  }
  const logOut = () =>{
    localStorage.clear();
    navigate('/')
  }
  
 
  function SubmitButton(){
    if(emailValidation === "" && password){
      return <button className="block mx-auto bg-indigo-500 px-[139px] md:px-[163px] mt-12 rounded py-5 font-bold text-white hover:bg-indigo-400 text-sm" onClick={getElems}>Sign in</button>
    }else{
      return <button disabled className="block mx-auto bg-gray-200 px-[139px] md:px-[163px] mt-12 rounded py-5 font-bold text-white text-sm" onClick={getElems}>Sign in</button>
    }
  }


  function handleChange(e){
    let {name} = e.target;
    // console.log(name)

    switch(name){
      case 'email':
      // emailValidation
      let inputEmail = (document.getElementById('email'))?.value;
      console.log("inputEmail",inputEmail); 
      let emailArray = inputEmail.split('')
      if(inputEmail === ''){
        setEmailValidation('This Is a required field');
      }else{
        setEmailValidation('');
      }
      emailArray.forEach((elem) => {
        let theIndexOf = emailArray.indexOf('@');
        if (emailArray.length > theIndexOf && theIndexOf !== -1){
          setEmailValidation('')
        }else{
          setEmailValidation('Please input a valid email address');
        }
      })
      break;
      case 'password':
      // password
      let inputPassword = (document.getElementById('password'))?.value;
      console.log('inputPassword', inputPassword);
      if(inputPassword === ''){
        setPasswordValidation('This Is a required field');
      }else{
        setPasswordValidation('');
      }
    }

  }


  return(
    <div className="">
      <div className="block md:grid grid-cols-2">

        <div className="">          
          <img src="./image/doctor.png" alt="" className="mt-4 w-[460px] md:w-[900px]"/>

          <h3 className="text-3xl text-center subpixel-antialiased font-semibold tracking-wide mt-3 text-indigo-900">Lorem ipsum</h3>
          <p className="text-sm text-center mt-2 tracking-[4px] font-light text-neutral-900">Lorem ipsum dolor sit amet, <br/> Consectetur adipisc</p>
        </div>
        
        <div className="mt-20 overflow-x-auto pb-9">
          <h2 className="text-center text-[32px] font-bold text-indigo-900">SIGN IN YOUR EHR <br/> ACCOUNT</h2>

          <div className="mt-20 pb-2">
              <input  type="email" value={email} name="email" id="email" onChangeCapture={handleChange} onChange={(elem) => setEmail(elem.target.value)}  placeholder="Email" className="flex mx-auto px-6 border rounded border-slate-200 outline-indigo-300 py-4 text-sm w-[320px]  md:w-[370px]"/>
              <small className="text-red-500 ml-[65px] md:ml-[125px]">{emailValidation}</small>

{
  showSeeToggle && 
            <div>
              <input type="password" onChange={(elem) => setPassword(elem.target.value)} onChangeCapture={handleChange} value={password} id="password" name="password" placeholder="Password" placeholder="Password" className="flex mx-auto mt-5 px-6 border rounded border-slate-200 py-4 outline-indigo-300 text-sm w-[320px] md:w-[370px]"/>

              <img src="./image/Vector (5).svg" alt="" className="absolute mx-[316px] md:mx-[449px] -mt-9" onClick={() => {setShowSeeToggle(null); setShowBlindToggle(true);}}/>
            </div>
}

{
  showBlindToggle && 
  <div>

              <input type="text" onChange={(elem) => setPassword(elem.target.value)} onChangeCapture={handleChange} value={password} id="password" name="password" placeholder="Password" className="flex mx-auto mt-5 px-6 border rounded border-slate-200 py-4 outline-indigo-300 text-sm w-[320px] md:w-[370px]"/>
              <img src="./image/Vector (16).svg" alt="" className="absolute mx-[316px] md:mx-[449px] -mt-9" onClick={() => {setShowBlindToggle(null); setShowSeeToggle(true)}}/>
  </div>
}

          </div>

          <button className="text-red-400 text-xs ml-[65px] md:ml-[128px]">{passwordValidation}</button>
          
          <SubmitButton/>
          <ToastContainer />
          <div className="text-center text-sm mt-3 text-indigo-900 tracking-wide">
              <span className="font-light">Don't have an account ?<a href="https://wa.me/+2349059905201" className="font-boldter ml-2 hover:underline"> Meet up with the IT guy</a></span>
          </div>
        </div>
      </div>
    </div>
);
} 

// First.propTypes = {};

// First.defaultProps = {};

export default First;
