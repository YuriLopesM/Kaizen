import styled from 'styled-components';

export const Container = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end
`

export const TitleContainer = styled.div`
    padding: 1rem 0;
    margin: 0 3rem;
    border-bottom: ${({ theme }) => theme.colors.blue_70} 1px solid;

    h1 {
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.blue_70};
    }
`