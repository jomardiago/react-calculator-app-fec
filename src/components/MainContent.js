import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

function MainContent() {
    return (
        <MainStyled>
            <Calculator />
        </MainStyled>
    );
}

const MainStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: var(--main-bg);
`;

export default MainContent;
