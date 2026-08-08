import { Link } from "react-router-dom";
import data from "../data/mockData.json";

export default function Dashboard() {
  const { student } = data;
  const progress = (student.streak / student.totalDays) * 100;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Welcome, {student.name}</h2>
      <p>Current Streak: 🔥 {student.streak} days</p>
      <div className="w-full bg-gray-200 rounded mt-2">
        <div className="bg-green-500 h-2 rounded" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="mt-4">Today's Task: {student.todayTask}</p>
      <Link to="/day/12" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">
        Go to Day 12
      </Link>
    </div>
  );
}
