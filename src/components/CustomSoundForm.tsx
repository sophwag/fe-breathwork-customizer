import { useState } from "react";
import './CustomSoundForm.css';

interface propConfig {
    getCustomAudio: any;
    setAudioStatusDisplay:any;
}

const CustomSoundForm = (props:propConfig) => {

    const defaultAudio: any = {
        selectedPattern: "",
        customPattern: "",
        pattern: "",
        patternError: "",
        sound: "piano",
        duration: "1",
        durationError: "",
    };

    const [formData, setFormData] = useState(defaultAudio);

    const onFormChange = (event: any) => {
        const stateName = event.target.name;
        const inputValue = event.target.value;

        const newFormData = { ...formData };
        newFormData[stateName] = inputValue;
        newFormData["durationError"] = "";
        newFormData["patternError"] = "";
        // tracking whether a radio button was selected
        if (stateName === "pattern") {
            newFormData["selectedPattern"] = event.target.id;
        }
        setFormData(newFormData);
    };


    const onOtherPatternInputChange = (event: any) => {

        const inputValue = event.target.value;
        const newFormData = { ...formData };
        newFormData["customPattern"] = inputValue;
        if (formData["selectedPattern"] === "other") {
            newFormData["pattern"] = inputValue;
        };
        setFormData(newFormData);
    };
    
    const validatePatternInput = () => {

        if (!formData.pattern) {
            return false
        }
        let dash_count = 0
        let i = 0
        let s = formData.pattern
        while (dash_count < 4 && i < (s.length-1)) {
            if (i === 0) {
                if (isNaN(s[i])) {
                    return false
                }
                else {
                    i += 1
                }
            }
            else if (s[i] === " ") {
                return false
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

        if (dash_count === 3 && i === (s.length - 1)) {
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
        else if (formData.duration.includes(".") || Number(formData.duration) === 0 || Number(formData.duration) > 5) {
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
            duration_error_msg = "Duration must be a whole number between 1 - 5";
        };

        let patternValid = validatePatternInput();
        if (!patternValid) {
            pattern_error_msg = "Please select an option, and ensure pattern is written as X-X-X-X, such as 4-7-8-0";
        };

        const newFormData = { ...formData };
            newFormData["durationError"] = duration_error_msg;
            newFormData["patternError"] = pattern_error_msg;
            setFormData(newFormData);

        if (duration_error_msg || pattern_error_msg) {
            props.setAudioStatusDisplay({status: "idle"});
            return false;
        };

        return true;
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const isInputValid = validateInput();
        if (isInputValid) {
            props.getCustomAudio(formData);
            }
    };

    return (
    <form className="m-2 p-md-3" onSubmit={handleSubmit}>
        <label htmlFor="sound" className="fw-bold">Sound </label>
        <select name="sound"
        onChange={onFormChange}
        className="form-select stylized mediumInput"
        >
            <option value="piano">Piano</option>
            <option value="rain">Rain</option>
            <option value="bowl">Singing bowl</option>
            <option value="airy">Airy</option>
            <option value="synth">Synth</option>
            {/* <option value="silvia">RIP Ferrari</option> */}
        </select>

        <p></p>
        <label htmlFor="duration" className="fw-bold">Duration (in mins, 1-5) </label>
        <input 
        type="text"
        name="duration"
        value={formData.duration}
        onChange={onFormChange}
        className="form-control stylized narrowInput "
        />
        <div className="errorMessages">{formData.durationError}</div>

        <p></p>
        <label htmlFor="patterns" className="fw-bold"> Breathing pattern</label>

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
        <label htmlFor="other">Design your own (e.g., 4-2-10-0) </label>
        <input id="inputother" type="text" name="otherPattern" onChange={onOtherPatternInputChange} className="form-control stylized mediumInput "></input>
        
        <p></p>
        <div className="errorMessages">{formData.patternError}</div>

        <p></p>
        <input type="submit" value="Get custom audio" className="btn btn-outline-secondary btn-lg px-4 fw-bold stylized"/>
        
    </form>
    );
};


export default CustomSoundForm;