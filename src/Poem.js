import {Col, Container, Row} from "react-bootstrap";
import {CrosswordGrid, CrosswordProvider} from "@jaredreisinger/react-crossword";

const data = {

    across: {
        1: {
            clue: "Пароль",
            answer: "БУКЕТ",
            row: 0,
            col: 0
        },
    },
    down:{}
};

export default function Poem({nextStep}) {
    const onCorrect = () => {
        nextStep();
    };

    return (
        <Container>
            <div className="my-3 pl-5 m-auto poem">
                <div>За что любит девочку в садике мальчик?</div>
                <div>За куклу её, и в косе красный бантик.</div>
                <div>За то, что бесстрашно ест манную кашу,</div>
                <div>За то, что имеет подругу Наташу.</div>
                <div>&nbsp;</div>
                <div>За что любят девочку в школьные годы?</div>
                <div>За то, что вникает в течения моды.</div>
                <div>За смех озорной и успехи в учёбе.</div>
                <div>За взгляд её глаз,&nbsp; что подарку подобен.</div>
                <div>&nbsp;</div>
                <div>За что любит юноша девушку в двадцать?</div>
                <div>За то, что её невозможно дождаться.</div>
                <div>За ноги красивые, яркую внешность,</div>
                <div>За жаркие ночи длиной в бесконечность.</div>
                <div>&nbsp;</div>
                <div>За что любят женщину, где-то за тридцать?</div>
                <div>За то, что в постели она как тигрица.</div>
                <div>За то, что с тобою и в горы и в храмы.</div>
                <div>За то, что готовит "как будто у мамы".</div>
                <div>&nbsp;</div>
                <div>За что любят даму чей возраст секретен?</div>
                <div>За то, что ей нет больше дела до сплетен.</div>
                <div>За то, что спокойно тебе доверяет.</div>
                <div>За то, что давно всё без слов понимает.</div>
                <div>&nbsp;</div>
                <div>За что же дед любит седую старушку?</div>
                <div>За то, что ворчит ему ночью в подушку.</div>
                <div>За то, что как в детстве, ест кашу зевая,</div>
                <div>И главное просто за то, что живая ;-)</div>
            </div>
            <div style={{marginTop: '500px'}}>
                <CrosswordProvider data={data} onCorrect={onCorrect} storageKey="poem-answer">
                    <Row>
                        <Col xl={4} md={12}>
                            <div>
                                0 9, 4 19, 8 24, 12 14, 16 11
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