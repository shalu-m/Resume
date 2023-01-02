import React ,{useState,useEffect, useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../App.css';
import { useNavigate,Link } from "react-router-dom";
import userContext from './Context';

function Login(){
    
    let value=useContext(userContext)

    let {login,setLogin}=value

    let navigation=useNavigate()
    
     let LogIn=localStorage.getItem('login')
    
     
    useEffect(
        ()=>{if(login && LogIn==='true'){  navigation('/home')}
        },[login]
    )
   


    const[user,setUser]=useState({
        request :'candidate_login',
        email : "",
        password : ""
    })
    
    const add=async()=>{
         
        
           const {data}=await axios.post('http://karka.academy/api/action.php',JSON.stringify(user))
           let name=(data.data.name)
           if(data.status==='success'){
                    localStorage.setItem('Name',name)
                    setLogin(true)
                   localStorage.setItem('login',true)
                    navigation('/home')
           }
            
        //    }else{
        //         setLogin(false)
        //     }
 
    }
   
    return(
        <div className='login-width pt-4 pb-4'>
            <h3 className='text-center'>Log in</h3>
            <form>
                <div className="form-group">
                    <label ><b>Email</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput"  placeholder="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label><b>Password</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="passward"  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
                </div>
                <button onClick={add} type='button' className='btn btn-dark butttn'>Log in</button>
                <p>if you don't have an account..<Link to={'/register'}>Register</Link></p>
            </form>
            
        </div>
    )
}
export default Login