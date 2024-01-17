import React, { useState } from 'react';
import './App.css';

function App() {
  const [hargaPembelian, setHargaPembelian] = useState('');
  const [ppn, setPpn] = useState('');
  const [diskon, setDiskon] = useState('');
  const [harga, setHarga] = useState(null);

  const hitungHarga = () => {
    const pembelian = parseFloat(hargaPembelian);
    const ppnValue = parseFloat(ppn) / 100;
    const diskonValue = parseFloat(diskon) / 100;

    const hargaSetelahPpn = pembelian + pembelian * ppnValue;
    const hargaSetelahDiskon = hargaSetelahPpn - hargaSetelahPpn * diskonValue;

    setHarga(hargaSetelahDiskon.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Hitung Harga Akhir</h1>
      <div>
        <label>Harga Awal:</label>
        <input
          type="number"
          value={hargaPembelian}
          onChange={(e) => setHargaPembelian(e.target.value)}
        />
      </div>
      <div>
        <label>PPN:</label>
        <input
          type="number"
          value={ppn}
          onChange={(e) => setPpn(e.target.value)}
        />
      </div>
      <div>
        <label>Diskon:</label>
        <input
          type="number"
          value={diskon}
          onChange={(e) => setDiskon(e.target.value)}
        />
      </div>
      <button onClick={hitungHarga}>Hitung</button>
      {harga && (
        <div>
          <h2>Harga Akhir:</h2>
          <p>Rp {harga}</p>
        </div>
      )}
    </div>
  );
}

export default App;
