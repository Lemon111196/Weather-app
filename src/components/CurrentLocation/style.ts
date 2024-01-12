import styled from "styled-components";

export const CurrentLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    img{
        width: 230px;
        height: 230px;
    }
    h2{
        display:flex;
        justify-content: center;
        font-weight: 700px;
        font-size: 20;
        margin: 20px;
    }
    p{
        display: flex; 
        justify-content: center;
        margin: 20px;
        
    }
    #demo-simple-select{
        width: 300px;
    }
    .temper-text{
        margin-top: 30px
    }
`;