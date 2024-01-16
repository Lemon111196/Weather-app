import styled from "styled-components"
export const LoginCointainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-form{
        /* display: block; */
        /* flex-direction: column; */
        max-width: 350px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        padding: 20px;
        position: absolute;
        top: 270px;

        }
    .login-btn{
        width: 300px;
        padding: .2rem;
        font-weight: 700;
        background-color: rgb(1,183, 255);
        border: none;
        color: white;
        margin-top: 12px;
        border-radius: 8px;
    }
    .login-form input{
        padding: .5rem;
        border-radius: 5px;
        border: 1px solid rgba(128, 128, 128, 0.3);
        width: 300px;
    }
    .login-form h2{
        margin-bottom: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 800;
    }
    .register-box{
        display: flex;
        border: 1px solid rgba(128, 128, 128, 0.3);
        width: 350px ;
        padding: 20px;
        margin-top: 20px;
        position: absolute;
        top: 500px;
    }
    .register{
        font-weight: 700;
        color: #0087ff
    }
    .register-box p{
        margin-left: 10px;
    }
    
`