import Image from "next/image";
import Card from "@/components/Card";
import { tasks, statuses } from "../utils/data-types";

export default function Home() {

  const columns =  statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status)
      return {
        title: status, tasks: taskInColumn
      }
  })

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <h1 className="text-3xl p-2 capitalize font-bold text-gray-600">{column.title}</h1>
          {column.tasks.map((task) => <Card myTask={task}/>)}
        </div>
      ))}
    </div>
  );
}
