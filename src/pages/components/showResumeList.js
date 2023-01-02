import axios from "axios"
import { useState ,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


export default  function ShowResumeList({setUsername,userName,userNameList}){
    let User_name=localStorage.getItem('Name')
    
const del_item=async(id)=>{
    
    const del_id=await axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&user=${User_name}&id=${id}`)
    
}   
    return(
        <div className="pt-4">
            {/*  */}
           
            {userName && userName.map((value,index)=>{
                return(
                <div key={index}>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row" className="col-2">{index+1}</th>
                                <td className="col-3">{(JSON.parse(value.data).name)}</td>
                                <td className="col-2"><button type="button" className="btn btn-danger" onClick={()=>del_item(value.id)}>del</button></td>
                                <td className="col-2"><button type="button" className="btn btn-dark " ><Link to={`/view/${value.id}`} className='text-light dec-line'>view</Link></button></td>
                                
                            </tr>
                        </tbody>
                    </table>
                   
                </div>
                )
            })}
            
             
        </div>
    )
}