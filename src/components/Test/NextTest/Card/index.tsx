import { Container } from "./styles";

export interface NextTestCardProps {
    course: string;
    date: Date;
    weight: number;
}

export const NextTestCard = ({
    course,
    date,
    weight
}: NextTestCardProps) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', { month: 'numeric', day: 'numeric' }).format(date);
    const formattedWeight = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(weight)

    return (
        <Container>
            <span>{course}</span>
            <strong>{formattedDate}</strong>
            <span>Peso: {formattedWeight}</span>
        </Container>
    );
}
