import styled from 'styled-components';

interface ButtonStyleProps {
    $styleType: 'primary' | 'secondary' | 'default';
    $size: 'small' | 'medium' | 'large';
}

export const Container = styled.button<ButtonStyleProps>`
    padding: ${({ $size }) => {
        switch ($size) {
            case 'small':
                return '0.5rem 0';
            case 'large':
                return '1.5rem 2rem';
            default:
                return '1rem 0';
        }
    }};
    border-radius: 0.5rem;
    border: none;
    background: ${({ $styleType, theme }) => {
        switch ($styleType) {
            case 'primary':
                return theme.colors.orange;
            case 'secondary':
                return theme.colors.blue_80;
            default:
                return theme.colors.blue_90;
        }
    }};
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    font-size: inherit;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.2);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        
    }
`