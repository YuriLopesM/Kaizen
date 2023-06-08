import { LogoContainer } from "./styles"

interface LogoProps {
    size: number
}
/**
 * Componente de logo do Kaizen
 * @param size Tamanho em REM
 */
export const Logo = ({ 
    size
}: LogoProps) => {
    return (
        <LogoContainer size={size}>
            <span>Kai</span>zen.
        </LogoContainer>
    )
}