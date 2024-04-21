import React from "react";
import "../app/globals.css";
import { Task } from "@/utils/data-types";

// const Card = ({ title, id, points }: {
//     title: string,
//     id: string;
//     points: number
// }) => {
const Card = ({myTask}: {myTask: Task}) => {
  return (
    <div className="border rounded-lg px-2 m-2 bg-gray-50 w-60">
      <div className="text-base font-base py-2">
        {myTask.title}
      </div>
      <div className="flex gap-4 justify-between py-2 text-gray-700 text-sm">
        <div>{myTask.id}</div>
        <div className="">{myTask.points}</div>
      </div>
    </div>
  );
};

export default Card;
