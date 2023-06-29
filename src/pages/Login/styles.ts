import { styled } from "styled-components";

import { ReactComponent as Orange } from '../../assets/patterns/orange.svg'
import { ReactComponent as VerticalBlue } from '../../assets/patterns/blue-vertical.svg'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100vh;
    margin: 0 auto;
`;

export const Hero = styled.main`
    display: flex;
    justify-content: center;
    gap: 8rem;
    width: 1600px;

    height: 70%;
`

export const Text = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    width: 40%;

    .main-text {
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 3.25rem;

        span {
            background: ${props => props.theme.colors.orange};
            font-weight: 600;
        }
    }

    .sub-text {
        font-size: 1.15rem;
        font-weight: 500;
        line-height: 1.5rem;
        width: 85%;
        color: ${props => props.theme.colors.blue_80};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 800px;
    padding: 3.5rem 3rem 3rem;

    height: clamp(500px, 500px, 700px);
    width: 430px;

    background: ${props => props.theme.colors.blue_90};
    border-radius: 0.5rem;

    section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`;

export const OrangePattern = styled(Orange)`
    position: absolute;
    top: 5%;
    left: 0;
`;

export const BlueVerticalPattern = styled(VerticalBlue)`
    position: absolute;
    top: 0;
    right: 8%;
    z-index: -1;
`