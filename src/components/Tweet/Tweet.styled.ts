import styled from "styled-components";

export const Root = styled.div`
  padding: 16px;
  border-top: 1px solid lightgray;
    
  &:last-child {
    border-bottom: 1px solid lightgray;
  }
`;


export const Author = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

export const Content = styled.div`
  font-size: 20px;
  margin-top: 8px;
`;

export const Date = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: gray;
`;