import axios from "axios"
import { useState } from "react"



export default function Home(){
    const [form,setForm]=useState()

    console.log(form)
    const [resumeForm,setResumeForm]=useState({
        request : 'create_react_resume',
        user : "shalu",
        resume:form,
    })
    console.log(resumeForm)
    let resume={
        skills:[],
        education:[],
        projects:[],
        personal_details:{},
        languages:[],
    }

    const addDetails=(key,value,index=null,key_2=null)=>{
        if(index==null&&key_2==null){
            resume[key]=value;
        }else if(key_2==null){
            resume[key][index]=value;
        }
        else{
            if(!resume[key][index]){
                resume[key][index]={}
            }
            resume[key][index][key_2]=value;
        }
        
    }
   

    const add=async()=>{
        setForm(resume)
        const {data}=await axios.post(' http://karka.academy/api/action.php',JSON.stringify(resumeForm))
        console.log(data)
        if(data.status==='success'){
           
        }
    }
    const del=async()=>{
        const datas=await axios.get('http://karka.academy/api/action.php?request="get_user_react_resume"&&user="shalu"')
        console.log(datas)
    }
    return(
        <div>
            
            <h2>form</h2>
            <label>Name :</label>
            <input type='text' onKeyUp={(e)=>addDetails('name',e.target.value)}/><br/>
            <label>Email :</label>
            <input type="email" onKeyUp={(e)=>addDetails('email',e.target.value)}/><br/>
            <label>Phone No :</label>
            <input type="number" onKeyUp={(e)=>addDetails('phone_no',e.target.value)}/>
            <label>skills :</label>
            <input type="text" onKeyUp={(e)=>addDetails('skills',e.target.value,0)}/><br/>
            <input type="text" onKeyUp={(e)=>addDetails('skills',e.target.value,1)}/><br/>
            <input type="text" onKeyUp={(e)=>addDetails('skills',e.target.value,2)}/><br/>
            <input type="text" onKeyUp={(e)=>addDetails('skills',e.target.value,3)}/><br/>
            <label><b>Education</b></label>
            
            <table>
                 
                <thead>
                    <tr>
                    <th>course</th>
                    <th>year</th>
                    <th>institude</th>
                    <th>persontage</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,0,'course')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,0,'year')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,0,'institude')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,0,'persontage')}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,1,'course')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,1,'year')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,1,'institude')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,1,'persontage')}/></td>
                    </tr>
                    <tr>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,2,'course')} /></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,2,'year')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,2,'institude')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,2,'persontage')}/></td>
                    </tr>
                    <tr>
                        <td><input type="text"onKeyUp={(e)=>addDetails('education',e.target.value,3,'course')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,3,'year')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,3,'institude')}/></td>
                        <td><input type="text" onKeyUp={(e)=>addDetails('education',e.target.value,3,'persontage')}/></td>
                    </tr>
                </tbody>
            </table>
            <b> Projects</b>
            <table>
               
                <thead>
                    <tr>
                    <th>title</th>
                    <th>abstract</th>
                    <th>year</th>
                    </tr>
                </thead> 
                    <tbody>
                        <tr>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,0,'title')}/></td>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,0,'abstract')}/></td>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,0,'pro_year')}/></td>
                        
                        </tr>
                        <tr>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,1,'title')}/></td>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,1,'abstract')}/></td>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,1,'pro_year')}/></td>
                            
                        </tr>
                        <tr>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,2,'title')}/></td>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,2,'abstract')}/></td>
                            <td><input type="text" onKeyUp={(e)=>addDetails('projects',e.target.value,2,'pro_year')}/></td>
                            
                        </tr>
                    </tbody>
            </table>
            <h3>personal_details</h3>
            <label>Father name :</label>
            <input type="text" onKeyUp={(e)=>addDetails('personal_details',e.target.value,'father_name')}/><br/><br/>
            <label>DOB :</label>
            <input type='text' onKeyUp={(e)=>addDetails('personal_details',e.target.value,'DOB')}/><br/><br/>           
            <label>Address :</label>
            <input type='text' onKeyUp={(e)=>addDetails('personal_details',e.target.value,'address')}/><br/><br/> 
            <label>Gender</label>
            <input type='text' onKeyUp={(e)=>addDetails('personal_details',e.target.value,'gender')}/><br/><br/> 
            <label>maritial_status</label>
            <input type="text" onKeyUp={(e)=>addDetails('personal_details',e.target.value,'maritial_status')}/><br/><br/>
            <label>language_known</label>
            <input type="text" onKeyUp={(e)=>addDetails('languages',e.target.value,0)}/>
            <input type="text" onKeyUp={(e)=>addDetails('languages',e.target.value,0)}/>
            <input type="text" onKeyUp={(e)=>addDetails('languages',e.target.value,0)}/><br/> 
            <button onClick={add}>submit</button>
            <button onClick={del}>del</button>

        </div>
    )
}