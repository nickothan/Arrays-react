import styled from "styled-components";

export const Content = styled.div`
    background-color: salmon;
    padding: 20px;

    ul {
        display: flex;
        justify-content: space-evenly;

        .estudiante {
            width: 280px;
            padding: 10px;
            background-color: royalblue;
            color: white;
            list-style: none;
            text-align: center;

            border-radius: 15px;

            ul {
                display: flex;
                justify-content: space-evenly;

                li {
                    width: 100px;
                    padding: 5px;
                    background-color: salmon;
                    color: white;
                    list-style: none;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                }

                li:hover {
                    background-color: red;
                }
            }
        }

        .estudiante:hover {
            background-color: blue;
        }
    }
`;
