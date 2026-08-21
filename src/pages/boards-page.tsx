import { Link } from "react-router-dom";
import AppLayout from "../app/layouts/app-layout";

const boards = [
  { id: "work", title: "Work" },
  { id: "study", title: "Study" },
  { id: "personal", title: "Personal" },
];

export default function BoardsPage() {
  return (
    <AppLayout>
      <h2 className="text-4xl font-bold text-red-500">Boards</h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {boards.map(({ id, title }) => (
          <div key={id}>
            <Link to={`/boards/${id}`}>{title}</Link>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
