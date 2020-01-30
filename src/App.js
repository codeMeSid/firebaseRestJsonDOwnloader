import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          className={"btn btn--animated btn--white"}
          onClick={() => {
            fetch("https://database-storage-1ae89.firebaseio.com/patients.json")
              .then(data => data.json())
              .then(t => {
                t = Object.values(t).map(({ name }) => ({ name }));
                var blob = new Blob([JSON.stringify(t)], {
                  type: "application/json"
                });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "patient";
                link.click();
              });
          }}
        >
          CLICK ME
        </button>
      </header>
    </div>
  );
}

export default App;
