'use client';
import { useState } from 'react';

// Profit simulator — move the sliders and watch what better ACOS is worth.
// Same maths we use on client accounts: at the same sales, lower ACOS = less spend.
export default function ProfitSimulator() {
  const [spend, setSpend] = useState(5000);
  const [acosNow, setAcosNow] = useState(35);
  const [acosTarget, setAcosTarget] = useState(20);
  const sales = acosNow > 0 ? (spend / acosNow) * 100 : 0;
  const newSpend = (sales * acosTarget) / 100;
  const saved = Math.max(0, spend - newSpend);
  const pct = spend > 0 ? Math.min(100, (saved / spend) * 100) : 0;
  return (
    <div className="grid grid-2">
      <div className="form">
        <h3>Your numbers</h3>
        <label>Monthly ad spend — ${spend.toLocaleString()}
          <input type="range" min={500} max={50000} step={500} value={spend} onChange={(e) => setSpend(Number(e.target.value))} />
        </label>
        <label>Your ACOS now — {acosNow}%
          <input type="range" min={10} max={80} step={1} value={acosNow} onChange={(e) => setAcosNow(Number(e.target.value))} />
        </label>
        <label>Target ACOS — {acosTarget}%
          <input type="range" min={5} max={60} step={1} value={acosTarget} onChange={(e) => setAcosTarget(Number(e.target.value))} />
        </label>
        <p>Ad-attributed sales at your current ACOS: <b>${Math.round(sales).toLocaleString()}/mo</b></p>
      </div>
      <div className="form" style={{ background: 'var(--navy)', borderColor: 'var(--navy)' }}>
        <h3 style={{ color: '#fff' }}>What you could keep</h3>
        <p className="case-metric" style={{ fontSize: '2.4rem' }}>${Math.round(saved).toLocaleString()} / month</p>
        <p style={{ color: '#CDE3EC' }}>That&apos;s <b style={{ color: '#fff' }}>${Math.round(saved * 12).toLocaleString()} a year</b> — same sales, just less wasted spend.</p>
        <div style={{ background: 'rgba(255,255,255,.15)', borderRadius: 10, height: 18, overflow: 'hidden' }}>
          <div style={{ width: `${100 - pct}%`, background: '#C0392B', height: '100%' }} />
        </div>
        <p style={{ color: '#CDE3EC', fontSize: '.9rem' }}>Your spend now: ${spend.toLocaleString()}</p>
        <div style={{ background: 'rgba(255,255,255,.15)', borderRadius: 10, height: 18, overflow: 'hidden' }}>
          <div style={{ width: `${100 - pct}%`, background: '#F3952D', height: '100%' }} />
        </div>
        <p style={{ color: '#CDE3EC', fontSize: '.9rem' }}>Your spend at {acosTarget}% ACOS: ${Math.round(newSpend).toLocaleString()}</p>
        <p><a className="btn" href="/contact">Get My Free Audit →</a></p>
      </div>
    </div>
  );
}
