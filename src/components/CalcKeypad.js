import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const buttonGroups = [
    {id: 'buttonGroup1', buttonList: [
        { id: '7', value: '7', className: 'btn btn-orange' },
        { id: '8', value: '8', className: 'btn btn-orange' },
        { id: '9', value: '9', className: 'btn btn-orange' },
        { id: 'DEL', value: 'DEL', className: 'btn btn-blue sm-font' }
    ]},
    {id: 'buttonGroup2', buttonList: [
        { id: '4', value: '4', className: 'btn btn-orange' },
        { id: '5', value: '5', className: 'btn btn-orange' },
        { id: '6', value: '6', className: 'btn btn-orange' },
        { id: '+', value: '+', className: 'btn btn-orange' }
    ]},
    {id: 'buttonGroup3', buttonList: [
        { id: '1', value: '1', className: 'btn btn-orange' },
        { id: '2', value: '2', className: 'btn btn-orange' },
        { id: '3', value: '3', className: 'btn btn-orange' },
        { id: '-', value: '-', className: 'btn btn-orange' }
    ]},
    {id: 'buttonGroup4', buttonList: [
        { id: '.', value: '.', className: 'btn btn-orange' },
        { id: '0', value: '0', className: 'btn btn-orange' },
        { id: '/', value: '/', className: 'btn btn-orange' },
        { id: 'x', value: 'x', className: 'btn btn-orange' }
    ]},
    {id: 'buttonGroup5', buttonList: [
        { id: 'reset', value: 'RESET', className: 'btn btn-large btn-blue sm-font' },
        { id: '=', value: '=', className: 'btn btn-large btn-red' },
    ]}
];

function CalcKeypad({ handleClick }) {
    return (
        <KeyPad>
            { buttonGroups.map(group => {
                return (
                    <div key={group.id} className="btn-group">
                        { group.buttonList.map(button => (
                            <Button 
                                key={button.id}
                                className={button.className}
                                onClick={handleClick}
                                value={button.value}
                            >
                                {button.value}
                            </Button>
                        )) }
                    </div>
                );
            }) }
        </KeyPad>
    );
}

const KeyPad = styled.div`
    width: 100%;
    height: 70%;
    background-color: var(--toggle-keypad-bg);
    margin-top: 0.5rem;
    border-radius: 0.4rem;
    padding: 0.7rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .btn-group {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
`;

export default CalcKeypad;
