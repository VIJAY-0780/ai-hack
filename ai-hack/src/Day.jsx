import { useParams } from "react-router-dom";
import data from "../data/mockData.json";

export default function Day() {
  const { id } = useParams();
  const day = data.days.find(d => d.id === parseInt(id));

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Day {day.id}: {day.title}</h2>
      <p className="mt-2">{day.description}</p>
      <form className="mt-4 space-y-2">
        <input type="url" placeholder="GitHub Commit URL" className="w-full border p-2 rounded" />
        <input type="url" placeholder="LinkedIn Post URL" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Submit Proof</button>
      </form>
    </div>
  );
}
