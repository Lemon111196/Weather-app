import styled from "styled-components"
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    /* border: 1px solid black; */
    background: url('../../../assets/img/anh-nen-thien-nhien-4k_024350402.jpg') no-repeat;
    .card{
        padding: 10px;
    }
    .form-container{
        max-width: 400px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        padding: 20px;
        position: absolute;
        top: 270px;
        left: 550px;
    }
    .input{
        margin-top: 10px;
        width: 340px
    }
    .form-group{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .card-footer{
        display: flex;
        flex-direction: column;
    }
    .btn{
        width: 340px;
    }
.register-box{
    display:flex;
    justify-content: center;
}
.circular{
    display: flex;
    align-items: center;
    border: none
}
`;