import Image from "next/image";
import Card from "@/components/Card";
import {Task} from "../utils/task-types";


export default function Home() {

  const task: Task = {
    title: 'this is a task',
    id: 'this is id',
    points: 5
  }  

  return (<div className=''><Card task={task}/></div>)
}
   