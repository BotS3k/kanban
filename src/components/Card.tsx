import React from "react";
import "../app/globals.css";
import { Task } from "@/utils/task-types";

// const Card = ({ title, id, points }: {
//     title: string,
//     id: string;
//     points: number
// }) => {
const Card = ({task}: {task: Task}) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50">
      <div className="text-base font-semibold py-2">
        {task.title}
      </div>
      <div className="flex gap-4 justify-between py-2 text-gray-700">
        <div>{task.id}</div>
        <div className="">{task.points}</div>
      </div>
    </div>
  );
};

export default Card;
