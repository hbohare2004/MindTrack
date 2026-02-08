🧠 MindTrack – Mood & Productivity Tracker

MindTrack is a simple React-based web application that helps users track their daily mood, focus sessions, and productivity patterns.
The project focuses on clean UI, meaningful frontend logic, and practical use of React Hooks.

🚀 Features

🎭 Daily Mood Tracking

Users can log their mood (Happy, Neutral, Sad)

Mood history is stored with date

⏱️ Focus Timer (Pomodoro)

25-minute focus sessions

Start, pause, and reset functionality

Tracks completed sessions and focus time

📊 Productivity Summary

Daily focus minutes

Number of focus sessions completed

🧠 Smart Insights

Identifies the most frequent mood

Provides simple productivity feedback based on focus time

💾 Persistent Data

Mood data stored using localStorage

Data remains after page refresh

🛠️ Tech Stack

Frontend: React (Vite)

Language: JavaScript (ES6+)

Styling: Plain CSS

State Management: React Hooks (useState, useEffect)

Storage: Browser LocalStorage





Project Structure

src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ MoodSelector.jsx
 │   ├─ MoodHistory.jsx
 │   ├─ FocusTimer.jsx
 │   ├─ SummaryCard.jsx
 │   ├─ StatsCard.jsx
 │   └─ Insights.jsx
 ├─ pages/
 │   └─ Dashboard.jsx
 ├─ utils/
 │   └─ storage.js
 ├─ App.jsx
 └─ main.jsx
