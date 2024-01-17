import React, {useState} from "react";
import "./App.css";

function App() {
  const [oktal, setOktal] = useState('');
  const [konversi, setKonversi] = useState("desimal");
  const [hasil, setHasil] = useState(null);

  const changeOktal = (e) => {
    const value = e.target.value;
    setOktal(value);
  };

  const changeKonversi = (e) => {
    setKonversi(e.target.value);
  };

  const pilihKonversi = () => {
    if (konversi === "desimal") {
      setHasil(parseInt(oktal, 8) || null);
    } else if (konversi === "biner") {
      setHasil(parseInt(oktal, 8).toString(2) || null);
    } else if (konversi === "heksadesimal") {
      setHasil(parseInt(oktal, 8).toString(16).toUpperCase() || null);
    }
  };

  return (
    <div className="App">
      <h1>Konversi Bilangan Oktal</h1>
      <div>
        <label>Oktal:</label>
        <input
          type="number"
          value={oktal}
          onChange={(e) => changeOktal(e)}
        />
      </div>
      <div>
        <label>Pilih Konversi:</label>
        <select
          value={konversi}
          onChange={(e) => changeKonversi(e)}
        >
          <option value="desimal">Desimal</option>
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
