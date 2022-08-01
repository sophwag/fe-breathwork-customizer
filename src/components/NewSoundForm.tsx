import { useState } from "react";

    const defaultAudio: any = {
    pattern: "",
    sound: "",
    duration: ""};

    const NewSoundForm = (props:any) => {
        const [formData, setFormData] = useState(defaultAudio);
    
        const onFormChange = (event: any) => {
        const stateName = event.target.name;
        const inputValue = event.target.value;
        // console.log(stateName);
        // console.log(inputValue);
    
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
            {/* <label htmlFor="sound">Choose a type of sound:</label>
            <select id="cars" name="sound">
                <option value="Test">Test</option>
                <option value="Synth">Synth</option>
                <option value="Piano">Piano</option>
            </select> */}
            <label htmlFor="pattern"> Breathing Pattern</label>
            <input
            type="text"
            name="pattern"
            value={formData.name}
            onChange={onFormChange}
            />
            <label htmlFor="sound">Sound</label>
            <input
            type="text"
            name="sound"
            value={formData.sound}
            onChange={onFormChange}
            />
            <label htmlFor="duration">Duration</label>
            <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={onFormChange}
            />
            <input type="submit" value="Get custom audio!" />
        </form>
        );
    };


export default NewSoundForm;