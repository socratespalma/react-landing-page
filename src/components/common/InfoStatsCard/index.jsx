import React from 'react';

export default function InfoStatsCard({ stat }) {
  return (
    <div className="info-stats__card">
      <h3>{stat.qty}</h3>
      <p>{stat.text}</p>
    </div>
  );
}
