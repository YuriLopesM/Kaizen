import { Container, QuickStart, Tests } from "./styles"
import { SummaryBanner } from "../../components"

export const Dashboard = () => {
    const summaries = [{
        course: 'Frontend',
        date: new Date(),
        teacher: 'Lucas Ferreira',
        content: 'React - Aula 02',
        room: '1.10.12'
    }, {
        course: 'Frontend',
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        teacher: 'Lucas Ferreira',
        content: 'React - Aula 03',
        room: '1.10.12'
    }, {
        course: 'Redes de Computadores',
        date: new Date('2023-07-01T00:00'),
        teacher: 'Gledson',
        content: 'React - Aula 03',
        room: '1.10.12'
    }]

    return (
        <Container>
            <SummaryBanner 
                summaries={summaries}
            />
            <QuickStart></QuickStart>
            <Tests></Tests>
        </Container>
    )
}