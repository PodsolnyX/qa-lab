import './App.css';
import {useEffect} from "react";
import axios from "axios";

function App() {

    useEffect(() => {
        axios.get("http://localhost:5000/main?str1=abcd&str2=aaa").then(
            res => console.log(res)
        );
    }, [])

    return (
        <div className="App">
            <input id={"inputString1"}/>
            <input id={"inputString2"}/>
            <button>Отправить</button>
        </div>
    );
}

export default App;
