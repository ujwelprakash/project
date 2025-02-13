import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';


const Adminlogin = ({ onLogin,isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navi=useNavigate();
  const handlelogin = () => {
    if (username === 'ram@gmail.com' && password === '123') {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  if (isAuthenticated) {
    return  navi('/Dashboard')
   
  }

  return (
   
    <div className = "container-fluid" >

        <div className = "row" >

        <div className = "rect" >

        <div className = "row" >

        <div className = "mx-auto recttwo" >

        <div className = "row" >

        <div className = "image" > </div>

        <div className = "data" >

        <form >

        <label style = {{ paddingTop: "200px", paddingRight: "200px" } } > username: </label> <br/>

        <input  style = {{ width: "300px" } } type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
        
        <label style = {{ paddingTop: "50px", paddingRight: "200px" } } > Password: </label> <br/>

        <input style = {{ width: "300px" } } type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        
           <button style={{marginTop:"100px",borderRadius:"10px 10px 10px 10px",width:"80px"}} type="button" onClick={handlelogin}>Login </button>

         
        </form>
           
        

        </div>
       
        

        </div> 

        </div>

        </div>

        </div>

        </div>

        </div>

    
  );
};

export default Adminlogin;