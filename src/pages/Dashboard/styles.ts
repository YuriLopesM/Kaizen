import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 65% 1fr;
    grid-template-rows: 35% 1fr;
    grid-template-areas:
        'summary nexttests'
        'quickstart latesttests';
    
    section > h2 {
        font-weight: 500;
        font-size: 1.275rem;
        color: ${({ theme }) => theme.colors.blue_90};
    }
`;

export const QuickStart = styled.section`
    grid-area: quickstart;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin: 2rem 1.5rem 0 0;
`

export const NextTests = styled.section`
    grid-area: nexttests;
    padding-left: 2rem;
    margin-left: 1rem;
    border-left: 1px solid ${({ theme }) => theme.colors.blue_90};

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;

    overflow-x: auto;
    overflow-y: hidden;
`

export const LatestTests = styled.section`
    grid-area: latesttests;
    padding-left: 2rem;
    margin: 1.5rem 0 0 1rem;
    border-left: 1px solid ${({ theme }) => theme.colors.blue_90};

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;

    overflow-x: auto;
    overflow-y: hidden;
`