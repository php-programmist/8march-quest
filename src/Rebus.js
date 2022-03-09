import {Col, Container, Row} from "react-bootstrap";
import {CrosswordGrid, CrosswordProvider} from "@jaredreisinger/react-crossword";
import rebus1 from './img/1.png';
import rebus2 from './img/2.png';

const data = {

    across: {
        1: {
            clue: "Пароль",
            answer: "1871",
            row: 0,
            col: 0
        },
    },
    down:{}
};

export default function Rebus({nextStep}) {
    const onCorrect = () => {
        nextStep();
    };

    return (
        <Container>
            <Row className="my-3">
                <div style={{textAlign: 'center'}}>
                    <img src={rebus1} alt="1"/>
                </div>
            </Row>
            <Row className="my-3">
                <div style={{textAlign: 'center'}}>
                    <img src={rebus2} alt="2"/>
                </div>

            </Row>
            <div style={{marginTop: '100px'}}>
                <CrosswordProvider data={data} onCorrect={onCorrect} storageKey="rebus-answer">
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