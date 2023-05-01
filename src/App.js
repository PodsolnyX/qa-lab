import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

    const [result, setResult] = useState("");
    const [string1, setString1] = useState("");
    const [string2, setString2] = useState("");

    const onSubmit = () => {
        axios.get(`http://localhost:5000/main?str1=${string1}&str2=${string2}`).then(
            res => setResult(res.data.result)
        ).catch(
            error => setResult("Ошибка!")
        )
    }

    return (
        <div className="App">
            <h1 id={"label-result"}>Результат: {result}</h1>
            <div>
                <input id={"inputString1"} type={"text"} value={string1}
                       onChange={(event) => {setString1(event.target.value)}}/>
                <input id={"inputString2"} type={"text"} value={string2}
                       onChange={(event) => {setString2(event.target.value)}}/>
            </div>
            <div className={"btn-container"}>
                <button id={"btn-submit"} onClick={onSubmit}>Отправить</button>
            </div>
        </div>
    );
}

export default App;
