import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">🚀 ABTalks 60‑Day Challenge</h1>
      <p className="mt-2">Build daily. Share daily. Become visible to recruiters.</p>
      <Link to="/dashboard" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">
        Start Your Journey
      </Link>
    </div>
  );
}
