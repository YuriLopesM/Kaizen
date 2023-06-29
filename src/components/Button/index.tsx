import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    styleType?:  'primary' | 'secondary' | 'default';
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
}

export const Button = ({
    children,
    styleType = 'default',
    size = 'medium',
    ...rest  
}: ButtonProps) => {
    return (
        <Container
            $styleType={styleType}
            $size={size}
            {...rest}
        >
            {children}
        </Container>
    )
}