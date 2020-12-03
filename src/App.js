import React from "react";
import "./App.css";

const api = {
  key: "0fe7922cb44365f6a80bd52954b3cedd",
  base: "htpps://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
