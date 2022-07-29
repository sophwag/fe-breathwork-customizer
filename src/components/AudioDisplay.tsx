// import { useState } from "react";

const AudioDisplay = (props: any) => {
    return (
        <div>
            <p>dict here: {props.dictDisplay.key}</p>
            <audio controls src={props.src}></audio>
        </div>
        
    );
    };

export default AudioDisplay;