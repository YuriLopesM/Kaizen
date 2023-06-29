import styled from 'styled-components';

interface CardProps {
    $isHighlighted: boolean
}

export const Container = styled.div<CardProps>`
    width: 100%;
    height: ${({ $isHighlighted }) => $isHighlighted ? '100%' : '50%'};
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;

    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.blue_90};
    border:  ${({ $isHighlighted, theme }) => $isHighlighted && `2px solid ${theme.colors.orange}`};
`;

export const Description = styled.section<CardProps>`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        color: ${({ $isHighlighted, theme }) => $isHighlighted ? theme.colors.orange : theme.colors.blue_70};
        font-size: ${({ $isHighlighted }) => $isHighlighted ? '1.5rem' : '1rem'};
    }


    p {
        color: ${({ theme }) => theme.colors.blue_70};

        span {
            font-weight: 700;
            color: ${({ $isHighlighted, theme }) => $isHighlighted && theme.colors.blue_60};
        }
    }
`


export const Room = styled.section<CardProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    i {
        display: block;
        width: 1.275rem;

        svg {
            stroke: ${({ theme }) => theme.colors.blue_70};
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        span {
            color: ${({ theme }) => theme.colors.blue_70};
        }

        strong {
            color: ${({ $isHighlighted, theme }) => $isHighlighted ? theme.colors.orange : theme.colors.blue_70};
            font-size: ${({ $isHighlighted }) => $isHighlighted ? '3rem' : '1.35rem'};
            font-weight: ${({ $isHighlighted }) => $isHighlighted ? '700' : '600'};
            line-height: ${({ $isHighlighted }) => $isHighlighted && '2.8rem'};
        }
    }
        
`