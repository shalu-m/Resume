import axios from "axios"
import { useEffect, useState,useContext } from "react"
import { json, useParams } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router";
import userContext from "./Context";

import Header from "./components/header";



export default function View(){
    let navigate=useNavigate()
    let value=useContext(userContext)

    let {login,setLogin,User_name}=value

    const [View,setView]=useState('')
    const params=useParams()
    let LogIn=localStorage.getItem('login')
    useEffect(()=>{
        view_list(params.id)
    },[])
    useEffect(
        ()=>{if(!login && LogIn=='false') navigate("/") },
        [login]
    )


    const view_list=async()=>{
        const {data}=await axios(`http://karka.academy/api/action.php?request=get_react_resume_by_id&user=${User_name}&id=${params.id}`)
        setView(data.data.data)
        
       
    }
    // console.log(`data.....`,View)
    

    return(
        <div className='section'> 
            <Header setLogin={setLogin}/>
            <div className="container  pt-4">
                {View && <div>
                    <form>
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label"><b>Name :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).name}</label>
                            
                            </div>
                            <label  className="col-sm-2 col-form-label"><b>Email :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).email}</label>
                            
                            </div>
                            <label  className="col-sm-2 col-form-label"><b>Phone no :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).phone_no}</label>
                            
                            </div>
                        </div>
                    </form> 
                    <hr/>
                    <h4 className="underLine mb-4">Skills :</h4>
                    {JSON.parse(View).skills.map((value,index)=>{
                        return(
                            <div key={index} className='disply'>
                                <ul>
                                    <li>{value}</li>
                                </ul>
                            </div>
                        )
                    })}
                    <hr/>
                    <h4 className="underLine mb-4" >Education :</h4>
                    <table className="table table-active">
                        <thead>
                            <tr>
                                <th scope="col" className="col-1">#</th>
                                <th scope="col" className="col-3">Course</th>
                                <th scope="col" className="col-2">Year</th>
                                <th scope="col" className="col-3">Institute</th>
                                <th scope="col" className="col-3">Percentage</th>
                            </tr>

                        </thead>
                    </table>
                    {JSON.parse(View).education.map((value,index)=>{
                        return(
                            <div key={index}>
                                <table className="table table-active">
                                    <tbody>
                                        <tr>
                                            <td className="col-1">{index+1}</td>
                                            <td className="col-3">{value.course}</td>
                                            <td className="col-2">{value.year}</td>
                                            <td className="col-3">{value.institute}</td>
                                            <td className="col-3">{value.percentage}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        )
                    })}
                    <hr/>
                    <h4 className="underLine mb-4">Project :</h4>
                   
                    <table className="table table-active">
                        <thead>
                            <tr>
                                <th scope="col" className="col-1">#</th>
                                <th scope="col" className="col-4">Title</th>
                                <th scope="col" className="col-3">Year</th>
                                <th scope="col" className="col-4">Abstract</th>
                                
                            </tr>

                        </thead>
                    </table>
                    
                    {JSON.parse(View).project.map((value,index)=>{
                        return(
                            <div key={index}>
                                <table className="table table-active">
                                    <tbody>
                                        <tr>
                                            <td className="col-1">{index+1}</td>
                                            <td className="col-4">{value.title}</td>
                                            <td className="col-3">{value.pro_year}</td>
                                            <td className="col-4">{value.abstract}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                    <hr/>
                    <h4 className="underLine mb-4">personal details :</h4>
                    <form>
                        <div className="form-group row">
                            <label  className="col-sm-2 col-form-label"><b>Father name :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).personal_details.father_name}</label>
                            
                            </div>
                            <label  className="col-sm-2 col-form-label"><b>Date Of Birth :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).personal_details.dob}</label>
                            
                            </div>
                            <label  className="col-sm-2 col-form-label"><b>Address :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).personal_details.address}</label>
                            
                            </div>
                            <label  className="col-sm-2 col-form-label"><b>Gender :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).personal_details.gender}</label>
                            
                            </div>
                            <label  className="col-sm-2 col-form-label"><b>Maritial Status :</b></label>
                            <div className="col-sm-10">
                                <label>{JSON.parse(View).personal_details.maritial_status}</label>
                            
                            </div>
                        </div>
                    </form>
                    <hr/>
                    <h4 className="underLine mb-4">Language known :</h4>
                    {JSON.parse(View).language.map((value,index)=>{
                        return(
                            <div key={index}>
                                <p>{value}</p>
                            </div>
                        )
                    })}

                    
                </div>
                }
            </div>
            
            
        </div>
    )
}