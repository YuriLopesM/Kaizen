import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, NavItem } from "./styles"

import { ReactComponent as Logout } from '../../assets/icons/logout.svg';
import { useAuth } from "../../hooks";

interface MenuProps {
    routes: {
        path: string;
        icon?: ReactNode;
    }[]
}

export const Menu = ({
    routes
}: MenuProps) => {
    const { handleLogout } = useAuth()

    return (
        <Container>
            <Nav>
                {routes.map((route, index) => (
                    <NavItem 
                        key={index}
                        $isActive={window.location.pathname === route.path}
                    >
                        <Link to={route.path}>
                            { route.icon }
                        </Link>
                    </NavItem>
                ))}
            </Nav>
            <button onClick={handleLogout}>
                <Logout />
            </button>
        </Container>
    )
}