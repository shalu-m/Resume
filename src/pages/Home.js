import axios from "axios"
import { useState,useEffect,useContext} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowResumeList from "./components/showResumeList";
import userContext from "./Context";
import { useNavigate } from "react-router";
import Header from "./components/header";

export default function Home(){
    let value=useContext(userContext)

    let {login,setLogin,User_name}=value
    let navigate=useNavigate()

    const [Skills,setSkills]=useState('')
    const[Education,setEducation]=useState({})
    const[Projects,setProject]=useState({})
    const[Language,setLanguage]=useState('')
    
    let LogIn=localStorage.getItem('login')
   
    const[resume,setResume]=useState({
        
        skills:[],
        education:[],
        project:[],
        language:[],
        personal_details:{}
    })
    
    useEffect(
        
        ()=>{if(login || LogIn=='true'){ navigate('/home')}else{navigate('/')}
        
    } ,
        [login]
    )

    useEffect(()=>{
        userNameList()
    })
    
   
    // main
    const resume_list=(key,value)=>{
            let list1={...resume,[key]:value}
            setResume(list1)
    }
    //personal details
    const personalDetails_list=(key,value,item)=>{
        let list5={...resume[item],[key]:value}
            setResume({...resume,[item]:list5})
    }
    //education list
    const education_list=(key,value)=>{
        
        setEducation({...Education,[key]:value})
    }
    const education_add=()=>{
        let educationAdd=[...resume.education,Education]
        setResume({...resume,education:educationAdd})
        setEducation({...Education,course:'',year:'',institute:'',percentage:''})
        
    }
    
    //project list
    const project_list=(key,value)=>{
        let list3={...Projects,[key]:value}
        setProject(list3)
    }
    const project_add=()=>{
        let projectAdd=[...resume.project,Projects]
        setResume({...resume,project:projectAdd})
        setProject({...Projects,title:'',pro_year:'',abstract:''})
    }
    
    //languges
    const add_language=()=>{
        let list4=[...resume.language,Language]
        setResume({...resume,language:list4})
        setLanguage('')
       
     }
    
    //skills
    const add=()=>{
       let list=[...resume.skills,Skills]
       setResume({...resume,skills:list})
       setSkills('')
    }
    const del_items=(index,items)=>{
        let delList=resume[items].filter((value,i)=>i!=index)
        setResume({...resume,[items]:delList})
    } 
    

    // api
  let sent={
    request : 'create_react_resume',
    user : User_name,
    resume
  }
    const details=async()=>{
        const data=await axios.post(' http://karka.academy/api/action.php',JSON.stringify(sent))
    }
    // get detils
    const[userName,setUsername]=useState('')
    
    
    let userNameList=async()=>{
        let {data}=await axios.get(`http://karka.academy/api/action.php?request=get_user_react_resume&user=${User_name}`)
        setUsername(data.data)
    }
    
    return(
        <div className="section">
            <Header setLogin={setLogin}/>
            <div className="container ">
                <h3>Form</h3>
                <hr/>
                <form>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Name</b></label>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabel"  onChange={(e)=>resume_list('name',e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Email</b></label>
                        <div className="col-6">
                        <input type="email" className="form-control" id="colFormLabel" onChange={(e)=>resume_list('email',e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Phone NO</b></label>
                        <div className="col-6">
                        <input type="number" className="form-control" id="colFormLabel" onChange={(e)=>resume_list('phone_no',e.target.value)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Skills</b></label>
                        <div className="col-6">
                        <input type="text" className="form-control" id="colFormLabel" value={Skills} onChange={(e)=>setSkills(e.target.value)}/>
                        </div>
                        <div className="col-auto my-1">
                            <button type="button" className="btn btn-primary" onClick={add}>+</button>
                        </div>
                    </div>
                    {resume.skills.map((value,index)=>{
                        return(
                            <div key={index}>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="col-2">{index+1}</th>
                                            <td className="col-4">{value}</td>
                                            <td className="col-2"><button type="button" className="btn btn-danger" onClick={()=>del_items(index,'skills')}>del</button></td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}

                    
                </form>
                <hr/>
                <h3>Education :</h3>
                <form>
                    <div className="form-row">
                        <div className="col-3 mb-3">
                            <label ><b>Course</b></label>
                            <input type="text" className="form-control" value={Education.course} onChange={(e)=>education_list('course',e.target.value)} />
                        </div>
                        <div className="col-3 mb-3">
                            <label ><b>Year</b></label>
                            <input type="text" className="form-control" value={Education.year}  onChange={(e)=>education_list('year',e.target.value)} />
                        </div>
                        <div className="col-3 mb-3">
                            <label ><b>Institute</b></label>
                            <input type="text" className="form-control" value={Education.institute}  onChange={(e)=>education_list('institute',e.target.value)} />
                        </div>
                        <div className="col-2 mb-3">
                            <label ><b>percentage</b></label>
                            <input type="text" className="form-control" value={Education.percentage}  onChange={(e)=>education_list('percentage',e.target.value)} />
                        </div>
                        <div className="col-1 mt-4">
                            <button type="button" className="btn btn-primary" onClick={education_add}>+</button>
                        </div>
                    </div>
                    {resume.education.map((value,index)=>{
                        return(
                            <div key={index}>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="col-1">{index+1}</th>
                                            <td className="col-3">{value.course}</td>
                                            <td className="col-2">{value.year}</td>
                                            <td className="col-3">{value.institute}</td>
                                            <td className="col-2">{value.percentage}</td>
                                            <td className="col-1"><button type="button" className="btn btn-danger" onClick={()=>del_items(index,'education')}>del</button></td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                    
                </form>
                <hr/>
                <h3>Projects :</h3>
                <form>
                    <div className="form-row">
                        <div className="col-4 mb-3">
                            <label ><b>Title</b></label>
                            <input type="text" className="form-control" value={Projects.title} onChange={(e)=>project_list('title',e.target.value)} />
                        </div>
                        <div className="col-2 mb-3">
                            <label ><b>Year</b></label>
                            <input type="text" className="form-control" value={Projects.pro_year} onChange={(e)=>project_list('pro_year',e.target.value)} />
                        </div>
                        <div className="col-4 mb-3">
                            <label ><b>Abstract</b></label>
                            <input type="text" className="form-control" value={Projects.abstract} onChange={(e)=>project_list('abstract',e.target.value)} />
                        </div>
                        
                        <div className="col-1 mt-4">
                            <button type="button" className="btn btn-primary"  onClick={project_add}>+</button>
                        </div>
                    </div>
                    {resume.project.map((value,index)=>{
                        return(
                            <div key={index}>
                                <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="col-1">{index+1}</th>
                                                <td className="col-3">{value.title}</td>
                                                <td className="col-3">{value.pro_year}</td>
                                                <td className="col-3">{value.abstract}</td>
                                                <td className="col-2"><button type="button" className="btn btn-danger" onClick={()=>del_items(index,'project')}>del</button></td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                
                            </div>
                        )
                    })}
                </form>
                <hr/>
                <form>
                    <h3>Personal Details :</h3>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Father Name</b></label>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabel"  onChange={(e)=>personalDetails_list('father_name',e.target.value,'personal_details')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Date Of Birth</b></label>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabel"  onChange={(e)=>personalDetails_list('dob',e.target.value,'personal_details')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Address</b></label>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabel"  onChange={(e)=>personalDetails_list('address',e.target.value,'personal_details')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Gender</b></label>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabel"  onChange={(e)=>personalDetails_list('gender',e.target.value,'personal_details')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Maritial Status</b></label>
                        <div className="col-6">
                            <input type="text" className="form-control" id="colFormLabel"  onChange={(e)=>personalDetails_list('maritial_status',e.target.value,'personal_details')} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-2 col-form-label"><b>Languages</b></label>
                        <div className="col-6">
                        <input type="text" className="form-control" id="colFormLabel" value={Language} onChange={(e)=>setLanguage(e.target.value)}/>
                        </div>
                        <div className="col-auto my-1">
                            <button type="button" className="btn btn-primary" onClick={add_language}>+</button>
                        </div>
                    </div>
                    {resume.language.map((value,index)=>{
                    return(
                        <div key={index}>
                            <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="col-2">{index+1}</th>
                                            <td className="col-3">{value}</td>
                                            <td className="col-2"><button type="button" className="btn btn-danger" onClick={()=>del_items(index,'language')}>del</button></td>
                                            
                                    </tr>
                                    </tbody>
                                </table>
                        </div>
                    )
                })}
                <button type="button" className="btn btn-success" onClick={()=>{details()}}>Submit</button>
                </form>

                <ShowResumeList userName={userName} setUsername={setUsername} userNameList={userNameList}/> 
                
                
            </div>
        </div>

    )
}