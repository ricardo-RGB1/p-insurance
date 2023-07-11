import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #f9f9f9;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(LinkR)`
  margin:  0 auto;
  margin-top: 52px;
  text-decoration: none;
  color: #4d4d4d;
  font-size: 2.2rem;
  font-family: "grafolita-script", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  letter-spacing: 0.03em;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #fff;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 5px;
  box-shadow: 0 20px 30px 4px rgba(0, 0, 0, 0.1);


  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #4d4d4d;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #6b6b6b;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  // add a soft gray background to the input
  background: #f2f2f2;
`;


export const Text = styled.span`
  text-align: center;
  margin-top: 26px;
  color: #6b6b6b;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 0px;
  margin-right: 0px;
    padding: 0px 0px;

  &:hover {
    text-decoration: underline;
    }

`;

