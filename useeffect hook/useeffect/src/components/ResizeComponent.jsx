import React,{useState,useEffect} from "react";
function ResizeComponent(){
    const [windowWidth,SetWindowWidth]=useState(window.innerWidth)
    useEffect(()=>{
        const handleResize=()=>SetWindowWidth(window.innerWidth);
        console.log("Event listener Added");

        window.addEventListener('resize',handleResize);

        return()=>{
            console.log("Event listener Removed");
            window.removeEventListener('resize',handleResize);
        };
    },[]);
    // it will render on first render

    return(
        <div>
            <h1>window width:{windowWidth}px</h1>
        </div>
    );
}
export default ResizeComponent;