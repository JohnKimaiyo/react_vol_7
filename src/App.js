import React from "react";
import "./App.css";
import BookList from "./component/BookList";
import Navbar from "./component/Navbar";
import ThemeToggle from "./component/ThemeToggle";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
