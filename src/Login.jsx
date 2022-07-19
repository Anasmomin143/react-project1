import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigatetoUlogin=useNavigate()
  // console.log(password);
  const [records,setRecords]=useState([])

const LoginFuction =()=>{
  if(email===""||password===""){
      alert("Invalid Input")
  }else{
    alert("Successfully Login")
  }
}
const EmailChanger = (event)=>{
const value=event.target.value
 setEmail(value)
}
const PasswordChanger=(event)=>{
  const value=event.target.value
 setPassword(value)
}

const Handlesubmitebuttom=(event)=>{
  event.preventDefault();
  const newvars={email,password}
  console.log(newvars.email);
  setRecords(...records,newvars)
    if(newvars.email===""||newvars.password===""){
      alert("Enter Data To Go User Page")
    }else{
      navigatetoUlogin(`/Userlogin/${newvars.email}`)
    }
}
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Login </h1>
      <form onSubmit={Handlesubmitebuttom}>
        <div className='container'>
          <div className="mb-3">
            <label htmlFor="UserEmail" className="form-label">Email address</label>
            <input type="email" name='UserEmail' className="form-control" id="UserEmail" aria-describedby="emailHelp" value={email} onChange={EmailChanger}/>
          </div>
          <div className="mb-3">
            <label htmlFor="UserPassword" className="form-label">Password</label>
            <input type="password" name='UserPassword' className="form-control" id="UserPassword" value={password} onChange={PasswordChanger} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={LoginFuction}>Submit</button>
        </div>
      </form>

    </>

  )
}

