import {CrosswordGrid, CrosswordProvider, DirectionClues} from "@jaredreisinger/react-crossword";
import {useRef} from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Col, Container, Row} from "react-bootstrap";

const data = {
    down: {
        1: {
            clue: "Ключевое слово. Ее год рождения откроет Вам дальнейший путь",
            answer: "ЦЕТКИН",
            row: 0,
            col: 2
        }
    },
    across: {
        1: {
            clue: "Универсальный подарок",
            answer: "ЦВЕТЫ",
            row: 0,
            col: 2
        },
        2: {
            clue: "Мама с сумкой",
            answer: "КЕНГУРУ",
            row: 1,
            col: 1
        },
        3: {
            clue: "90 (60) 90",
            answer: "ТАЛИЯ",
            row: 2,
            col: 2
        },
        4: {
            clue: "Боевая раскраска",
            answer: "МАКИЯЖ",
            row: 3,
            col: 0
        },
        5: {
            clue: "Питание для стройности",
            answer: "ДИЕТА",
            row: 4,
            col: 1
        },
        6: {
            clue: "Части тела, которые могут расти от самых ушей.",
            answer: "НОГИ",
            row: 5,
            col: 2
        }
    }
};

const answer = {
    across: {
        1: {
            clue: "Введите пароль",
            answer: "1857",
            row: 0,
            col: 0
        },
    },
    down:{}
};

export default function Crossword({nextStep}) {
    const ref = useRef();

    const onCorrect = (direction, number, answer) => {
        if (direction === "down") {
            toast.success(`Фамилия женщины угадано верно! Вспомните ее год рождения`,{autoClose: false});
        } else {
            toast.success(`Слово №${number} угадано верно!`);
        }
    };

    const onCorrectAnswer = (direction, number, answer) => {
        nextStep();
    };
    return (
        <div className="crossword">
            <CrosswordProvider data={data} onCorrect={onCorrect} ref={ref} storageKey="crossword">
                <Container>
                    <Row>
                        <Col xl={4} md={12} className="mb-3">
                            <DirectionClues direction="across" label="По горизонтали"/>
                            <DirectionClues direction="down" label="По вертикали"/>
                            <br/>
                            <Button onClick={(e) => ref.current.reset()}>Начать заново</Button>
                        </Col>
                        <Col xl={8} md={12}>
                            <CrosswordGrid theme={{
                                highlightBackground: '#f99',
                            }}/>
                        </Col>
                    </Row>
                </Container>
            </CrosswordProvider>

            <CrosswordProvider data={answer} onCorrect={onCorrectAnswer}  storageKey="crossword-answer">
                <Container className="my-5">
                    <Row>
                        <Col xl={4} md={12} className="mb-3">
                            Введите ответ сюда:
                        </Col>
                        <Col xl={8} md={12}>
                            <CrosswordGrid theme={{
                                highlightBackground: '#f99',
                            }}/>
                        </Col>
                    </Row>
                </Container>
            </CrosswordProvider>
        </div>
    );
}
