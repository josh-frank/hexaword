import { useSelector } from "react-redux";
import { Header, Progress } from "semantic-ui-react";

export default function Score() {

    const currentScore = useSelector( state => state.currentScore );

    return <>
        <Header className="score" textAlign="center">
            Score: { currentScore }
        </Header>
        <Progress
            indicating
            value={ currentScore }
            total={ 100 }
        />
    </>;

}