export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high' 

export type Task = {
    title: string,
    id: string,
    status: Status,
    priority: Priority,
    points?: number
}

export const statuses: Status[] = ["todo", 'in-progress', "done"]

export const tasks: Array<Task> = [

  {
    title: 'this is a task1',
    id: 'this is id1',
    status: 'todo',
    priority: 'low',
    points: 5
  },  
  {
    title: 'this is a task2',
    id: 'this is id2',
    status: 'in-progress',
    priority: 'medium',
    points: 5
  },  
  {
    title: 'this is a task3',
    id: 'this is id3',
    status: 'done',
    priority: 'low',
    points: 5
  },
  {
    title: 'this is a task1',
    id: 'this is id4',
    status: 'todo',
    priority: 'high',
    points: 5
  },  
  {
    title: 'this is a task2',
    id: 'this is id5',
    status: 'in-progress',
    priority: 'high',
    points: 5
  },  
  {
    title: 'this is a task3',
    id: 'this is id6',
    status: 'done',
    priority: 'medium',
    points: 5
  }  
] 
