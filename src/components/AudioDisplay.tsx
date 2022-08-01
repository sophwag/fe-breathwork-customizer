// import { useState } from "react";

const AudioDisplay = (props: any) => {
    return (
        <div>
            {/* <p>Below is your {props.dictDisplay.duration} minute guided {props.dictDisplay.pattern} breathing with {props.dictDisplay.sound} sound.</p> */}
            <p>Your guided audio file is below.</p>
            <audio controls src={props.src}></audio>
        </div>
        
    );
    };

export default AudioDisplay;