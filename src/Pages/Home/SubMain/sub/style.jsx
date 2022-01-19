import styled from "styled-components";

export const Container = styled.div`
    
    position:relative;
    color: #ffffff;
    width: 100%;
    height: 40vh;
    
    .wrapper {
        background-color:#480e63;
    }
    .text-wrapper {
        display: flex;
        justify-content: center;
    }
    h1 {
        font-weight: lighter;
    }
    .btn-sub {
        margin-top:10px;
        margin-left: 100px;
        text-align: center;
        text-decoration: none;
        padding: 2vh 2vh;
        border-radius: 10px;
        background-color:  #4e6bbb;
        color: #f5f4f4;
    }
    .btn-wrapper:hover {
        background: #355C7D; 
        background:  #C06C84;
        transition: 2s;
    }
    @media screen and (max-width: 1350px) {
        h1 {
            text-align:center;
        }
    }
    @media screen and (max-width: 768px) {
        h1 { 
        font-size: 2rem;
        }
    }
    @media screen and (max-width: 550px) {
        background-color: #4e6bbb34;
        h1 {
        font-size: 1.6rem;
        }
    }
`;