import React,{useState} from "react";
function Input(props){
    const {id,updatedvalue}=props
    return(
    <>
        <input id={id} onChange={(event)=>{
            let changeuservalue=event.target.value
            updatedvalue(changeuservalue)}}/>
     </>
    )
}


export default function UserInfoDisplay(){



    const [username,UpdateUserName]= useState('')
    const [useremail,UpdateUserEmail]=useState('')
    const [usernumber,UpdateUserNumber]=useState('')
    return(
        <>
        <p>User's name is {username} </p>
        <Input id="myinput1" updatedvalue={UpdateUserName}/>
        {/* <input  id='myinput1'onChange={(event)=>{
            let changeduser= event.target.value;
            UpdateUserName(changeduser)
            console.log(username);
        }}/> */}

<p>User's Email is {useremail}</p>
<Input id="myinput2" updatedvalue={UpdateUserEmail}/>
        {/* <input  id='myinput2'onChange={(event)=>{
            let changeduser= event.target.value;
            UpdateUserEmail(changeduser)
            console.log(useremail);
        }}/> */}

<p>User's Number is {usernumber}</p>
<Input id="myinput3" updatedvalue={UpdateUserNumber}/>
        {/* <input  id='myinput3'onChange={(event)=>{
            let changeduser= event.target.value;
            UpdateUserNumber(changeduser)
            console.log(usernumber);
        }}>
     </input> */}
        <input type='submit' onClick={(event)=>{
            alert(`${username} ${useremail} ${usernumber}`)
        }}></input>
        

    </>
    )

}