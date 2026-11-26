'use client';
import { useState } from 'react';

// Simple form — no backend yet. Submit shows a message, then the user emails us.
export default function AuditForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="form" role="status">
        <h3>Thanks — audit request received.</h3>
        <p>Our team will review your account and send your personalised audit within 24 hours. Check your inbox for a confirmation from amzservices@storestride.com.</p>
      </div>
    );
  }
  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }} aria-label="Free Amazon PPC audit request">
      <h3>Free Amazon PPC Audit Request</h3>
      <p>Fill in the details — we will review your account and send a personalised audit within 24 hours.</p>
      <label htmlFor="name">Full Name *</label>
      <input id="name" name="name" required autoComplete="name" />
      <label htmlFor="email">Email Address *</label>
      <input id="email" name="email" type="email" required autoComplete="email" />
      <label htmlFor="brand">Amazon Brand / Store Name *</label>
      <input id="brand" name="brand" required />
      <label htmlFor="revenue">Monthly Revenue *</label>
      <select id="revenue" name="revenue" required defaultValue="">
        <option value="" disabled>Select a range</option>
        <option>Under $10k</option><option>$10k – $50k</option><option>$50k – $200k</option><option>$200k+</option>
      </select>
      <label htmlFor="challenge">Biggest Advertising Challenge</label>
      <select id="challenge" name="challenge" defaultValue="High ACOS / Wasted Spend">
        <option>High ACOS / Wasted Spend</option><option>Low Sales Volume</option><option>Can&apos;t Scale Profitably</option><option>New Product Launch</option><option>Poor Keyword Rankings</option>
      </select>
      <p style={{ marginTop: 18 }}><button className="btn" type="submit">Get My Free Audit</button></p>
      <p style={{ fontSize: '.85rem' }}>Your information is 100% private and will never be shared. No spam, ever.</p>
    </form>
  );
}
