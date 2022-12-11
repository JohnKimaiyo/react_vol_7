import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Title from "./component/Title";
import Myname from "./component/Mycount";
import Form from "./component/Form";
import Users from "./component/Users";
import Event from "./component/Event";
import Range from "./component/Range";
import Submit from "./component/Submit";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Fronetend Developer" />
      <Title name="Mobile Developer" />
      <Title name="Solidity Developer" />
      <Myname />
      <Form />
      <Users />
      <Range />
      <Event />
      <Submit/>
    </div>
  );
}

export default App;
