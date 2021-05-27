import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .theme1 {
        --main-bg: #3a4764;
        --toggle-keypad-bg: #232c43;
        --screen-bg: #182034;
        --dark-blue-bg: #637097;
        --dark-blue-shadow: #404e72;
        --red-bg: #d03f2f;
        --red-shadow: #93261a;
        --orange-bg: #eae3dc;
        --orange-shadow: #b4a597;
        --blue-text: #444b5a;
        --white-text: #ffffff;
    }

    .theme2 {
        --main-bg: hsl(0, 0%, 90%);
        --toggle-keypad-bg: hsl(0, 5%, 81%);
        --screen-bg: hsl(0, 0%, 93%);
        --dark-blue-bg: hsl(185, 42%, 37%);
        --dark-blue-shadow: hsl(185, 58%, 25%);
        --red-bg: hsl(25, 98%, 40%);
        --red-shadow: hsl(25, 99%, 27%);
        --orange-bg: hsl(45, 7%, 89%);
        --orange-shadow: hsl(35, 11%, 61%);
        --blue-text: hsl(60, 10%, 19%);
        --white-text: hsl(0, 0, 100%);
    }

    .theme3 {
        --main-bg: hsl(268, 75%, 9%);
        --toggle-keypad-bg: hsl(268, 71%, 12%);
        --screen-bg: hsl(268, 71%, 12%);
        --dark-blue-bg: hsl(281, 89%, 26%);
        --dark-blue-shadow: hsl(285, 91%, 52%);
        --red-bg: hsl(176, 100%, 44%);
        --red-shadow: hsl(177, 92%, 70%);
        --orange-bg: hsl(268, 47%, 21%);
        --orange-shadow: hsl(290, 70%, 36%);
        --blue-text: hsl(52, 100%, 62%);
        --white-text: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Spartan", sans-serif;
        font-size: 32px;
        font-weight: 700;
        color: var(--white-text);
    }

    .btn {
        width: 80px;
        padding: 10px 10px 5px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }

    .btn-large {
        width: 160px;
    }

    .btn-orange {
        background-color: var(--orange-bg);
        color: var(--blue-text);
        box-shadow: 0px 4px 0px var(--orange-shadow);
    }

    .btn-blue {
        background-color: var(--dark-blue-bg);
        color: var(--white-text);
        box-shadow: 0px 4px 0px var(--dark-blue-shadow);
    }

    .btn-red {
        background-color: var(--red-bg);
        color: var(--white-text);
        box-shadow: 0px 4px 0px var(--red-shadow);
    }

    .sm-font {
        font-size: 0.5rem;
    }

    .xs-font {
        font-size: 0.3rem;
    }

    input[type=range] {
        height: 24px;
        -webkit-appearance: none;
        margin: 10px 0;
        width: 100%;
        border-radius: 1rem;
        padding: 0.3rem;
        max-width: 25%;
        background-color: var(--toggle-keypad-bg);
        cursor: pointer;
    }
`;

export default GlobalStyles;
