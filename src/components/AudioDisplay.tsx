// import { useState } from "react";
import './AudioDisplay.css';


const AudioDisplay = (props: any) => {
    console.log(props.audioStatusDisplay);

    if (props.audioStatusDisplay.status === 'idle') {
        return (<div> </div>)
    }
    else if (props.audioStatusDisplay.status === 'failed request') {
        return (<div className="container my-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> <p className= "justify-content-center" >Sorry, the requested audio isn't available. Please try something else.</p> </div></div>)
    }
    else if (props.audioStatusDisplay.status === 'awaiting audio') {
        return (<div className="container my-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"><div> <p></p> <p className= "justify-content-center">Loading your sound</p> </div> <div className= "align-items-center justify-content-center"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div></div></div>)
    }
    else if (props.audioStatusDisplay.selectedPattern !== "other") {
        return (
        <div className="container my-3">

        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <p>Your breathwork session is ready! Below is your {props.audioStatusDisplay.duration} minute guided {props.audioStatusDisplay.selectedPattern} breathing with {props.audioStatusDisplay.sound} sound.</p>
        <audio id="player" controls src={props.audioSrc}></audio> <p></p>
        </div> </div>)
        }
    else {
        return (
        <div className="container my-3">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <p>Your breathwork session is ready! Below is your {props.audioStatusDisplay.duration} minute guided {props.audioStatusDisplay.pattern} breathing with {props.audioStatusDisplay.sound} sound.</p>
            <audio controls src={props.audioSrc}></audio> <p></p>
        </div> </div>)
        }
    };

export default AudioDisplay;