import styled from "styled-components";

export const Content = styled.div`
    background-color: salmon;
    padding: 15px 20px;

    .tablas {
        margin: auto;
        max-width: 500px;
        padding 10px;
        background-color: royalblue;
        color: white;
        border-radius: 15px;

        display: flex;
        justify-content: space-evenly;

        ul{
            

            li{
                margin:auto;
                list-style: none;
                padding: 5px 10px;
                width:190px;
                background-color: salmon;
                text-align: center;
            }

            li:hover{
                background-color: red;
            }
        }
    }
`;
