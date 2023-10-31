import React, { useEffect, useState } from 'react'
import '../assests/css/Navbar.css'
import { Link, resolvePath } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameFromLogin, setNameFromLogin] = useState('');

    useEffect(()=>{
        fetchUsers();

    },[])

    const fetchUsers = () => {
        axios
          .get('http://localhost:3000/register')
          .then((res) => {
            const { data } = res; // Destructure the 'data' property from the response
            // console.log('Response data:', data); // Log the entire 'data' object
           
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      }
      
      
      

    

    const handleSub = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/login', {email, password});
            const name = response.data.user.username;
            const token = response.data.token;

            setEmail('');
            setPassword('');
            fetchUsers();
            window.location.reload();
            localStorage.setItem('token', token);
            localStorage.setItem('username', name);

            
            navigate('/home')
            console.log("nameFromLogin", nameFromLogin);
        }
        catch(err){
            console.log('')
        }
    }

  return (
    <>

<div className="container p-4">
        
            <center>
                <div className="testbox text-center mt-5 align-items-center">
                    <form method="POST"  onSubmit={handleSub}>
                        <div className="banner">
                            <h1 className="header">{nameFromLogin}</h1>
                        </div>
                        <div className="item">
                            <p>Email</p>
                            <div className="name-item">
                                <input
                                    className="input"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    
                                    
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className="name-item">
                                <p>Password</p>
                                <input
                                    type="password"
                                    className="input"
                                    name="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <Link className="signup-btn" to="/signup">
                            Sign Up
                        </Link>
                        <div className="btn-block btn">
                            <button
                                className="NavButton"
                                
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    </>
  )
}

export default Login