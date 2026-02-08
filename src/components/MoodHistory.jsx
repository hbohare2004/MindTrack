const EMOJI_MAP = {
  Happy: "😊",
  Excited: "🤩",
  Calm: "😌",
  Neutral: "😐",
  Sad: "😔",
  Stressed: "😤",
};

function MoodHistory({ moods, onClear }) {
  if (moods.length === 0) {
    return (
      <div className="glass-card mood-history">
        <div className="mood-history__empty">
          <div className="mood-history__empty-icon">📝</div>
          <p className="mood-history__empty-text">
            No moods recorded yet. Pick one above!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card mood-history">
      <div className="mood-history__header">
        <h3 className="mood-history__title">Mood History</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="mood-history__count">{moods.length} entries</span>
          {onClear && (
            <button className="clear-btn" onClick={onClear}>
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      <ul className="mood-history__list">
        {moods.map((mood, index) => (
          <li className="mood-entry" key={index}>
            <span className="mood-entry__emoji">
              {mood.emoji || EMOJI_MAP[mood.mood] || "🙂"}
            </span>
            <div className="mood-entry__info">
              <div className="mood-entry__mood">{mood.mood}</div>
              <div className="mood-entry__date">{mood.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoodHistory;
