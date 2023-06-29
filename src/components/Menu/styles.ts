import styled from 'styled-components';

interface NavItemProps {
    $isActive?: boolean;
}

export const Container = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid ${props => props.theme.colors.blue_90};

    button {
        width: 1.275rem;

        position: absolute;
        left: 50%;
        bottom: 2rem;
        transform: translateX(-50%);

        background: transparent;
        border: none;

        svg {
            stroke: ${props => props.theme.colors.red};
        }
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`

export const NavItem = styled.li<NavItemProps>`
    list-style: none;
    width: 1.275rem;

    svg {
        stroke: ${props => props.$isActive ? props.theme.colors.orange : props.theme.colors.blue_70};
        transition: stroke 0.2s;

        &:hover {
            stroke: ${props => props.theme.colors.dark_orange};
        }
    }

    a {
        display: flex;
        align-items: center;
        gap: 4px;
    }
`