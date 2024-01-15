import styled from "styled-components";

export const MenuContainer = styled.div`
    background-color: #CDC9A5;
    width: 30%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #838B83;
    z-index: 88;
    padding: 50px;
    .weather-box img{
         width: 230px;
         height: 230px;
         border-radius: 100%;
    }
    .weather-box {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .navbar{ 
        margin-top: 50px;
    }
    .homepage{
        cursor: pointer;
        transition: margin-left 1s;
        margin-top: 30px;
        font-size: 18px;
        display: flex;
    }
    .homepage:hover{
        margin-left: 12px;
    }
    .homeIcon{
        color: #CC6633;
    }
    .tarot{
        cursor: pointer;
        transition: margin-left 1s;
        margin-top: 30px;
        font-size: 18px;
        display: flex;
    }
    .tarot:hover{
        margin-left: 12px;;
    }
    .magicIcon{
        color: #9966CC;
    }
    .todo{
        cursor: pointer;
        transition: margin-left 1s;
        margin-top: 30px;
        font-size: 18px;
        display: flex;
    }
    .todo:hover{
        margin-left: 12px;
    }
    .todoIcon{
        color:#006699;
    }
`;