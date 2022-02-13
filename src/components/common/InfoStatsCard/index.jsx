import React from 'react';

export default function InfoStatsCard({ qty, text }) {
  return (
    <div className="info-stats__card">
      <h3>{qty}</h3>
      <p>{text}</p>
    </div>
  );
}
