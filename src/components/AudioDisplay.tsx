// import { useState } from "react";
import './AudioDisplay.css';


const AudioDisplay = (props: any) => {
    console.log(props.audioStatusDisplay);

    if (props.audioStatusDisplay.status === 'idle') {
        return (<div> </div>)
    }
    else if (props.audioStatusDisplay.status === 'failed request') {
        return (<div> <p>Sorry, the requested audio isn't available. Please try something else.</p> </div>)
    }
    else if (props.audioStatusDisplay.status === 'awaiting audio') {
        return (<div><div> <p></p> <p>Loading your sound</p> </div> <div className="lds-ring"><div></div><div></div><div></div><div></div></div></div>)
    }
    else if (props.audioStatusDisplay.selectedPattern !== "other") {
        return (
        <div>
            <p>Your breathwork session is ready! Below is your {props.audioStatusDisplay.duration} minute guided {props.audioStatusDisplay.selectedPattern} breathing with {props.audioStatusDisplay.sound} sound.</p>
        <audio id="player" controls src={props.audioSrc}></audio>
        </div>)
        }
    else {
        return (
        <div>
            <p>Your breathwork session is ready! Below is your {props.audioStatusDisplay.duration} minute guided {props.audioStatusDisplay.pattern} breathing with {props.audioStatusDisplay.sound} sound.</p>
            <audio controls src={props.audioSrc}></audio>
        </div>)
        }
    };

export default AudioDisplay;