import React from "react";
import "../app/globals.css";
import { Task } from "@/utils/data-types";

const lowPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 9l7 7 7-7" />
</svg>
const mediumPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10h14" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14h14" />
</svg>
const highPriorityIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
</svg>

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
        <div className="flex gap-2">
            <div>{myTask.id}</div>
            {myTask.priority === 'high' && <div>{lowPriorityIcon}</div>}
            {myTask.priority === 'medium' && <div>{mediumPriorityIcon}</div>}
            {myTask.priority === 'low' && <div>{highPriorityIcon}</div>}
            {/* <div>{myTask.priority}</div> */}
        </div>
        <div className="">{myTask.points}</div>
      </div>
    </div>
  );
};

export default Card;
