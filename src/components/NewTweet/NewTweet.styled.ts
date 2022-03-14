import styled from "styled-components";


export const Root = styled.div`
  padding: 24px 16px 16px;
  border-radius: 15px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.textarea`
  border: none;
  outline: none;
  font-size: 20px;
  padding: 8px 0;
`;

export const Author = styled.span`
  margin-right: auto;
  font-weight: bold;
  padding: 4px 0;
  border-bottom: 1px dashed black;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid lightgray;
  padding-top: 16px;
`;

export const Counter = styled.div<{error: boolean}>`
  border-right: 1px solid lightgray;
  padding-right: 8px;
  margin-right: 8px;
  ${({error}) => error && "color: red"};
`;

export const SubmitButton = styled.button`
  background-color: deepskyblue;
  font-weight: bold;
  font-size: 15px;
  border: none;
  color: white;
  border-radius: 15px;
  padding: 8px 16px;
`;