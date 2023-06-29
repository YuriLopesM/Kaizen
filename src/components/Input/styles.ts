import styled from 'styled-components';

interface InputStyleProps {
    styleSize: 'small' | 'medium' | 'large';
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        font-size: inherit;
    }
`

export const InputComponent = styled.input<InputStyleProps>`
    padding: ${({ styleSize }) => {
        switch (styleSize) {
            case 'small':
                return '0.5rem';
            case 'large':
                return '1.5rem 1rem';
            default:
                return '1rem 0.5rem';
        }
    }};

    border-radius: 0.5rem;
    border: none;
    background: ${props => props.theme.colors.blue_80};
    color: ${props => props.theme.colors.white};

    font-weight: 500;
    line-height: 1.25rem;
    transition: border-color 0.2s;
`