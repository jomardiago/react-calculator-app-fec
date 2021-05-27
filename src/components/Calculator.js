/* eslint no-eval: 0 */

import React from 'react';
import styled from 'styled-components';

import CalcHeader from './CalcHeader';
import CalcKeypad from './CalcKeypad';
import CalcScreen from './CalcScreen';

const themes = ['theme1', 'theme2', 'theme3'];

function Calculator() {
    const [theme, setTheme] = React.useState('theme1');
    const [userInputs, setUserInputs] = React.useState('');
    const [rangeValue, setRangeValue] = React.useState('1');

    React.useEffect(()=>{
        document.documentElement.className = theme;
    }, [theme]);

    function handleClick(e) {
        const currentUserInputs = userInputs;
        switch (e.target.value) {
            case 'DEL':
                setUserInputs(currentUserInputs.slice(0, -1));
                break;
            case 'RESET':
                setUserInputs('');
                break;
            case '=':
                const total = eval(currentUserInputs).toString();
                setUserInputs(total);
                break;
            case 'x':
                setUserInputs(currentUserInputs.concat('*'));
                break;
            default:
                setUserInputs(currentUserInputs.concat(e.target.value));
                break;
        }
    }

    function handleOnSelectChange(e) {
        setTheme(themes[parseInt(e.target.value) - 1]);
        setRangeValue(e.target.value);
    }

    return (
        <CalculatorMain className="theme">
            <CalcHeader rangeValue={rangeValue} handleOnSelectChange={handleOnSelectChange} />
            <CalcScreen userInputs={userInputs} />
            <CalcKeypad handleClick={handleClick}/>
        </CalculatorMain>
    );
}

const CalculatorMain = styled.div`
    height: 600px;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
`;

export default Calculator;
