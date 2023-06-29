import { ReactNode } from "react";
import { Container, Content, Header, Menu } from "./styles";

interface LayoutProps {
    children: ReactNode;
    headerComponent: ReactNode;
    menuComponent?: ReactNode;
}

export const Layout = ({
    headerComponent,
    menuComponent,
    children
}: LayoutProps) => {
    return (
        <Container>
            <Header>
                {headerComponent}
            </Header>
            <Menu>
                {menuComponent}
            </Menu>
            <Content>
                {children}
            </Content>
        </Container>
    )
}