import styled from "styled-components";

export const LogoContainer = styled.h1<{ size: number }>`
    font-size: ${props => props.size + "rem"};
    font-weight: 700;
    font-family: Sora, sans-serif;
    color: ${({ theme }) => theme.colors.light_blue};

    span {
        color: ${({ theme }) => theme.colors.orange};
    }
`