import styled from 'styled-components';

export const Container = styled.div`
    
    position: relative;
    width: 100%;
    height: 85vh;
    color: #ffffff;
    
    h1 {
        margin-left: 2%;
        margin-top: 20vh;
        font-weight:lighter;
        font-size:5.5rem;
        opacity: 0; 
        animation: moverBanner 1s 0.9s forwards;
    }
    .Main-wrapper {
        position: absolute;
        margin-left: 8%;
        margin-right: 8%;
        height: 50vh;
    }
    .img-wrapper {
        width: 100%;
        height: 100%;
    }
    .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    a {
        text-decoration: none;
        color: #ffffff;
        padding: 1rem 3rem;
        background-color: #4e6bbb;
        font-size: 1rem;
        opacity: 0;
        animation: moverBanner 1s 0.9s forwards;
    }
    a:hover {
        transition: 2s;
        background: #355C7D; 
        background:  #C06C84;
    }
    p {
        margin-left: 2%;
        width: 550px;
        font-size: 1.5rem;
        font-weight:lighter;
        opacity: 0;
        animation: moverBanner 1s 0.7s forwards;
    }
    //
    @keyframes moverBanner {
    0%{
        transform: translateY(10rem) rotateY(-30deg);
    }
    100%{
        transform: translateY(0) rotateY(0);
        opacity: 1;
    }
}
    @media screen and (max-width:1357px) {

        .main-itens p {
            text-align: center;
            font-size: 2rem;
            font-weight:600;
        }
        p {
            margin-left: 2%;
            width: 65%;
            font-weight:lighter;
        }
    }
    @media screen and (max-width:1365px) {
       
        .Main-wrapper {
            margin-left: 2%;
        }
        h1 {
            margin-left: 3.5%;
            font-size:6.5rem;
        }
        .Main-wrapper p {
            font-size: 1.5rem;
        }

    }
    @media screen and (max-width:901px) {
        
        .Main-wrapper {
            margin-left: 2%;
        }
        h1 {
            margin-left: 2.5%;
            font-size:4.5rem;
        }
        .Main-wrapper p {
            font-size: 1.2rem;
        }
    }
    @media screen and (max-width:865px) {
          
        .Main-wrapper {
            margin-left: 2%;
        }
        h1 {
            margin-left: 2.5%;
            font-size:4.5rem;
        }
        .Main-wrapper p {
            font-size: 1.1rem;
        }

    }
    @media screen and (max-width:768px) {
        
        height: 65vh;

        .Main-wrapper {
            margin-left: 2%;
        }
        h1 {
            margin-left: 2.5%;
            font-size:3.5rem;
        }
        .Main-wrapper p {
            font-size: 1rem;
            text-align: left;
        }
    }
    @media screen and (max-width:560px) {
    
        height: 65vh;
        .Main-wrapper {
            margin-left: 2%;
        }
        h1 {
            margin-left: 4%;
            font-size:3.5rem;
        }
        .Main-wrapper p {
            font-size: 0.7rem;
        }
    }
`;