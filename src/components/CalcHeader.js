import React from 'react';
import styled from 'styled-components';

function CalcHeader({ rangeValue, handleOnSelectChange }) {
    return (
        <Header>
            <p>Calculator</p>
            <div className="theme-select">
                <label htmlFor="slider" className="sm-font">THEME</label>
                <input type="range" name="theme" value={rangeValue} id="slider" min="1" max="3" onChange={handleOnSelectChange}/>
            </div>
        </Header>
    );
}

const Header = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;

    .theme-select {
        display: flex;
        justify-content: center;
        align-items: center;
        
        input {
            margin-left: .2rem;
        }

        label {
            padding-top: 0.1rem;
        }
    }
`;

export default CalcHeader;
