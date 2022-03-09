import {Col, Container, Row} from "react-bootstrap";
import {CrosswordGrid, CrosswordProvider} from "@jaredreisinger/react-crossword";

const data = {

    across: {
        1: {
            clue: "Пароль",
            answer: "PRAZDNIK",
            row: 0,
            col: 0
        },
    },
    down:{}
};

export default function Task({nextStep}) {
    const onCorrect = () => {
        nextStep();
    };

    return (
        <Container>
            <center>
                <a
                    style={{fontSize: '40px'}}
                    target="_blank"
                   href="https://codepen.io/php-programmist/pen/dyZEqPa">Реши меня</a>
            </center>
            <div style={{marginTop: '100px'}}>
                <CrosswordProvider data={data} onCorrect={onCorrect} storageKey="task-answer">
                    <Row>
                        <Col xl={4} md={12}>
                            <div>
                                Введите ответ сюда:
                            </div>
                        </Col>
                        <Col xl={8} md={12}>
                            <CrosswordGrid theme={{
                                highlightBackground: '#f99',
                            }}/>
                        </Col>
                    </Row>
                </CrosswordProvider>
            </div>
        </Container>
    );
}