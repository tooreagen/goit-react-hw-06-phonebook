import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    :not(:first-child) {
        margin-top: 8px;
    }
`;

export const Button = styled.button`
    padding: 8px;
    border: none;
    border-radius: 5px;
    background-color: #ff2f2f;


    :hover {
        background-color: #ff5e5e;
        box-shadow: 0px 6px 9px 0px #adadad;
    }
`;