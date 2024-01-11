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
    .homepage{
        cursor: pointer;
        transition: margin-left 0.5s;
        margin-top: 10px;
        font-size: 18px;
        display: flex;
    }
    .weather{
        cursor: pointer;
        margin-top: 20px;
        font-size: 18px;
        display: flex;
        transition: margin-left 1s;
    }
    .homepage:hover{
        margin-left: 2%;
    }
    .navbar{
        margin-top: 20px;
    }
    .weather:hover{
        margin-left: 10px;
    }
    .homeIcon{
        color: #CD853F
    }
    .thermostatIcon{
       color: #FF0033;	
    }
`;