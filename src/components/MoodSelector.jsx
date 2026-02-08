function MoodSelector({ onAddMood }) {

  const moods = [
    { label: "Happy", emoji: "😊" },
    { label: "Excited", emoji: "🤩" },
    { label: "Calm", emoji: "😌" },
    { label: "Neutral", emoji: "😐" },
    { label: "Sad", emoji: "😔" },
    { label: "Stressed", emoji: "😤" },
  ];

  return (
    <div className="glass-card mood-selector">
      <h2 className="mood-selector__title">How are you feeling today?</h2>

      <div className="mood-selector__grid">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className="mood-btn"
            onClick={() => onAddMood(mood.label, mood.emoji)}
          >
            <span className="mood-btn__emoji">{mood.emoji}</span>
            <span className="mood-btn__label">{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;
