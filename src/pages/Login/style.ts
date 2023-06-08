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
        color: ${props => props.theme.colors.blue_400};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 800px;
    padding: 3.5rem 3rem 3rem;

    height: 70%;
    width: 430px;

    background: ${props => props.theme.colors.blue_600};
    border-radius: 0.5rem;

    section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            label {
                font-size: 1rem;
            }

            input {
                width: 100%;
                height: 3rem;
                padding: 0 1rem;

                border-radius: 0.5rem;
                border: none;
                background: ${props => props.theme.colors.blue_400};
                color: ${props => props.theme.colors.black};

                font-size: 1rem;
                font-weight: 500;
                line-height: 1.25rem;
                transition: border-color 0.2s;

            }
        }
    }

    button {
        width: 100%;
        height: 3rem;
        border-radius: 0.5rem;
        border: none;
        background: ${props => props.theme.colors.orange};
        color: ${props => props.theme.colors.white};
        font-weight: 500;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.2);
        }
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