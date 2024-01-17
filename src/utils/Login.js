import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalid } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {addUser} from "../utils/userSlice"
const Login = () => {
    const [isSignIn,setisSignIn]=useState(true);
    const [errorMsg,seterrorMsg]=useState("")
  
    const email=useRef(null);
    const password=useRef(null);
    const username=useRef(null);
    const dispatch=useDispatch();
    const toggleSignIn=()=>{
        setisSignIn(!isSignIn);
        seterrorMsg("")

    }
    const handleClick=()=>{
        
        const valid=checkvalid(email.current.value,password.current.value,!isSignIn?username.current.value:"",!isSignIn)
        seterrorMsg(valid);
        if(valid) return;

        if(!isSignIn){
          //sign up form
          createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName:  username.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              // Profile updated!
          
              const {uid,email,displayName} =user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              // const {uid,email,displayName} = user;
              // dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMsg(errorCode)
            // ..
          });
        }else{
          //Sign in
          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                 
                // ...
              })
              .catch((error) => {
                const errorCode = error.code; 
                const errorMessage = error.message;
                seterrorMsg(errorCode);
              });


        }
    }
    
  return (
    <div className=' relative'>
        <Header/>
        <div className='absolute z-[1] bg-gradient-to-b from-black/80 h-[100%] w-[100%] '></div>
        <img className="h-[100vh] w-[100vw] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        
        <form onSubmit={(e)=>{e.preventDefault()}} className='absolute rounded-[50px] z-[3] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black/60 min-w-[250px] sm:min-w-[300px] w-[25vw] h-[auto] '>
           <div className='m-[30px] mb-[60px]'>
            <p className='text-[200%] w-[100%]  text-white mb-[10%] cursor-default'>{isSignIn?"Sign In":"Sign Up"}</p>
            {!isSignIn && <input ref={username} onFocus={(e)=>{(e.target.placeholder='')}} onBlur={(e)=>{(e.target.placeholder='Username')}} className="mb-[10%] w-[100%] rounded-lg outline-none p-2 sm:p-3 bg-slate-200" required type='text' placeholder='Username'/>}
            <input ref={email} onFocus={(e)=>{(e.target.placeholder='')}} onBlur={(e)=>{(e.target.placeholder='Email')}} className="mb-[10%] w-[100%] rounded-lg outline-none p-2 sm:p-3 bg-slate-200" required type='text' placeholder='Email'/>
             
            <input ref={password} onFocus={(e)=>{(e.target.placeholder='')}} onBlur={(e)=>{(e.target.placeholder='Password')}} className=" w-[100%] rounded-lg outline-none p-2 sm:p-3 bg-slate-200" required type='password' placeholder='Password'/>
            <p className='text-[#e50914] pt-[5%] pb-[5%]'> &nbsp;{errorMsg}</p>
            <button  onClick={handleClick} className='bg-[#e50914] text-white p-2 sm:p-3 w-[100%] mb-[10%] rounded-lg'>{isSignIn?"Sign In":"Sign Up"}</button>
            
            {isSignIn?
                <div className='text-gray-300 cursor-default text-[12px] sm:text-[15px] '>New to Netflix ? 
                  <span className='text-white cursor-pointer' onClick={toggleSignIn}> Sign up now.</span>
                  </div> :
                <div className='text-gray-300 cursor-default text-[12px] sm:text-[15px] '>Already a member ?
                  <span className='text-white cursor-pointer' onClick={toggleSignIn}> Sign in now.</span>
                  </div>}
            
            </div>
        </form>
        
        
    </div>
  )
}

export default Login