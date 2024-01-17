import React, {useState} from "react";
import "./App.css";

function App() {
  const [heksadesimal, setHeksadesimal] = useState('');
  const [konversi, setKonversi] = useState("desimal");
  const [hasil, setHasil] = useState(null);

  const changeHeksadesimal = (e) => {
    const value = e.target.value;
    setHeksadesimal(value);
  };

  const changeKonversi = (e) => {
    setKonversi(e.target.value);
  };

  const pilihKonversi = () => {
    const desimalValue = parseInt(heksadesimal, 16);

    if (konversi === "oktal") {
      setHasil(desimalValue.toString(8) || null);
    } else if (konversi === "biner") {
      setHasil(desimalValue.toString(2) || null);
    } else if (konversi === "desimal") {
      setHasil(desimalValue || null);
    }
  };

  return (
    <div className="App">
      <h1>Konversi Bilangan Heksadesimal</h1>
      <div>
        <label>Heksadesimal:</label>
        <input
          type="number"
          value={heksadesimal}
          onChange={(e) => changeHeksadesimal(e)}
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
          <option value="desimal">Desimal</option>
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
