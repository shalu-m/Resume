import React ,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import '../App.css';
import { useNavigate } from "react-router-dom";



export default function Register(){

    let navigation=useNavigate()
    const[register,setRegister]=useState({
        request : 'create_candidate',
        name : '',
        email : '',
        password : '',
        aadhar : '',
        address : '',
        phone:'',
        city:'',
        area:'',
        pin:'',
    })
    

    const getData=async ()=>{
        const {data}=await axios.post('https://karka.academy/api/action.php?',JSON.stringify(register))
        console.log(data)
        if(data.status=='success'){
         navigation('/')
        }
    }
    return(
        <div className='login-width pt-4 pb-4'>
            <h3 className='text-center'>Register</h3>
            <form>
                <div className="form-group">
                    <label ><b>Name :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput"  placeholder="Name" onChange={(e)=>setRegister({...register,name:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label><b>Email :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="email"  onChange={(e)=>setRegister({...register,email:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label><b>Password :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="passward" onChange={(e)=>setRegister({...register,password:e.target.value})} />
                </div>
                <div className="form-group">
                    <label><b>Aadhar :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Aadhar" onChange={(e)=>setRegister({...register,aadhar:e.target.value})} />
                </div>
                <div className="form-group">
                    <label><b>Address :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Address"  onChange={(e)=>setRegister({...register,address:e.target.value})}/>
                </div>
                <div className="form-group">
                    <label><b>Phone no:</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Phone no" onChange={(e)=>setRegister({...register,phone:e.target.value})} />
                </div>
                <div className="form-group">
                    <label><b>City :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="City name" onChange={(e)=>setRegister({...register,city:e.target.value})} />
                </div>
                <div className="form-group">
                    <label><b>Area :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Area" onChange={(e)=>setRegister({...register,area:e.target.value})} />
                </div>
                <div className="form-group">
                    <label><b>Pincode :</b></label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Pincode" onChange={(e)=>setRegister({...register,pin:e.target.value})} />
                </div>
                <button  type='button' className='butttn btn btn-dark ' onClick={getData}>Register</button>
            </form>
            
        </div>
    )
}