import React from 'react';
import './App.css';
import {useState} from "react";
// import {useEffect} from "react";
import axios from "axios";
// import AudioForm from "./components/AudioForm";
import AudioDisplay from "./components/AudioDisplay";
import CustomSoundForm from "./components/CustomSoundForm";

function App() {
  const [audioStatusDisplay, setAudioStatusDisplay] = useState<any>({status: "idle"});
  const [soundDisplay, setSoundDisplay] = useState<any>([]);
  const [src, setSrc] = useState("");

  const CUSTOM_AUDIO_URL = "https://backend-breath-capstone.herokuapp.com/custom_audio"

  const getCustomAudio = (request_data: any) => {
    setAudioStatusDisplay({status: "awaiting audio"});
    axios({
      url: CUSTOM_AUDIO_URL,
      method: "get",
      params: request_data,
      responseType: "blob",
    })
      .then((res: any) => {
        setSrc(URL.createObjectURL(res.data));
        const newAudio = res.data;
        setSoundDisplay(newAudio);
        setAudioStatusDisplay(request_data);
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
        <CustomSoundForm getCustomAudioCallback={getCustomAudio} audioStatusDisplay={audioStatusDisplay} setAudioStatusDisplay={setAudioStatusDisplay} />
        <AudioDisplay audioStatusDisplay={audioStatusDisplay} soundDisplay={soundDisplay} src={src} />
      </section>
    </div>
  );
}

export default App;
