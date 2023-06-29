import { Summary, SummaryCard } from "../Card";
import { Container, MainBanner, OtherBanner } from "./styles";


interface SummaryBannerProps {
    summaries: Summary[];
}

export const SummaryBanner = ({
    summaries
}: SummaryBannerProps) => {
    const mainSummary = summaries[0];
    const otherSummaries = summaries.slice(1, 3);

    return (
        <Container>
            <MainBanner>
                <SummaryCard 
                    key={'first'}
                    course={mainSummary.course}
                    date={mainSummary.date}
                    teacher={mainSummary.teacher}
                    content={mainSummary.content}
                    room={mainSummary.room}
                />
            </MainBanner>
            <OtherBanner>
                {
                    otherSummaries.map((summary, index) => (
                        <SummaryCard
                            key={index}
                            course={summary.course}
                            date={summary.date}
                            teacher={summary.teacher}
                            content={summary.content}
                            room={summary.room}
                        />
                    ))
                }
            </OtherBanner>
        </Container>
    );
}
