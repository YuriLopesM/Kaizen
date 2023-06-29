import { Container, TitleContainer } from "./styles";

interface HeaderProps {
    title?: string;
}

export const Header = ({
    title
}: HeaderProps) => {
    return (
        <Container>
            <TitleContainer>
                <h1>{title}</h1>
            </TitleContainer>
        </Container>
    )
}