import { useState } from "react";
import { useLocalStorage } from "./LocalStorageProvider";

export default function SetterComponent(){
    const [input, setInput] = useState('');
    const [, setLocalStorageValue] = useLocalStorage('exampleKey');

    const handleSave = () => {
        setLocalStorageValue(input);
    };

    return (
        <div>
            <h2>Setter Component</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a value"
            />
            <button onClick={handleSave}>Save to LocalStorage</button>
        </div>
    );
}