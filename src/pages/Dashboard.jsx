import { useEffect, useState } from "react";
import Header from "../components/Header";
import MoodSelector from "../components/MoodSelector";
import MoodHistory from "../components/MoodHistory";
import FocusTimer from "../components/FocusTimer";
import SummaryCard from "../components/SummaryCard";
import { getMoods, saveMoods } from "../utils/storage";
import StatsCard from "../components/StatsCard";
import Insights from "../components/Insights";


function Dashboard() {
    const [moods, setMoods] = useState([]);
    const [toast, setToast] = useState("");
    const [sessions, setSessions] = useState(0);
    const [focusMinutes, setFocusMinutes] = useState(0);


    useEffect(() => {
        setMoods(getMoods());
    }, []);

    useEffect(() => {
        saveMoods(moods);
    }, [moods]);

    const addMood = (mood, emoji) => {
        const newMood = {
            mood,
            emoji,
            date: new Date().toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMoods([newMood, ...moods]);
        showToast(`${emoji} Logged: ${mood}`);
    };

    const clearMoods = () => {
        setMoods([]);
        showToast("🗑️ History cleared");
    };

    const showToast = (message) => {
        setToast(message);
        setTimeout(() => setToast(""), 2000);
    };


    const handleSessionComplete = (minutes) => {
        setSessions((prev) => prev + 1);
        setFocusMinutes((prev) => prev + (minutes || 25));
    };


    return (
        <div className="dashboard">
            <Header />
            <MoodSelector onAddMood={addMood} />
            <div className="dashboard__row">
                <MoodHistory moods={moods} onClear={moods.length > 0 ? clearMoods : null} />
                <SummaryCard focusMinutes={focusMinutes} sessions={sessions} />
            </div>
            <FocusTimer onSessionComplete={handleSessionComplete} />
            <div className="dashboard__row">
                <StatsCard title="Total Focus Time (min)" value={focusMinutes} />
                <StatsCard title="Sessions Completed" value={sessions} />
            </div>
            <Insights moods={moods} focusMinutes={focusMinutes} />

            <div className={`toast ${toast ? "toast--visible" : ""}`}>{toast}</div>

        </div>
    );
}

export default Dashboard;
