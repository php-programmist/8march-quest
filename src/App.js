import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import Poem from "./Poem";
import Crossword from "./Crossword";
import Rebus from "./Rebus";
import Task from "./Task";
import bg from './img/bg.png';



export default function App() {

    const [step, setStep] = useState(0);

    const nextStep = () => {
        toast.success(`Верно!`);
        setStep(step + 1);
    }

    const FinishMessage = () => (<>
            <p>Поздравляем!</p>
            <p><a target="_blank" href="gifts.rar">Ваши подарки!</a></p>
            <p>Пароль: 8march</p>
        </>
    );

    const finish = () => {
        toast.success(<FinishMessage/>, {autoClose: false});
    }

    const components = [
        <Poem nextStep={nextStep}/>,
        <Crossword nextStep={nextStep}/>,
        <Rebus nextStep={nextStep}/>,
        <Task nextStep={finish}/>,
    ];

    return (
        <div className="App">
            {components[step]}
            <ToastContainer/>
        </div>
    );
}
