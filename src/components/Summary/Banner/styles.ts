import styled from 'styled-components';

export const Container = styled.section`
    grid-area: summary;
    padding: 1.5rem 0;

    display: flex;
    gap: 1.5rem;

    main, aside {
        width: 100%;
    }
`

export const MainBanner = styled.main`
    width: 100%;
`

export const OtherBanner = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
