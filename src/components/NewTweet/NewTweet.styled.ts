import styled from "styled-components";


export const Root = styled.div`
  padding: 24px 16px 16px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const Input = styled.textarea`
  border: none;
  outline: none;
  font-size: 20px;
  padding: 8px 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid gray;
  padding-top: 16px;
`;

export const Counter = styled.div<{error: boolean}>`
  border-right: 1px solid gray;
  padding-right: 8px;
  margin-right: 8px;
  ${({error}) => error && "color: red"};
`;

export const SubmitButton = styled.button`
  background-color: blue;
  border: none;
  color: white;
  border-radius: 15px;
  padding: 8px 16px;
`;