import { useSelector } from "react-redux";
import { Header, Progress } from "semantic-ui-react";

export default function Score() {

    const currentScore = useSelector( state => state.currentScore );

    return <>
        <Header className="score" textAlign="center">
            Score: { currentScore.score }
        </Header>
        <Progress
            indicating
            value={ currentScore.score }
            total={ 100 }
        />
    </>;

}