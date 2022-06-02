import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [rate, setRate] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://api.monobank.ua/bank/currency")
        .then((res) => res.json())
        .then((data) => data.slice(0, 3))
        .then((data) => setRate(data))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header state={rate} />
      <Main state={rate} />
    </div>
  );
}

export default App;
