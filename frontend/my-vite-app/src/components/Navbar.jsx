import React, { useEffect } from 'react'
import { Link} from 'react-router-dom';
import '../assests/css/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = ({name}) => {
    const isUserSignedIn = !!localStorage.getItem('token');
    const navigate = useNavigate();

    const hanldeOut = ( ) =>{
        localStorage.removeItem('token');
        navigate('/login')
    }

    

    
    

  return (
    <>
    <header>
        <nav className="navbar navbar-expand-sm fixed-top ">
            <div className="container-fluid">
                {/* <a className="navbar-brand brandIcon" href="#"><img className='logo' src={logo} alt='logo' /></a> */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-nav ml-auto" id="navbarSupportedContent">
                    <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">

                    {isUserSignedIn ? (
                        <>
                        <li className="nav-item navItems active text ">
                            <Link className='nav-link' to='/home'>{name}</Link>
                        </li>

                       

                        <li className="nav-item navItems text">
                        <Link className='nav-link' to='/login ' onClick={hanldeOut}>SignOut</Link>
                        </li>
                        </>
                    )
                        : <>
                        <li className="nav-item navItems active text ">
                            <Link className='nav-link'  to='/home' >Home</Link>
                        </li>

                       

                        <li className="nav-item navItems text">
                        <Link className='nav-link' to='/login'>Login</Link>
                        </li>

                        <li className="nav-item navItems text">
                        <Link className='nav-link' to='/signup'>Register</Link>
                        </li>
                        
                        </>
                }
                        






                        





                    </ul>

                </div>
            </div>
        </nav>
    </header>

    {/* Footer */}


    {/*log in Pop up */}

    {/* 
<!-- Modal --> */}
   

</>
  )
}

export default Navbar