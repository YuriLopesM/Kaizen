import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks";

import { v4 as uuidv4 } from 'uuid';

export interface Task {
    id: string;
    description: string;
    date: Date;
    isCompleted: boolean;
}

interface TaskContextData {
    tasks: Task[];
    tasksSummary: Task[];
    handleAddTask: (task: Task) => void;
    handleDeleteTask: (id: string) => void;
    handleCheck: (id: string) => void;
}

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData);

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useLocalStorage<Task[]>('tasks:kaizen', []);

    const tasksSummary = tasks
        .filter(task => !task.isCompleted)
        .slice(0, 2);

    const handleDeleteTask = (id: string) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const handleAddTask = (task: Task) => {
        const newTask = {
            ...task,
            id: uuidv4(),
        }

        setTasks([...tasks, newTask]);
    }

    const handleCheck = (id: string) => {
        const newTasks = tasks.map(el => el.id === id ? { ...el, isCompleted: !el.isCompleted } : el);
        setTasks(newTasks);
    }

    return (
        <TaskContext.Provider
            value={{
                tasks,
                tasksSummary,
                handleAddTask,
                handleDeleteTask,
                handleCheck,
            }}>
            {children}
        </TaskContext.Provider>
    )

};