'use client'
import Image from "next/image";
import Card from "@/components/Card";
import { Status, statuses, Task } from "../utils/data-types";
import React, { useEffect, useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([])

  const columns =  statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status)
      return {
        status, tasks: taskInColumn
      }
  })

  const [currentlyHoveringOver, setCurrentlyHoveringOver] = useState<Status | null>(null)

  useEffect(() => {  
    fetch('http://localhost:8000/tasks/').then((res) => res.json()).then((data) => {
        setTasks(data);
        console.log(data);
      });
  }, [currentlyHoveringOver]);


  const updateTaskFn = (task: Task) => {
    fetch(`http://localhost:8000/tasks/${task.id}`,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const updatedTasks = tasks.map((t) => {
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status) => {  
    e.preventDefault()
    setCurrentlyHoveringOver(null)
    const id = e.dataTransfer.getData("id")
    const task = tasks.find((task) => task.id === id)
    if(task){
      updateTaskFn({...task, status})
    }
  }

  
  const handleDragEnter = (status: Status) => {
    setCurrentlyHoveringOver(status);
  }

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  

  return (
    <div className="flex divide-x">
      
      {columns.map((column) => (
        <div onDragEnter={() => handleDragEnter(column.status)} onDrop={(e) => handleDrop(e, column.status)} onDragOver={(e) => e.preventDefault()}>
        <div>
          <div className="flex justify-between text-3xl p-2 font-bold text-gray-600">
            <h1 className=" capitalize">{column.status}</h1>
            {column.tasks.reduce((total, task) => total + (task?.points || 0), 0)}
          </div>
          <div className={`h-full ${currentlyHoveringOver === column.status ? 'bg-gray-200' : ''}`}>
            {column.tasks.map((task) => (<Card myTask={task} updateTask={updateTaskFn}/>))}
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
