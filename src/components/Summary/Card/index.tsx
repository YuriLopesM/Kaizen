import { Container, Description, Room } from "./styles"
import { ReactComponent as Info } from '../../../assets/icons/info.svg'

export interface Summary {
    course?: string;
    date: Date;
    teacher?: string;
    content?: string;
    room?: string;
}


export const SummaryCard = ({
    course,
    date,
    teacher,
    content,
    room
}: Summary) => {
    const today = new Date()
    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1))

    const isCardDateToday = date.toDateString() === today.toDateString()

    const dateText = isCardDateToday
        ? 'Hoje'
        : date.toDateString() === tomorrow.toDateString()
            ? 'Amanhã'
            : new Intl.DateTimeFormat('pt-BR', { month: 'numeric', day: 'numeric' }).format(date)

    return (
        <Container
            $isHighlighted={isCardDateToday}
        >
            <Description
                $isHighlighted={isCardDateToday}
            >
                <h1>{dateText}</h1>
                <div>
                    <p>Aula: <span>{course}</span></p>
                    {
                        isCardDateToday && (
                            <>
                                <p>Professor: <span>{teacher}</span></p>
                                <p>Conteúdo: <span>{content}</span></p>
                            </>
                        )
                    }
                </div>
            </Description>
            <Room
                $isHighlighted={isCardDateToday}
            >
                { isCardDateToday && <i><Info /></i>}
                <div>
                    <span>Sala </span>
                    <strong>{room}</strong>
                </div>
            </Room>
        </Container>
    )
}