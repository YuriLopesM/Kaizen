import { useEffect } from "react"
import { useAuth, useHeaderTitle } from "../../hooks"
import { Container, QuickStart, NextTests, LatestTests } from "./styles"
import { SummaryBanner, QuickStartBanner, NextTestBanner, LatestTestBanner } from "../../components"

import { ReactComponent as Dollar } from '../../assets/icons/dollar.svg'
import { ReactComponent as Archive } from '../../assets/icons/archive.svg'
import { ReactComponent as Briefcase } from '../../assets/icons/briefcase.svg'
import { ReactComponent as Book } from '../../assets/icons/book.svg'
import { ReactComponent as Clock } from '../../assets/icons/clock.svg'
import { ReactComponent as Message } from '../../assets/icons/message.svg'

export const Dashboard = () => {
    const { user } = useAuth()
    const { handleChangeTitle } = useHeaderTitle()

    useEffect(() => {
        handleChangeTitle(`Bem vindo, ${user?.name}!`)
    }, [])

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
        date: new Date(new Date().setDate(new Date().getDate() + 2)),
        teacher: 'Gledson',
        content: 'React - Aula 03',
        room: '1.10.12'
    }]

    const pages = [{
        title: 'Boletos',
        icon: <Dollar />,
    }, {
        title: 'Relatórios',
        icon: <Archive />,
    }, {
        title: 'Estágios',
        icon: <Briefcase />,
    }, {
        title: 'Biblioteca',
        icon: <Book />,
    }, {
        title: 'Horários',
        icon: <Clock />,
    }, {
        title: 'Atendimentos',
        icon: <Message />,
    }]

    const tests = [{
        course: 'Frontend',
        date: new Date(),
        weight: 10
    }, {
        course: 'Backend',
        date: new Date(new Date().setDate(new Date().getDate() + 10)),
        weight: 8.9
    }]

    const latestTests = [{
        course: 'Frontend',
        date: new Date('2023-06-02T00:00'),
        score: 10,
        weight: 10
    }, {
        course: 'Banco de Dados II',
        date: new Date('2023-03-02T00:00'),
        score: 9.8,
        weight: 10
    }]

    return (
        <Container>
            <SummaryBanner 
                summaries={summaries}
            />
            <QuickStart>
                <h2>Acesso Rápido</h2>
               <QuickStartBanner pages={pages}/>
            </QuickStart>
            <NextTests>
                <h2>Próximas Avaliações</h2>
                <NextTestBanner tests={tests} />
            </NextTests>
            <LatestTests>
                <h2>Últimas Avaliações</h2>
                <LatestTestBanner tests={latestTests} />
            </LatestTests>
        </Container>
    )
}