import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { useNavigate } from "react-router";
import userContext from '../Context';


function Header({setLogin}){
    let Name=localStorage.getItem('Name')
    
    

    let navigate=useNavigate()
    const checkLogin=()=>{
        setLogin(false)
        localStorage.setItem(`login`,false)
        navigate('/')
        
        
    }
   
    return(
        <div >
            <div className='header'>
                <div className='container'>

                <nav className="navbar">
                    <h2 className='pt-3 pb-3 pl-2 '>Resume</h2>
                    <h3> Welcome {Name}</h3>
                    <form className="form-inline">
                        <button onClick={checkLogin}  type="button" className="btn btn-danger">Log Out</button>
                    </form>
                </nav>
                    
                    
                    
                </div>
                
            </div>
        </div>
    )
}
export default Header;