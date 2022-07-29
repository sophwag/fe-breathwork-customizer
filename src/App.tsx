import React from 'react';
import './App.css';

const URL = "https://backend-breath-capstone.herokuapp.com/test_dict"
// const getSound = () => {
//   axios
//     .get(URL)
//     .then((res) => {
//       const newDrivers = res.data.map((driver) => {
//         return {
//           id: driver.id,
//           name: driver.name,
//           country: driver.country,
//           team: driver.team,
//           cars: driver.cars,
//           handsome: driver.handsome,
//         };
//       });
//       setDrivers(newDrivers);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

function App() {
  return (
    <div className="App">
      <header> Breathwork Customizer</header>
      <section>
        <h1>APP TITLE</h1>
        <p>Customizer goes here.</p>
        <button>GET AUDIO!</button>
        {/* <button onClick={getSound}>GET AUDIO!</button> */}

      </section>
    </div>
  );
}

export default App;
