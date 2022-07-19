import React from 'react'
import { useParams } from 'react-router-dom';
function Userlogin() {
    
    const {email} = useParams();
    return (
        <div>
            <strong>Welcome To Login Page</strong><br/>
            <h1>this is your Email : {email}</h1>
            {/* <h1>this is your Email : {password}</h1> */}
        </div>
    )
}

export default Userlogin
