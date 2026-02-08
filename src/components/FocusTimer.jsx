import { useEffect, useState } from "react";

const PRESETS = [5, 15, 25, 45, 60];

function FocusTimer({ onSessionComplete }) {

  const [duration, setDuration] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setIsRunning(false);
          onSessionComplete(duration);
          return duration * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, duration]);

  const selectPreset = (mins) => {
    if (isRunning) return;
    setDuration(mins);
    setSecondsLeft(mins * 60);
  };

  const handleCustomInput = (e) => {
    if (isRunning) return;
    const val = Math.max(1, Math.min(180, Number(e.target.value) || 1));
    setDuration(val);
    setSecondsLeft(val * 60);
  };

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="glass-card focus-timer">
      <h2 className="focus-timer__title">Focus Timer</h2>

      <div className="focus-timer__presets">
        {PRESETS.map((mins) => (
          <button
            key={mins}
            className={`focus-timer__preset ${mins === duration ? "focus-timer__preset--active" : ""}`}
            onClick={() => selectPreset(mins)}
            disabled={isRunning}
          >
            {mins}m
          </button>
        ))}
        <div className="focus-timer__custom">
          <input
            type="number"
            className="focus-timer__input"
            value={duration}
            onChange={handleCustomInput}
            min="1"
            max="180"
            disabled={isRunning}
          />
          <span className="focus-timer__input-label">min</span>
        </div>
      </div>

      <div className="focus-timer__display">{formatTime()}</div>

      <div className="focus-timer__controls">
        <button className="focus-timer__btn focus-timer__btn--start" onClick={() => setIsRunning(true)} disabled={isRunning}>▶</button>
        <button className="focus-timer__btn focus-timer__btn--pause" onClick={() => setIsRunning(false)} disabled={!isRunning}>⏸</button>
        <button
          className="focus-timer__btn focus-timer__btn--reset"
          onClick={() => {
            setIsRunning(false);
            setSecondsLeft(duration * 60);
          }}
        >
          ↺
        </button>
      </div>
    </div>
  );
}

export default FocusTimer;
