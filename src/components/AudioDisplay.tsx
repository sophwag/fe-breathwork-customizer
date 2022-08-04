// import { useState } from "react";
import './AudioDisplay.css';


const AudioDisplay = (props: any) => {
    if (props.dictDisplay.length === 0) {
        return (<div> </div>)
    }
    else if (props.dictDisplay.length === 1) {
        return (<div><div> <p></p> <p>Loading your sound</p> </div> <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>)
    }
    else if (props.dictDisplay.selectedPattern !== "other") {
        return (
        <div>
            <p>Your breathwork session is ready! Below is your {props.dictDisplay.duration} minute guided {props.dictDisplay.selectedPattern} breathing with {props.dictDisplay.sound} sound.</p>
        {/* <p>Your guided audio file is below.</p> */}
        <audio controls src={props.src}></audio>
        </div>)
        }
    else return (
        <div>
            <p>Your breathwork session is ready! Below is your {props.dictDisplay.duration} minute guided {props.dictDisplay.pattern} breathing with {props.dictDisplay.sound} sound.</p>
            {/* <p>Your guided audio file is below.</p> */}
            <audio controls src={props.src}></audio>
        </div>
        
    );
    };

export default AudioDisplay;