import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", null, "Adop Me"),
  //   React.createElement(Pet, { name: "jax", animal: "Dog", breed: "german" }),
  //   React.createElement(Pet, { name: "So", animal: "Cat", breed: "Siemi" }),
  //   React.createElement(Pet, {
  //     name: "pepe",
  //     animal: "Bird",
  //     breed: "Ay 7aga",
  //   }),
  // ]);
  return (
    <div>
      <h1>Adopt Me</h1>
      <div className="test">
        <Pet name="Jax" animal="Dog" breed="Ay 7aga" />
        <Pet name="shre" animal="Cat" breed="Ay 7aga" />
        <Pet name="beld" animal="Birde" breed="Ay 7aga" />
      </div>
    </div>
  );
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
