import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from 'react-router-dom'
import Login from './pages/Login'
import {useState} from 'react'
import userContext from './pages/Context'
import Home from './pages/Home'
import Register from './pages/Register'
import View from './pages/View'



function ManinRoute(){

    const[login,setLogin]=useState(false)
    let User_name=localStorage.getItem('Name')
    

    
    return(
        <userContext.Provider value={{login,setLogin,User_name}}>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/view/:id' element={<View/>}/>

                   
                </Routes>
            </Router>
        </userContext.Provider>
    )
}
export default ManinRoute