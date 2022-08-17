import React from 'react';
import './App.css';
import {useState} from "react";
import axios from "axios";
import CustomSoundForm from "./components/CustomSoundForm";
import PreFilledSounds from "./components/PreFilledSounds";
import AudioModal from "./components/AudioModal";


function App() {

  interface audioConfig {
    status?: string;
    selectedPattern?: string;
    customPattern?: string;
    pattern?: string;
    patternError?: string;
    sound?: string;
    duration?: string | number;
    durationError?: string;
  }

  const [audioStatusDisplay, setAudioStatusDisplay] = useState<audioConfig>({status: "idle"});
  const [audioSrc, setAudioSrc] = useState<any>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const CUSTOM_AUDIO_URL = "https://backend-breath-capstone.herokuapp.com/custom_audio"


  const getCustomAudio = (requestData: audioConfig) => {
    setAudioStatusDisplay({status: "awaiting audio"});
    setOpenModal(true);
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
        // console.log("Successfully received custom audio")
      })
      .catch((err: any) => {
        console.log(err);
        setAudioStatusDisplay({status: "failed request"});
      });
  };


  return (
    <div className="App">
      <header></header>
      {openModal && <AudioModal audioStatusDisplay={audioStatusDisplay} audioSrc={audioSrc} changeModal={setOpenModal} />}
      <section>
        <div className="container col-xl-10 col-xxl-8 px-4 py-3">
        <div className="row align-items-center g-lg-5 py-3">
          <div className="col-lg-5 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Breathwork Customizer</h1>
            <p className="col-lg-10 fs-4">Custom breathwork sessions for people who don't like counting or looking at screens. Input your preferences, or pick from the set of popular sessions, and get customized audio to guide you. </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-6 border rounded-4 shadow-lg gentlecolor">  
        <CustomSoundForm getCustomAudio={getCustomAudio} setAudioStatusDisplay={setAudioStatusDisplay} />
        </div>
    </div>
  </div>
    <PreFilledSounds getCustomAudio={getCustomAudio}></PreFilledSounds>
      </section>
    </div>
  );
}

export default App;
