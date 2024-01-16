import { TextField } from "@mui/material";
import styled from "styled-components";

export const TodoContainer = styled.div`
    display: relative;
    .body{
        position: absolute;
        left: 750px;
        top: 200px;
    }
    #outlined-basic{
        width: 300px;
        margin-right: 20px;
    }
    .content{
        display: flex;
    }
    .btn{
        margin-left: 20px;
    }
    .singleTodo{
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px
    }
    .edit{
        color: orange;
        cursor: pointer;
    }
    .delete{
        color: red;
        cursor: pointer;
    }
    
`;
export const TextFieldStyle = styled(TextField)``;