import { ReactNode } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export interface QuickStartCardProps {
    title: string;
    icon: ReactNode,
    link?: string;
}

export const QuickStartCard = ({
    title,
    icon,
    link
}: QuickStartCardProps) => {
    const navigate = useNavigate()
    return (
        <Container onClick={() => navigate(link || '')}>
            <div>{icon}</div>
            <span>{title}</span>
        </Container>
    )
}