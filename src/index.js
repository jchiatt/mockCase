import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setResult(
      input.split("").map((c, i) => {
        return i % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
      })
    );
  }

  return (
    <div className="App">
      <h1>Spongify</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.currentTarget.value)}
        />
        <button type="submit">Make it weird</button>
      </form>
      <p>Result: {result} </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
