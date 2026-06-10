import AppLayout from "../app/layouts/app-layout";

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
  return (
    <AppLayout>
      <h2 className="text-4xl font-bold text-red-500">Boards</h2>
      <div style={{ display: "flex", gap: "16px" }}>
        {columns.map(({ id, title, tasks }) => (
          <div key={id}>
            <div>{title}</div>
            <div>
              {tasks.map((el, index) => (
                <div key={index}>{el}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
