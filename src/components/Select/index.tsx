import { SelectHTMLAttributes } from "react";
import { Container, SelectComponent } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    hasLabel?: boolean;
    labelText?: string;
    styleSize?: 'small' | 'medium' | 'large';
    options?: {
        value: string | number;
        label: string;
    }[]
}

export const Select = ({
    options,
    hasLabel = true,
    labelText = '',
    styleSize = 'medium',
    ...rest  
}: SelectProps) => {
    return (
        <Container>
            {hasLabel && <label htmlFor={rest.id}>{labelText}</label>}
            <SelectComponent
                $styleSize={styleSize}
                {...rest}
            >
                {options?.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </SelectComponent>
        </Container>
    )
}