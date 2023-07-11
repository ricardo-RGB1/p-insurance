import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 5px;
    background: #FF3775;
    white-space: nowrap;    
    color: #fff;
    padding: 16px 40px;
    font-size: 19px;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    font-family: "new-zen", sans-serif;
    font-weight: 600;
    font-style: normal;
    box-shadow: 0px 3px 10px 4px rgba(255, 55, 117, 0.4);
    letter-spacing: 0.01em;

    &:hover {
        border: none;
        transition: all .3s ease;
        background: #D4266C;
    }
`;

