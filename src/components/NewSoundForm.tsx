import { useState } from "react";

    const defaultAudio: any = {
    // durations: "",
    pattern: "",
    sound: "",
    duration: ""};

    const NewSoundForm = (props:any) => {
        const [formData, setFormData] = useState(defaultAudio);
    
        const onFormChange = (event: any) => {
        const stateName = event.target.name;
        const inputValue = event.target.value;
        console.log(stateName);
        console.log(inputValue);
    
        const newFormData = { ...formData };
        newFormData[stateName] = inputValue;
    
        setFormData(newFormData);
        };
    
        const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData)
        props.getCustomAudioCallback(formData);
        };
    
        return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="sound">Choose a type of sound:</label>
            <select name="sound" value={formData.name} onChange={onFormChange}>
                <option value="test">test</option>
                <option value="synth">synth</option>
                <option value="piano">piano</option>
            </select>
            <label htmlFor="pattern"> Breathing Pattern</label>
            <input
            type="text"
            name="pattern"
            value={formData.name}
            onChange={onFormChange}
            />
            <label htmlFor="duration">Duration</label>
            <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={onFormChange}
            />
            {/* <label htmlFor="durations">Length (between 0 and 10 minutes):</label>
            <input type="range" id="durations" name="durations" min="0" max="10" value={formData.name}
            onChange={onFormChange}></input> */}

            <input type="submit" value="Get custom audio!" />
            
        </form>
        );
    };


export default NewSoundForm;