// import 'bootstrap/dist/css/bootstrap.min.css';
import './PreFilled.css';

interface propConfig {
  getCustomAudio: any;
}


const PreFilled = (props: propConfig) => {
    const handleClickSleep = (event: any) => {
        console.log("It clicked")
        let prefilledData = {
          sound: "airy",
          duration: "3",
          pattern: "4-7-8-0",
          selectedPattern: "relaxation"
        }
        props.getCustomAudio(prefilledData)
    };

    const handleClickFocus = (event: any) => {
      console.log("It clicked")
      let prefilledData = {
        sound: "piano",
        duration: "2",
        pattern: "4-4-4-4",
        selectedPattern: "box"
      }
      props.getCustomAudio(prefilledData)
  };

  const handleClickBalance = (event: any) => {
    console.log("It clicked")
    let prefilledData = {
      sound: "rain",
      duration: "4",
      pattern: "6-0-6-0",
      selectedPattern: "resonant"
    }
    props.getCustomAudio(prefilledData)
};

    return (
        // source is https://getbootstrap.com/docs/5.2/examples/features/ 
        <div className="container px-4 py-3" id="custom-cards">
          <h2 className="pb-2 border-bottom sectionTitle display-6 fw-bold">Popular sessions</h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch justify-content-center g-4 py-3">

              <div className="col justify-content-center align-items-center">
                  <div onClick={handleClickSleep} className="clickableCard card text-center card-cover overflow-hidden rounded-4 shadow-lg justify-content-center align-items-center">
                    <div className="d-flex flex-column p-5 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Fall asleep</h2>
                    <div className="card-body text-white text-shadow-1">3 mins of 4-7-8-0</div>
                    </div>
                  </div>
              </div>

              <div className="col">
                  <div onClick={handleClickFocus} className="clickableCard card card-cover overflow-hidden rounded-4 shadow-lg">
                    <div className="d-flex flex-column p-5 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Get focused</h2>
                    <div className="card-body text-white text-shadow-1">2 mins of 4-4-4-4</div>
                    </div>
                  </div>
              </div>

              <div className="col">
                  <div onClick={handleClickBalance} className="clickableCard card card-cover overflow-hidden rounded-4 shadow-lg">
                    <div className="d-flex flex-column p-5 text-white text-shadow-1">
                    <h2 className="pt-5 mt-5 mb-4 display-6 lh-1">Find balance</h2>
                    <div className="card-body text-white text-shadow-1">4 mins of 6-0-6-0</div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    )
    };

export default PreFilled;

            /* <div className="col">
              <div onClick={handleClickSleep} className="clickableCard card card-cover h-75 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
                <div className="d-flex flex-column h-75 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Fall asleep</h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="d-flex align-items-center me-3">
                      <small>4-7-8-0</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <small> 5 mins </small>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */

