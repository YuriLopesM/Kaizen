import { useEffect } from "react"
import { TaskForm, TaskWrapper } from "../../components"
import { useHeaderTitle, useTask } from "../../hooks"
import { Container } from "./styles"

export const Tasks = () => {
    const { handleChangeTitle } = useHeaderTitle()

    const { 
        tasks
    } = useTask()

    useEffect(() => {
        handleChangeTitle('Tarefas e Anotações')
    }, [])

    return (
        <Container>
            <TaskForm />
            <TaskWrapper 
                tasks={tasks} 
            />
        </Container>
    )
}