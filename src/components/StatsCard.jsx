function StatsCard({ title, value }) {
  return (
    <div className="glass-card stats-card">
      <p className="stats-card__title">{title}</p>
      <h2 className="stats-card__value">{value}</h2>
    </div>
  );
}

export default StatsCard;
