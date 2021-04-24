import styled from "styled-components";

export const Content = styled.div`
    background: royalblue;

    .listados {
        display: flex;
        justify-content: space-evenly;
    }
    ul {
        width: 150px;
        max-width: 250px;
        display: flex;
        flex-flow: column;
    }

    li {
        list-style: none;
        padding: 10px;
        background-color: salmon;
        border: 1px solid blanchedalmond;
    }

    li:hover {
        background: red;
    }

    li:active {
        background: blue;
        color: white;
    }
`;
