import { Task } from "../../../contexts/TaskContext"
import { TaskCard } from "../Card"
import { Container } from "./styles"

interface TaskWrapperProps {
    tasks: Task[]
}

export const TaskWrapper = ({
    tasks
}: TaskWrapperProps) => {
    return (
        <Container>
            {
                tasks
                    .sort((a, b) => {
                        if (a.isCompleted && !b.isCompleted) {
                            return 1;
                        }
                        if (!a.isCompleted && b.isCompleted) {
                            return -1;
                        }
                        return 0;
                    })
                    .map(task => (
                    <TaskCard
                        task={task}
                        key={task.id}
                    />
                ))
            }
        </Container>
    )
}