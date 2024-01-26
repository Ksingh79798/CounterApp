import "./App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Inc = () => {
    setCount(count + 1);
  };
  const Dec = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry, Zero limit Reached");
      setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className="container flex rounded-2xl  h-96 mx-48 my-16 max-w-xl bg-lime-100 rounded overflow-hidden shadow-xl">
      <div className="Card my-5 text-center">
        <div className="card-body">
          <h1 className="text-6xl  text-green-600 ">Counter App</h1>

          <div className="count my-5 ">
            <h2 className="count-number my-5 text-7xl "> {count}</h2>

            <button
              className="inc-btn  bg-green-500 btn-success mx-5 py-3 px-4 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={Inc}
            >
              Increment
            </button>

            <button
              className="dec-btn bg-red-500 mx-5 py-3 px-4 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={Dec}
            >
              Decrement
            </button>

            <button
              className="reset-btn mx-5 py-3 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
