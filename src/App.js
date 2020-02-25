import React from "react";
import "./App.css";

function App() {
  const [val, setVal] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input value={val} onChange={e => setVal(e.target.value)} />
        <button
          className={"btn btn--animated btn--white"}
          onClick={() => {
            fetch(val)
              .then(data => data.json())
              .then(t => {
                var h = Object.values(t).map(({ name }) => ({ name }));
                console.log({ t, h: JSON.stringify(h) });
                var blob = new Blob([JSON.stringify(h)], {
                  type: "application/json"
                });
                var link = document.createElement("a");
                link.href = window.URL.createObjectURL(blob);
                link.download = "patient";
                link.click();
              })
              .catch(err => alert(err));
          }}
        >
          CLICK ME
        </button>
      </header>
    </div>
  );
}

export default App;
