import { InputHTMLAttributes } from "react";
import { Container, InputComponent } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    hasLabel?: boolean;
    labelText?: string;
    styleSize?: 'small' | 'medium' | 'large';
}

export const Input = ({
    hasLabel = true,
    labelText = '',
    styleSize = 'medium',
    ...rest  
}: InputProps) => {
    return (
        <Container>
            {hasLabel && <label htmlFor={rest.id}>{labelText}</label>}
            <InputComponent
                styleSize={styleSize}
                {...rest}
            />
        </Container>
    )
}