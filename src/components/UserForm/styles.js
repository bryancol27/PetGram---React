import styled from "styled-components";

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 5px;
`

export const Form = styled.form`
  padding: 16px 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  width: 100%;
  display: block;
  text-align: center;
  cursor: pointer;

  &[disabled]{
    opacity: 0.3;
  }
`;

export const Error = styled.span`
  font-size: 14px;
  color: red;
  font-weight: bold;
`

export const Loading = styled.span`
  font-size: 14px;
  color: #8d00ff;
  font-weight: bold;
`
