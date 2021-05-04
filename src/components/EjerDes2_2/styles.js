import styled from "styled-components";

export const Content = styled.div`
    background-color: salmon;
    padding: 15px 20px;
    margin: 20px 0;

    .bus {
        margin: auto;
        background-color: royalblue;
        width: 490px;
        padding: 10px;
        text-align: center;
        color: white;
        border-radius: 15px;
        display: grid;
        grid-gap: 10px;

        .tablaSillas {
            display: flex;
            justify-content: space-evenly;

            ul {
                li {
                    margin-bottom: 5px;
                    width: 100px;
                    background-color: salmon;
                    list-style: none;
                    border-radius: 8px;
                }
                li:hover {
                    background-color: red;
                    cursor: pointer;
                }
                li:active {
                    background-color: blue;
                }
            }
        }
    }
`;
