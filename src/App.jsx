import React from "react";
import ReactDOM from "react-dom";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
