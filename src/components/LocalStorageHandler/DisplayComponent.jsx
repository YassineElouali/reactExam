import { useLocalStorage } from "./LocalStorageProvider";


export default function DisplayComponent(){
    const [storedValue] = useLocalStorage('exampleKey');

    return (
        <div>
            <h2>Display Component</h2>
            <p>Stored Value: {storedValue || "No value added."}</p>
        </div>
    );

}