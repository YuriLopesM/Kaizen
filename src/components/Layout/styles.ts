import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 56px 1fr;
    grid-template-rows: 100px 1fr;
    grid-template-areas:
        'menu header'
        'menu content';
`


export const Header = styled.header`
    grid-area: header;
`
export const Menu = styled.section`
    grid-area: menu;
`
export const Content = styled.main`
    grid-area: content;
    margin: 1rem 3rem;
`