import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const tinggi = height / 100;
      const hasil = (weight / tinggi ** 2).toFixed(2);
      setBMI(hasil);

      if (hasil < 18.5) {
        setStatus(" Berat Badan Kurang");
      } else if (hasil < 24.9) {
        setStatus("Berat Badan Normal");
      } else if (hasil < 29.9) {
        setStatus("Berat Badan Berlebih");
      } else {
        setStatus("Obesitas");
      }
    } else {
      setBMI(null);
      setStatus(null);
    }
  };

  return (
    <div className="card text-center col-3">
      <div className="card-header">
        <h1>Body Mass Index</h1>
      </div>
      <label>
        Berat:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />
      <label>
        Tinggi:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <br />
      <button
        type="button"
        className="btn btn-primary"
        id="liveAlertBtn"
        onClick={calculateBMI}
      >
        Hitung
      </button>
      <br />
      <h2>BMI: {bmi}</h2>
      <div id="liveAlertPlaceholder">
        <div>
          <div className="alert alert-success alert-dismissible" role="alert">
            <div>
              <p>
                {status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
