import React from 'react';
import styled from 'styled-components';

function Button({ children, ...rest }) {
    return (
        <ButtonStyled {...rest}>
            { children }
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    width: 80px;
    padding: 10px 10px 5px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

export default Button
