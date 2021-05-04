import styled from "styled-components";

export const Content = styled.div`
    background-color: salmon;
    padding: 20px;
    margin: 20px 0;

    .ulCarros {
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;

        .carros {
            display: grid;

            width: 300px;
            margin: 5px;
            padding: 10px;
            background-color: red;
            list-style: none;
            text-align: center;

            border-radius: 15px;

            ul {
                li {
                    margin: 5px;
                    background-color: salmon;
                    list-style: none;
                    border-radius: 5px;
                }
                li:hover {
                    background-color: blue;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
`;
