import React from 'react';
import './App.css';
import {useState} from "react";
// import {useEffect} from "react";
import axios from "axios";
// import AudioDisplay from "./components/AudioDisplay";
import CustomSoundForm from "./components/CustomSoundForm";
import PreFilled from "./components/PreFilled";
import AudioModal from "./components/AudioModal";




function App() {
  const [audioStatusDisplay, setAudioStatusDisplay] = useState<any>({status: "idle"});
  const [audioSrc, setAudioSrc] = useState("");
  const [openModal, setOpenModal] = useState(false);


  const CUSTOM_AUDIO_URL = "https://backend-breath-capstone.herokuapp.com/custom_audio"

  const getCustomAudio = (requestData: any) => {
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
      {openModal && <AudioModal audioStatusDisplay={audioStatusDisplay} audioSrc={audioSrc} changeModal={setOpenModal} />}
      <section>
        <div className="container col-xl-10 col-xxl-8 px-4 py-4">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-5 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Breathwork Customizer</h1>
            <p className="col-lg-10 fs-4">Input your preferences for sound, duration, and breathing pattern, and get a customized guided breathing session. </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-6 border rounded-3 bg-light">  
        <CustomSoundForm getCustomAudio={getCustomAudio} setAudioStatusDisplay={setAudioStatusDisplay} />
        </div>
    </div>
  </div>
  {/* <AudioDisplay audioStatusDisplay={audioStatusDisplay} audioSrc={audioSrc} /> */}
  <PreFilled getCustomAudio={getCustomAudio}></PreFilled>
      </section>
    </div>
  );
}

export default App;
