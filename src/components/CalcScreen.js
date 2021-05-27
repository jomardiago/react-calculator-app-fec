import React from 'react';
import styled from 'styled-components';

function CalcScreen({ userInputs }) {
    return (
        <Screen>
            <p>{ userInputs }</p>
        </Screen>
    );
}

const Screen = styled.div`
    width: 100%;
    height: 12%;
    background-color: var(--screen-bg);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 0.7rem;
    border: none;
    border-radius: 0.4rem;
    margin-top: 0.5rem;
`;

export default CalcScreen;
