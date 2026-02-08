
function Insights({ moods, focusMinutes }) {

  if (moods.length === 0 && focusMinutes === 0) {
    return (
      <div className="glass-card insights">
        <div className="insights__empty">
          <span className="insights__empty-icon">💡</span>
          <p className="insights__empty-text">No insights yet. Start tracking!</p>
        </div>
      </div>
    );
  }

  const moodCount = moods.reduce((acc, item) => {
    acc[item.mood] = (acc[item.mood] || 0) + 1;
    return acc;
  }, {});

  let mostFrequentMood = "—";
  if (Object.keys(moodCount).length > 0) {
    mostFrequentMood = Object.keys(moodCount)
      .reduce((a, b) => moodCount[a] > moodCount[b] ? a : b);
  }

  return (
    <div className="glass-card insights">
      <h3 className="insights__title">Insights</h3>

      <div className="insights__list">
        <div className="insights__item">
          <span className="insights__icon">🎯</span>
          <p className="insights__text">Most frequent mood: <strong>{mostFrequentMood}</strong></p>
        </div>

        {focusMinutes >= 50 && (
          <div className="insights__item insights__item--positive">
            <span className="insights__icon">💪</span>
            <p className="insights__text">You had a productive day!</p>
          </div>
        )}

        {focusMinutes < 25 && (
          <div className="insights__item insights__item--gentle">
            <span className="insights__icon">🌱</span>
            <p className="insights__text">Try focusing a bit more tomorrow</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Insights;
