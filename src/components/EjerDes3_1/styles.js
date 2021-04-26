import styled from "styled-components";

export const Content = styled.div`
    background-color: salmon;
    padding: 20px;

    ul {
        display: flex;
        justify-content: space-evenly;

        li {
            width: 250px;
            padding: 10px;
            background-color: royalblue;
            color: white;
            list-style: none;
            text-align: center;

            border-radius: 15px;
        }

        li:hover {
            background-color: blue;
        }
    }
`;
