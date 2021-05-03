import styled from "styled-components";

export const Content = styled.div`
    background-color: salmon;

    .ulPerros {
        padding: 20px;
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;

        .perro {
            margin: 5px;
            padding: 20px;
            width: 280px;
            list-style: none;
            background-color: royalblue;
            border-radius: 20px;

            li {
                margin: 3px;
                background-color: blue;
                text-align: center;
                border-radius: 3px;
                list-style: none;

                :hover {
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
`;
