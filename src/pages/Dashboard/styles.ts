import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 65% 1fr;
    grid-template-rows: 45% 1fr;
    grid-template-areas:
        'summary tests'
        'quickstart tests';
`;

export const Summary = styled.section`
    grid-area: summary;
`

export const QuickStart = styled.section`
    grid-area: quickstart;
    background-color: red;
`

export const Tests = styled.section`
    grid-area: tests;
    background-color: blue;
`