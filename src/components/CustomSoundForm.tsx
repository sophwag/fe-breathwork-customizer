import { useState } from "react";

const defaultAudio: any = {
    // durations: "",
    selectedPattern: "",
    customPattern: "",
    pattern: "",
    patternError: "",
    sound: "test",
    duration: "",
    durationError: "",
};

const CustomSoundForm = (props:any) => {
    const [formData, setFormData] = useState(defaultAudio);

    const onFormChange = (event: any) => {
        const stateName = event.target.name;
        const inputValue = event.target.value;
        // console.log(stateName);
        // console.log(inputValue);

        const newFormData = { ...formData };
        newFormData[stateName] = inputValue;
        newFormData["durationError"] = "";
        newFormData["patternError"] = "";
        // tracking which of the radio buttons is selected
        if (stateName === "pattern") {
            newFormData["selectedPattern"] = event.target.id;
        }

        setFormData(newFormData);
    };


    const onOtherPatternInputChange = (event: any) => {
        const inputValue = event.target.value;
        // console.log(inputValue);

        const newFormData = { ...formData };
        newFormData["customPattern"] = inputValue;
        if (formData["selectedPattern"] === "other") {
            newFormData["pattern"] = inputValue;
        };
        setFormData(newFormData);
        }
    
    const validatePatternInput = () => {
        if (!formData.pattern) {
            return false
        }
        let dash_count = 0
        let i = 0
        let s = formData.pattern
        while (dash_count < 4 && i < (formData.pattern.length-1)) {
            if (i === 0) {
                if (isNaN(s[i])) {
                    return false
                }
                else {
                    i += 1
                }
            }
            else if (s[i] === "-") {
                if (isNaN(s[i-1]) || isNaN(s[i+1])) {
                    return false
                }
                dash_count += 1
                i += 1
            }
            else if (!isNaN(s[i])) {
                i += 1
            }
            else {
                return false
            };
            };
        
        if (isNaN(s[s.length-1])) {
            return false
        }

        if (dash_count === 3 && i === (formData.pattern.length - 1)) {
            return true
        }
        else {
            return false
        }    
        };

    const validateDurationInput = () => {
        if (!formData.duration || isNaN(formData.duration)) {
            return false
        }
        else if (formData.duration.includes(".") || Number(formData.duration) === 0 || Number(formData.duration) > 20) {
            return false
        }
        else {
            return true
        };
        };

    const validateInput = () => {
        let duration_error_msg = "";
        let pattern_error_msg = "";

        let durationValid = validateDurationInput();
        if (!durationValid) {
            duration_error_msg = "Duration must be a whole number between 1 - 20";
        };

        let patternValid = validatePatternInput();
        if (!patternValid) {
            pattern_error_msg = "Pattern must be written as X-X-X-X, such as 4-7-8-0";
        };

        if (duration_error_msg || pattern_error_msg) {
            const newFormData = { ...formData };
            newFormData["durationError"] = duration_error_msg;
            newFormData["patternError"] = pattern_error_msg;
            setFormData(newFormData);
            props.setAudioStatusDisplay({status: "idle"});
            return false;
        };

        return true;
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const isInputValid = validateInput();
        if (isInputValid) {
            props.getCustomAudioCallback(formData);
            }
    };

    return (
    <form onSubmit={handleSubmit}>

        <label htmlFor="sound">Choose a type of sound </label>
        <select name="sound" value={formData.name} onChange={onFormChange}>
            <option value="test">test</option>
            <option value="synth">synth</option>
            <option value="piano">piano</option>
        </select>

        <p></p>
        <label htmlFor="duration">Pick your duration (in minutes, 1-20) </label>
        <input
        type="text"
        name="duration"
        value={formData.duration}
        onChange={onFormChange}
        />
        <div>{formData.durationError}</div>

        <p></p>
        <label htmlFor="patterns"> Pick a breathing pattern</label>

        <p></p>
        <input
        type="radio"
        name="pattern"
        id="box"
        value="4-4-4-4"
        onClick={onFormChange}
        />
        <label htmlFor="box">Box Breathing (4-4-4-4)</label>
        
        <p></p>
        <input
        type="radio"
        name="pattern"
        id="resonant"
        value= "6-0-6-0"
        onClick={onFormChange}
        />
        <label htmlFor="resonant">Resonant (6-0-6-0) </label>

        <p></p>
        <input
        type="radio"
        name="pattern"
        id="relaxation"
        // value={formData.pattern}
        value="4-7-8-0"
        onClick={onFormChange}
        />
        <label htmlFor="relaxation">Relaxation (4-7-8-0) </label>

        <p></p>
        <input
        type="radio"
        name="pattern"
        id="other"
        value={formData.customPattern}
        onClick={onFormChange}
        />
        <label htmlFor="other">Other: select your own </label>
        <input id="inputother" type="text" name="otherPattern" onChange={onOtherPatternInputChange}></input>
        <p></p>

        {/* <label htmlFor="pattern"> Breathing Pattern</label>
        <input
        type="text"
        name="pattern"
        value={formData.pattern}
        onChange={onFormChange}
        /> */}
        <div>{formData.patternError}</div>
        <p></p>
       
        {/* <label htmlFor="durations">Length (between 0 and 10 minutes):</label>
        <input type="range" id="durations" name="durations" min="0" max="10" value={formData.name}
        onChange={onFormChange}></input> */}

        <input type="submit" value="Get custom audio!" />
        
    </form>
    );
};


export default CustomSoundForm;