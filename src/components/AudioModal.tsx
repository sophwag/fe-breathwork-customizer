import React from "react";
import AudioDisplay from "./AudioDisplay";
import "./AudioModal.css";

interface propConfig {
  changeModal: any;
  audioStatusDisplay: any;
  audioSrc: any;
}

const AudioModal = (props: propConfig) => {
    return (
    <div className="modalBackground">
      <div className="modalContainer rounded-4">
        <div className="titleCloseButton">
          <button className="black" onClick={() => props.changeModal(false)}> X </button>
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