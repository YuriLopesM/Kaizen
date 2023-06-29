import { Task } from "../../../contexts/TaskContext"
import { useTask } from "../../../hooks";
import { Actions, Checkbox, Container, DeleteButton, TextWrapper } from "./styles"

import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';

interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({
    task
}: TaskCardProps) => {
    const { 
        handleCheck,
        handleDeleteTask,
    } = useTask();
    
    const formattedDate = new Intl.DateTimeFormat('pt-BR').format(new Date(task.date));
    
    const onDeleteTask = (e: React.MouseEvent) => {
        e.preventDefault();

        if(confirm('Deseja deletar a tarefa? Essa ação é irreversível!')) {
            handleDeleteTask(task.id);
        } else return
    }

    return (
        <Container 
            $isChecked={task.isCompleted}
        >
            <TextWrapper>
                <Checkbox
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleCheck(task.id)}
                />
                <p>{task.description}</p>
            </TextWrapper>
            <Actions>
                <p>{formattedDate}</p>
                <DeleteButton onClick={(e) => onDeleteTask(e)}>
                    <Trash />
                </DeleteButton>
            </Actions>
        </Container>
    )
}