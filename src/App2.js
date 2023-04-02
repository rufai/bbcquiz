import "./App.css";

import React, { useState } from "react";

function App() {
  return (
    <div>
      <A />
    </div>
  );
}

function A() {
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
    setShowB(true);
    setShowC(true);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {showB && <B text={text} />}
      {showC && <C text={text} />}
    </div>
  );
}

function B(props) {
  const { text } = props;
  return <h1>Component B - {text.toUpperCase()}</h1>;
}

function C(props) {
  const { text } = props;
  return <h1>Component C - {text.toLowerCase()}</h1>;
}

export default App;
