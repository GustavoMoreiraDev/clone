import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 20vh;
    background-color: #480e63;
    color: #ffffff;

    .midias {
        display: flex;
        justify-content: center;
    }
    .midias a {
        margin: 15px;
        color: #ffffff;
        font-size: 1.2rem;
        text-decoration: none;
    }
    .midias a:hover {
        transition: 2s;
        color:#e66224;
    }
    .dados{
        display: flex;
        justify-content: center;
    }
    .dados p {
        margin: 15px;
        cursor: default;
    }
    .dados p:hover {
        transition: 2s;
        color:#e66224;
    }
    @media screen and (max-width:1050px) {
        .dados p {
            margin: 5px;
            font-size: 1rem;
        }
    }
    @media screen and (max-width:768px) {
        .dados p {
            margin: 5px;
            font-size: 0.8rem;
        }
    }
    @media screen and (max-width:550px) {
        .dados p {
        margin: 5px;
        font-size: 0.6rem;
    }
    }
`;