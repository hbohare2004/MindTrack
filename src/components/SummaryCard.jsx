function SummaryCard({ focusMinutes, sessions }) {
  return (
    <div className="glass-card summary-card">
      <h3 className="summary-card__title">Today's Summary</h3>
      <div className="summary-card__grid">
        <div className="summary-card__item">
          <span className="summary-card__value">{focusMinutes}</span>
          <span className="summary-card__label">Minutes Focused</span>
        </div>
        <div className="summary-card__item">
          <span className="summary-card__value">{sessions}</span>
          <span className="summary-card__label">Sessions Completed</span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
