import { Container } from "./styles";

export interface LatestTestCardProps {
    course: string;
    score: number;
    weight: number;
    date: Date;
}

export const LatestTestCard = ({
    course,
    score,
    weight,
    date
}: LatestTestCardProps) => {
    const formattedDate = new Intl.DateTimeFormat('pt-BR', { month: 'numeric', day: 'numeric' }).format(date);
    const formattedWeight = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(weight)
    const formattedScore = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(score)

    return (
        <Container>
            <div>
                <p>{course}</p>
                <p>{formattedDate}</p>
            </div>
            <div>
                <p>{formattedWeight}</p>
                <strong>{formattedScore}</strong>
            </div>
        </Container>
    );
}