import styled from 'styled-components';

export const Container = styled.div`
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 250px;
    height: 150px;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.blue_90};
    color: ${({ theme }) => theme.colors.blue_70};

    transition: filter 0.4 ease-in;

    div {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        strong {
            font-size: 3rem;
        }
    }

    &:first-child {
        div strong {
            color: ${({ theme }) => theme.colors.blue_10};
        }
    }

    &:hover {
        filter: brightness(1.2);
    }
`