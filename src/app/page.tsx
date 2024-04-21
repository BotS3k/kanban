import Image from "next/image";
import Card from "@/components/Card";
import {tasks} from "../utils/data-types";


export default function Home() {

  return (<div className=''>
     {tasks.map((task) => <Card myTask={task}/>)}
    
    </div>)
}
   