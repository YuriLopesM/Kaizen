import styled from 'styled-components';

export const Container = styled.li<{ $isChecked: boolean }>`
    list-style: none;
    width: 95%;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: clamp(4rem, 80px, 7rem);

    background: ${({ theme }) => theme.colors.blue_90};
    opacity: ${({ $isChecked }) => $isChecked ? 0.3 : 1};
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;

    transition: 
        filter 0.4s ease-in-out,
        transform 0.4s ease-in-out;

    &:hover {
        transform: translateX(1rem);
        filter: brightness(1.2)
    }

`

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h2 {
        font-weight: 500;
        font-size: 1.25rem;
    }

`

export const Checkbox = styled.input`
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    border: 2px solid ${({ theme }) => theme.colors.blue_70};
    background: ${({ theme }) => theme.colors.blue_90};
    cursor: pointer;

    accent-color: ${({ theme }) => theme.colors.orange};
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const DeleteButton = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0;
    background: ${({ theme }) => theme.colors.blue_90};
    cursor: pointer;

    transition: filter 0.4s ease-in-out;

    svg {
        width: 1.275rem;
        stroke: ${({ theme }) => theme.colors.red};
    }

    &:hover {
        filter: brightness(0.8);
    }
`