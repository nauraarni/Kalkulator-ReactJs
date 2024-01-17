import React, { useState } from "react";
import "./App.css";

function App() {
  const [biner, setBiner] = useState("");
  const [konversi, setKonversi] = useState("desimal"); 
  const [hasil, setHasil] = useState(null);

  const changeBiner = (e) => {
    const value = e.target.value;
    setBiner(value);
  };

  const changeKonversi = (e) => {
    setKonversi(e.target.value); 
  };

  const pilihKonversi = () => {
    if (konversi === "desimal") {
      setHasil(parseInt(biner, 2) || null);
    } else if (konversi === "oktal") {
      setHasil(parseInt(biner, 2).toString(8) || null);
    } else if (konversi === "heksadesimal") {
      setHasil(parseInt(biner, 2).toString(16).toUpperCase() || null);
    }
  };

  return (
    <div className="App">
      <h1>Konversi Bilangan Biner</h1>
      <div>
        <label>Biner:</label>
        <input
          type="number"
          value={biner}
          onChange={(e) => changeBiner(e)}
        />
      </div>
      <div>
        <label>Pilih Konversi:</label>
        <select
          value={konversi}
          onChange={(e) => changeKonversi(e)}
        >
          <option value="desimal">Desimal</option>
          <option value="oktal">Oktal</option>
          <option value="heksadesimal">Heksadesimal</option>
        </select>
      </div>
      <button onClick={pilihKonversi}>Konversi</button>
      {hasil !== null && (
        <div>
          <h2>Hasil Konversi:</h2>
          <p>{hasil}</p>
        </div>
      )}
    </div>
  );
}

export default App;
