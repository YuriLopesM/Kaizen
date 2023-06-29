import { LatestTestCard, LatestTestCardProps } from "../Card";
import { Container } from "./styles";

interface LatestTestBanner {
    tests: LatestTestCardProps[];
}

export const LatestTestBanner = ({
    tests
}: LatestTestBanner) => {
    return (
        <Container>
            {
                tests.map(test => (
                    <LatestTestCard
                        key={test.course}
                        course={test.course}
                        date={test.date}
                        score={test.score}
                        weight={test.weight}
                    />
                ))
            }
        </Container>
    );
}