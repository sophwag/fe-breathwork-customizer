// import { useState } from "react";
import './AudioDisplay.css';

interface propConfig {
    audioStatusDisplay: any;
    audioSrc: any;
}

const AudioDisplay = (props: propConfig) => {
    console.log(props.audioStatusDisplay);

    if (props.audioStatusDisplay.status === 'idle') {
        return (<div> </div>)
    }
    else if (props.audioStatusDisplay.status === 'failed request') {
        return (<div className="container-sm col-xl-10 col-xxl-8 py-4 px-8">
        <div className="p-4 align-items-center rounded-4"> <p className= "justify-content-center" >Sorry, the requested audio isn't available. Please try something else.</p> </div></div>)
    }
    else if (props.audioStatusDisplay.status === 'awaiting audio') {
        return (<div className="container-sm col-xl-10 col-xxl-8 py-4 px-8">
        <div className="p-4 align-items-center rounded-4"><div> <p className= "justify-content-center">Your breathwork session is being created</p> </div> <div className= "align-items-center justify-content-center"><div className="lds-ring"><div></div><div></div><div></div><div></div></div></div></div></div>)
    }
    else if (props.audioStatusDisplay.selectedPattern !== "other") {
        let finalPattern = props.audioStatusDisplay.pattern.split("-");
        return (
        <div className="container-sm col-xl-10 col-xxl-8 py-4 px-8">
        <div className="p-4 align-items-center rounded-4">
            <p>Below is your {props.audioStatusDisplay.duration}-minute guided {props.audioStatusDisplay.selectedPattern} breathing with the {props.audioStatusDisplay.sound} sound.</p>
            <p className="fw-bold"> How it works: </p>
            <p>Inhale during the {finalPattern[0]}-second sound.</p>
            <p>Hold your breath during the {finalPattern[1]}-second silence.</p>
            <p>Exhale during the {finalPattern[2]}-second sound.</p>
            <p>Hold your breath during the {finalPattern[3]}-second silence.</p>
            <p>...and repeat! </p>
        <audio id="player" controls src={props.audioSrc}></audio> </div>
        <div className="col-3"></div> 
        </div>
)
        }
    else {
        let finalPattern = props.audioStatusDisplay.pattern.split("-");
        return (
        <div className="container-sm col-xl-10 col-xxl-8 py-4 px-8">
        <div className="p-4 align-items-center rounded-4">
            <p>Below is your {props.audioStatusDisplay.duration}-minute guided {props.audioStatusDisplay.pattern} breathing with the {props.audioStatusDisplay.sound} sound.</p>
            <p className="fw-bold"> How it works: </p>
            <p>Inhale during the {finalPattern[0]}-second sound.</p>
            <p>Hold your breath during the {finalPattern[1]}-second silence.</p>
            <p>Exhale during the {finalPattern[2]}-second sound.</p>
            <p>Hold your breath during the {finalPattern[3]}-second silence.</p>
            <p>...and repeat! </p>
            <audio controls src={props.audioSrc}></audio>
        </div> </div>)
        }
    };

export default AudioDisplay;

