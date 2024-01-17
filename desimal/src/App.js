import React, {useState} from "react";
import "./App.css";

function App() {
  const [desimal, setDesimal] = useState('');
  const [konversi, setKonversi] = useState("oktal");
  const [hasil, setHasil] = useState(null);

  const changeDesimal = (e) => {
    const value = e.target.value;
    setDesimal(value);
  };

  const changeKonversi = (e) => {
    setKonversi(e.target.value);
  };

  const pilihKonversi = () => {
    const desimalValue = parseInt(desimal, 10);

    if (konversi === "oktal") {
      setHasil(desimalValue.toString(8) || null);
    } else if (konversi === "biner") {
      setHasil(desimalValue.toString(2) || null);
    } else if (konversi === "heksadesimal") {
      setHasil(desimalValue.toString(16).toUpperCase() || null);
    }
  };

  return (
    <div className="App">
      <h1>Konversi Bilangan Desimal</h1>
      <div>
        <label>Desimal:</label>
        <input
          type="number"
          value={desimal}
          onChange={(e) => changeDesimal(e)}
        />
      </div>
      <div>
        <label>Pilih Konversi:</label>
        <select
          value={konversi}
          onChange={(e) => changeKonversi(e)}
        >
          <option value="oktal">Desimal</option>
          <option value="biner">Biner</option>
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
