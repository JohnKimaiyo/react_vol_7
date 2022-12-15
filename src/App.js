import React from "react";
import "./App.css";
import BookList from "./component/BookList";
import Navbar from "./component/Navbar";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList />
        <Navbar />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
