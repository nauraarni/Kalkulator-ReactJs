import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [nominal, setNominal] = useState('');
  const [bunga, setBunga] = useState('');
  const [periode, setPeriode] = useState('');
  const [hasil, setHasil] = useState(null);

  const hitungCicilan = () => {
    const nominalPinjaman = parseFloat(nominal);
    const sukuBunga = parseFloat(bunga) / 100 / 12;
    const periodeCicilan = parseFloat(periode) * 12;

    const pembayaran =
      (nominalPinjaman * sukuBunga) / (1 - Math.pow(1 + sukuBunga, -periodeCicilan));

    setHasil(pembayaran.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Hitung Cicilan Bank</h1>
      <div>
        <label>Nominal Pinjaman:</label>
        <input
          type="number"
          value={nominal}
          onChange={(e) => setNominal(e.target.value)}
        />
      </div>
      <div>
        <label>Bunga:</label>
        <input
          type="number"
          value={bunga}
          onChange={(e) => setBunga(e.target.value)}
        />
      </div>
      <div>
        <label>Periode:</label>
        <input
          type="number"
          value={periode}
          onChange={(e) => setPeriode(e.target.value)}
        />
      </div>
      <button onClick={hitungCicilan}>Hitung</button>
      {hasil !== null && (
        <div>
          <h2>Hasil:</h2>
          <p>Rp {hasil} </p>
        </div>
      )}
    </div>
  );
};

export default App;
