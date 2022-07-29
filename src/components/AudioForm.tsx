// import { useState } from "react";

const AudioForm = (props: any) => {
    const getDict = () => {
        props.getDictCallback();
    };
    const getStaticSound = () => {
        props.getStaticSoundCallback();
    };
    return (
        <div>
            <button onClick={getDict}>GET DICT!</button>
            <button onClick={getStaticSound}>GET AUDIO!</button>
        </div>
    );
    };

// const defaultAudio = {
//     name: "",
//     country: "",
//     team: "",
//     handsome: true,
//   };
  
//   const AudioForm = (props) => {
//     const [formData, setFormData] = useState(defaultDriver);
  
//     const onFormChange = (event) => {
//       const stateName = event.target.name;
//       const inputValue = event.target.value;
//       // console.log(stateName);
//       // console.log(inputValue);
  
//       const newFormData = { ...formData };
//       newFormData[stateName] = inputValue;
  
//       setFormData(newFormData);
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
  
//       props.addDriverCallback(formData);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={onFormChange}
//         />
//         <label htmlFor="country">Country</label>
//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={onFormChange}
//         />
//         <label htmlFor="team">Team</label>
//         <input
//           type="text"
//           name="team"
//           value={formData.team}
//           onChange={onFormChange}
//         />
//         <input type="submit" value="Add Driver!" />
//       </form>
//     );
//   };
  
//   export default DriverForm;

export default AudioForm;