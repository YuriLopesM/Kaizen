import styled from 'styled-components';

export const Container = styled.div`
    min-width: 128px;
    height: 112px;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.blue_90};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 
        filter 0.4s ease-in, 
        color 0.2s ease-in, 
        stroke 0.2s ease-in, 
        transform 0.2s ease;
    cursor: pointer;

    > div svg {
        width: 3rem;
        stroke: ${({ theme }) => theme.colors.blue_70};
        transition: stroke 0.1s ease-in-out;
    }

    span {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.blue_70};
        font-weight: 600;
    }

    &:hover {
        div svg {
            stroke: ${({ theme }) => theme.colors.orange};

        }

        span {
            color: ${({ theme }) => theme.colors.orange};

        }

        filter: brightness(1.2);
        transform: scale(1.05);
    }   
    
`