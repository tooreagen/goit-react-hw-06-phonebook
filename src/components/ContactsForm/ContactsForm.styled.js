import styled from "styled-components";

export const Form = styled.form`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const Label = styled.label`
    margin-bottom: 3px;
    :not(:first-child) {
        margin-top: 15px;
    }
`;

export const Input = styled.input`
    padding: 8px;
    border-radius: 5px;
`;

export const Button = styled.button`
    margin-top: 15px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    background-color: #309bff;


    :hover {
        background-color: #5eb1ff;
        box-shadow: 0px 6px 9px 0px #adadad;
    }
`;