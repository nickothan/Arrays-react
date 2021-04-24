import styled from "styled-components";

export const Content = styled.div`
    background: royalblue;
    padding: 20px;
    text-align: center;
    color: white;
    ul {
        display: flex;

        justify-content: space-evenly;

        li {
            width: 200px;
            padding: 5px;
            background-color: red;
            list-style: none;
            border-radius: 10px;
        }
        li:hover {
            padding: 7px;
            background-color: salmon;
        }
        li:active {
            padding: 15px;
        }
    }
`;
