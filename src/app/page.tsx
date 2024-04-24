'use client'
import Image from "next/image";
import Card from "@/components/Card";
import { tasks as initialTasks, statuses, Task } from "../utils/data-types";
import { useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const columns =  statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status)
      return {
        title: status, tasks: taskInColumn
      }
  })

  const updateTaskPointsFn = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? {...t, points} : t
    })
    setTasks(updatedTasks);
  }

  const updateTaskTitleFn = (task: Task, title: string) => {
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? {...t, title} : t
    })
    setTasks(updatedTasks)
  }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  

  return (
    <div className="flex divide-x">
      
      {columns.map((column) => (
        <div>
          <div className="flex justify-between text-3xl p-2 font-bold text-gray-600">
            <h1 className=" capitalize">{column.title}</h1>
            </div>
            {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
            {column.tasks.map((task) => (<Card myTask={task} updateTaskPoints={updateTaskPointsFn} updateTaskTitle={updateTaskTitleFn}/>))}
          
        </div>
      ))}
    </div>
  );
}
