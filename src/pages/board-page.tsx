import { useParams } from "react-router-dom";
import AppLayout from "../app/layouts/app-layout";

const boards = [
  { id: "work", title: "Work" },
  { id: "study", title: "Study" },
  { id: "personal", title: "Personal" },
];

const columns = [
  {
    id: "todo",
    title: "To Do",
    tasks: ["Create layout", "Setup router"],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: ["Build board page"],
  },
  {
    id: "done",
    title: "Done",
    tasks: ["Init project"],
  },
];

export default function BoardPage() {
  const { boardId } = useParams();
  const board = boards.find((board) => board.id === boardId);

  if (!board) {
    return (
      <AppLayout>
        <h2>Board not found!</h2>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <h2 className="text-4xl font-bold text-red-500">{board.title}</h2>

      <div style={{ display: "flex", gap: "16px" }}>
        {columns.map(({ id, title, tasks }) => (
          <div key={id}>
            <div>{title}</div>
            <div>
              {tasks.map((task) => (
                <div key={task}>{task}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
