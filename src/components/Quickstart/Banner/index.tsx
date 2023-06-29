import { QuickStartCard, QuickStartCardProps } from "../Card"
import { Container } from "./styles"

interface QuickStartBanner {
    pages: QuickStartCardProps[]
}

export const QuickStartBanner = ({
    pages
}: QuickStartBanner) => {
    return (
        <Container>
            {pages.map((page, index) => {
                return (
                    <QuickStartCard 
                        key={index} 
                        title={page.title}
                        icon={page.icon}
                        link={page.link}
                    />
                )
            })}
        </Container>
    )
}