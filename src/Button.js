import React from 'react'
// import Counter from './Counter'

function Button(props) {
    const {handleUpdate} = props;
    return (
        <div>
            <button onClick={handleUpdate}>Counter</button>
        </div>
    )
}
export default Button