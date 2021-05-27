import React from 'react';
import styled from 'styled-components';

function CalcHeader({ handleOnSelectChange }) {
    return (
        <Header>
            <p>Calculator</p>
            <div className="calc-header-theme-container">
                <form className="calc-header-theme-form">
                    <label htmlFor="themes" className="sm-font">Choose a theme: </label>
                    <select name="themes" id="themes" className="theme-select sm-font" onChange={handleOnSelectChange}>
                        <option value="theme1" className="sm-font">Theme 1</option>
                        <option value="theme2" className="sm-font">Theme 2</option>
                        <option value="theme3" className="sm-font">Theme 3</option>
                    </select>
                </form>
            </div>
        </Header>
    );
}

const Header = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;

    .theme-select {
        border: 1px solid var(--toggle-keypad-bg);
        background-color: var(--toggle-keypad-bg);
        padding: .3rem 1rem;
        margin-left: .2rem;
    }
`;

export default CalcHeader;
