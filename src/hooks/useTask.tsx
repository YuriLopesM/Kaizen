import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export const useTask = () => {
    return useContext(TaskContext);
};