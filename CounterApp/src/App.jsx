import { useState } from "react";
import './App.css';

function Counter() {
    let [count, setCount] = useState(0);
    function IncrementCount() {
        setCount(count + 1);
    }

    function DecrementCount() {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    }

    function Reset() {
        setCount(0);
    }

    function IncrementCountFive() {
        setCount(count + 5);
    }

    function DecrementCountFive() {
        setCount(count > 5 ? count - 5 : 0);

    }

    return (
        <div className="container">
            <div>
            <div className="main">
                <div className="counterBox"><h1 className="counter">{count}</h1></div>
                
            </div>
            <div className="main">
                <h1 className="countH1">Count</h1>
                 </div>
                 <div className="main">
                      <button className="button" onClick={Reset}>Reset</button>
                 </div>
            <div className="butthons">
                <button className="button" onClick={IncrementCount}>Inc in 1</button>
                <button className="button" onClick={DecrementCount}>Dec in 1</button>
                <button className="button" onClick={IncrementCountFive}>Inc in 5</button>
                <button className="button" onClick={DecrementCountFive}>Dec in 5</button>
            </div>
            </div>
        </div>
    );
}

export default Counter;