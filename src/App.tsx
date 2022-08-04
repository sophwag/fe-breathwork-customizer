import React from 'react';
import './App.css';
import {useState} from "react";
// import {useEffect} from "react";
import axios from "axios";
import AudioDisplay from "./components/AudioDisplay";
import CustomSoundForm from "./components/CustomSoundForm";

function App() {
  const [audioStatusDisplay, setAudioStatusDisplay] = useState<any>({status: "idle"});
  const [audioSrc, setAudioSrc] = useState("");

  const CUSTOM_AUDIO_URL = "https://backend-breath-capstone.herokuapp.com/custom_audio"

  const getCustomAudio = (requestData: any) => {
    setAudioStatusDisplay({status: "awaiting audio"});
    let newRequestData = {pattern: requestData.pattern, sound: requestData.sound, duration: requestData.duration};
    axios({
      url: CUSTOM_AUDIO_URL,
      method: "get",
      params: newRequestData,
      responseType: "blob",
    })
      .then((res: any) => {
        setAudioSrc(URL.createObjectURL(res.data));
        setAudioStatusDisplay(requestData);
        console.log("Successfully received custom audio")
      })
      .catch((err: any) => {
        console.log(err);
        setAudioStatusDisplay({status: "failed request"});
      });
  };


  return (
    <div className="App">
      <header></header>
      <section>
        <h1>BREATHWORK CUSTOMIZER</h1>
        <p>Input your preferences to get a customized guided breathing session. </p>
        <CustomSoundForm getCustomAudio={getCustomAudio} setAudioStatusDisplay={setAudioStatusDisplay} />
        <AudioDisplay audioStatusDisplay={audioStatusDisplay} audioSrc={audioSrc} />
      </section>
    </div>
  );
}

export default App;
