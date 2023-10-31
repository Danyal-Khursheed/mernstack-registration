import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'
import '../assests/css/SignUp.css';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const [usere, setUser]  = useState([]);
    const [email, setEmail] = useState('');
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');


    useEffect(()=>{
        fetchUsers();
    },[])

    

    const fetchUsers = () => {
        axios 
            .get('http://localhost:3000/register')
            .then((res)=>{
                console.log(res.data)
            })
    }

    const handleReg = (e) => {
        e.preventDefault(); 
      
        axios
          .post('http://localhost:3000/register', { email, username, password })
          .then(() => {
            alert('Registration successful');
      
            setEmail('');
            setUsername('');
            setPassword('');
            fetchUsers();
            navigate('/Login');
          })
          .catch((err) => {
            console.log('Unable to register:', err); // Add the missing closing parenthesis
          });
      };
      

  return (
    <>
         <>
       
       <div style={{ paddingTop: '40px' }} className="d-none d-lg-block d-md-block mt-5">
           <div className='container mt-5'>
               <div className='heading text-center'>
                   <h2>Sign Up for a New Account</h2>
                   <p>Enter the required details for signing up</p>
               </div>

               <form method='POST' onSubmit={handleReg}>
                   <center>
                       <div className='form-body'>
                           <div className="row row1">
                               <div className="col-sm main-box1 py-4">
                                   <label htmlFor="name"><b className='label'>Name</b></label>
                                   <input className='input' type="text" placeholder="Enter your Name" name="name" value={username} onChange={(e)=>setUsername(e.target.value)}  required />

                                   <br />

                                   

                                   <br />

                                   
                                   <br />

                                   <label htmlFor="psw"><b className='label '>Password</b></label>
                                   <input className='input' type="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"  required />
                                   {/* Changed type to "password" for password input. */}
                               </div>

                               <div className="col-sm main-box2 py-4">
                                   <label htmlFor="email"><b className='label'>Email</b></label>
                                   <input className='input' type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" required />
                                   {/* Changed type to "email" for email input. */}
                                   
                                   <br />

                                   
                                   <br />

                                   

                                   <br />

                                   
                               </div>
                           </div>
                           <div className='btn mt-3 mb-3'>
                       <button type='submit'>Sign Up</button>
                       </div>
                       </div>

                       
                   </center>
               </form>
           </div>
           </div>




           {/* Mobile Responsive */}



           <div class="d-lg-none d-xl-none d-lg-none d-md-none">
           <div className='container mt-5'>
               <div className='heading text-center'>
                   <h2>Sign Up for a New Account</h2>
                   <p>Enter the required details for signing up</p>
               </div>

               <form>
                   <center>
                       <div className='form-body-mobile'>
                           <div className="row row1-mobile">
                               <div className="col-sm main-box1-mobile py-4">
                                   <label htmlFor="name"><b className='label'>Name</b></label>
                                   <input className='input' type="text" placeholder="Enter your Name" name="name" required />

                                   <br />

                                  
                                   <br />

                                   <label htmlFor="user"><b className='label'>User Name</b></label>
                                   <input className='input mb-1' type="text" placeholder="Enter your User Name" name="user" required />

                                   <br />

                                   <label htmlFor="psw"><b className='label '>Password</b></label>
                                   <input className='input' type="password" placeholder="Enter your Password" name="psw" required />
                                   {/* Changed type to "password" for password input. */}
                               </div>

                               <div className="col-sm main-box2-mobile py-4">
                                   <label htmlFor="email"><b className='label'>Email</b></label>
                                   <input className='input' type="email" placeholder="Enter Email" name="email" required />
                                   {/* Changed type to "email" for email input. */}
                                   
                                   <br />

                                   

                                   

                                   <br />

                                   <label htmlFor="confirmpsw"><b className='label'>Confirm Password</b></label>
                                   <input className='input' type="password" placeholder="Enter your Password again" name="confirmpsw" required />
                                   {/* Changed type to "password" for confirm password input. */}
                               </div>
                           </div>
                           <div className='btn mt-3 mb-3'>
                       <button >Sign Up</button>
                       </div>
                       </div>

                       
                   </center>
               </form>
           </div>
           </div>
       </>
    </>
  )
}

export default SignUp