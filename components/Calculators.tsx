'use client';
import { useState } from 'react';

// Free tools, Olifant-style — real maths, no made-up numbers.
export default function Calculators() {
  const [spend, setSpend] = useState(1000);
  const [sales, setSales] = useState(5000);
  const acos = spend > 0 && sales > 0 ? (spend / sales) * 100 : 0;
  const roas = spend > 0 ? sales / spend : 0;
  const [totalSales, setTotalSales] = useState(12000);
  const tacos = totalSales > 0 ? (spend / totalSales) * 100 : 0;
  return (
    <div className="grid grid-2">
      <div className="form">
        <h3>ACOS &amp; ROAS Calculator</h3>
        <label>Ad spend ($)<input type="number" min={0} value={spend} onChange={(e) => setSpend(Number(e.target.value))} /></label>
        <label>Ad-attributed sales ($)<input type="number" min={0} value={sales} onChange={(e) => setSales(Number(e.target.value))} /></label>
        <p style={{ marginTop: 14 }}><b>ACOS: {acos.toFixed(1)}%</b><br /><b>ROAS: {roas.toFixed(2)}x</b></p>
        <p>Lower ACOS is better — but judge it against your margin, not a random benchmark.</p>
      </div>
      <div className="form">
        <h3>TACOS Calculator</h3>
        <label>Ad spend ($)<input type="number" min={0} value={spend} onChange={(e) => setSpend(Number(e.target.value))} /></label>
        <label>Total sales — ads + organic ($)<input type="number" min={0} value={totalSales} onChange={(e) => setTotalSales(Number(e.target.value))} /></label>
        <p style={{ marginTop: 14 }}><b>TACOS: {tacos.toFixed(1)}%</b></p>
        <p>TACOS shows what ads really cost you across the whole account — the number we optimise against.</p>
      </div>
    </div>
  );
}
