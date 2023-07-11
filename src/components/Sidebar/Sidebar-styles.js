import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from "react-router-dom";


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;


export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;


export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        filter: brightness(65%);
        transition: 0.2s ease-in-out;
    }
`;


export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;


export const SidebarRoute = styled(LinkR)`
    border-radius: 4px;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 17px;
    outline: none;
    border:2px solid #E6F5FF;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "new-zen", sans-serif;
    font-weight: 600;
    font-style: normal;


    &:hover {
        color: #000;
        background: #E6F5FF;
        transition: all 0.2s ease-in-out;
    }
`;

