import React from "react";
import AudioDisplay from "./AudioDisplay";
import "./AudioModal.css";

const AudioModal = (props: any) => {
    return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button onClick={() => props.changeModal(false)}> x </button>
        </div>
        <h1>...breathe...</h1>
        <div className="body">
          <AudioDisplay audioStatusDisplay={props.audioStatusDisplay} audioSrc={props.audioSrc} />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default AudioModal;