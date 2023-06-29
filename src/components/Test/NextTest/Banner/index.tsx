import { NextTestCard, NextTestCardProps } from "../Card"
import { Container } from "./styles"

interface NextTestBanner {
    tests: NextTestCardProps[]
}

export const NextTestBanner = ({
    tests
}: NextTestBanner) => {
    return (
        <Container>
            {tests.map(test => (
                <NextTestCard
                    course={test.course}
                    date={test.date}
                    weight={test.weight}
                />
            ))}
        </Container>
    )
}