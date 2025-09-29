import React,{useState,useEffect} from 'react';
function TImerComponent(){
    const[seconds,setSeconds]=useState(0);
    useEffect(()=>{
        const intervalId= setInterval(()=>{
            console.log("setInterval started")
            setSeconds(prevSeconds=>prevSeconds+1);
        },1000);

        return()=>{
            console.log("time to stop");
            clearInterval(intervalId);
        };

    },[]);
    // it will render on first run
    return (
        <div>
            <h1>
                seconds:{seconds}

            </h1>
            
        </div>
    );
}
export default TImerComponent