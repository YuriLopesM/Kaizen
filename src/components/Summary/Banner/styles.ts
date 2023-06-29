import styled from 'styled-components';

export const Container = styled.section`
    grid-area: summary;

    padding: 1.5rem 1.5rem 1.5rem 0;

    display: grid;
    gap: 2rem;
    grid-template-columns: 1.3fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        'main other';
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue_90};
`

export const MainBanner = styled.main`
    width: 100%;
    grid-area: main;
`

export const OtherBanner = styled.aside`
    width: 100%;
    grid-area: other;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 1.5rem;
`
