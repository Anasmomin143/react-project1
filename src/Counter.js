import React, { useState, useEffect } from 'react'
// import Button from './Button'
function Counter() {
    const [count, setCount] = useState()
    const [nature,setnature]=useState("")
    function handleUpdate() {
        setCount(count + 1)

    }
    // useEffect(() => {
    //     console.log("running")
    // })
    useEffect(() => {
        if(count===undefined){
            setCount(0)
        }

        if(count%2===0){
            setnature("Even")
            
        }
        else{
            setnature("odd")
        }
        }, [count])
    return (
        <div>
            <p>Counter {count}</p>
            <button onClick={handleUpdate}>Update</button>
            {/* <Button handleUpdate={handleUpdate}></Button> */}
            <p> Number is : {nature}</p>
        </div>
    )
}

export default Counter
