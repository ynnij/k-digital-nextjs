"use client"
import { useState, useEffect } from "react";
const ClockTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString()); 
    
    useEffect(()=>{
         const t = setInterval(()=>{
             setTime(new Date().toLocaleTimeString());
         }, 1000);  
         
         return ()=>{clearInterval(t)}; 
     },[]);

    useEffect(()=>{
        console.log(time);
    },[time]);
    
    return (
        <div className="flex justify-center flex-col items-center">
            <p>
                Next JS : Hello React !!
            </p>
            <div className="font-bold">
                현재시간 : {time} 
            </div>
        </div>
    )
}
export default ClockTime;
