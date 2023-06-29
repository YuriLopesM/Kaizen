import { useState } from "react"
import { useTask } from "../../../hooks"
import { Button } from "../../Button"
import { Input } from "../../Input"
import { Container } from "./styles"

import { v4 as uuidv4 } from 'uuid'

export const TaskForm = () => {
    const [description, setDescription] = useState('')
    const { handleAddTask } = useTask()

    const onAddTask = (e: React.MouseEvent) => {
        e.preventDefault()

        if (!description) return alert('Digite uma tarefa, anotação ou lembrete!')

        handleAddTask({
            id: uuidv4(),
            description,
            isCompleted: false,
            date: new Date(),
        })

        setDescription('')
    }

    return (
        <Container>
            <Input 
                labelText="Digite uma tarefa, anotação ou lembrete"
                maxLength={80}
                styleSize="small"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button
                size="small"
                styleType="primary"
                onClick={e => onAddTask(e)}
            >
                Adicionar
            </Button>
        </Container>
    )

}