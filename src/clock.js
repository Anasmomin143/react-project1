import React, { useState } from "react";
export default function Clock() {
    const [date, setdate] = useState(new Date());
    function refreshclock() {
        setdate(new Date());
    }
    setInterval(refreshclock, 1000)
    return (
        <>
            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}