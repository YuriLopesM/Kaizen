import styled from 'styled-components';

export const Container = styled.div`
    min-width: 200px;
    height: 100%;
    min-height: 200px;

    background: ${({ theme }) => theme.colors.blue_90};
    color: ${({ theme }) => theme.colors.blue_70};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 0.5rem;

    gap: 1rem;

    cursor: pointer;
    transition: filter 0.4 ease-in;

    strong {
        font-size: 3rem;
    }

    &:first-child {
        color: ${({ theme }) => theme.colors.blue_10};
    }

    &:hover {
        filter: brightness(1.2);
    }
`