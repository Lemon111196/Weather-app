import { useState } from "react";
import { LoginCointainer } from "./style";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function index1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate:any = useNavigate();

  const ProceedLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:5174/" + username).then(res => {
        return res.json();
      }).then((resp) => {
        console.log(resp);
        if (Object.keys(resp).length === 0) {
          toast.error("Please Enter valid username");
        } else {
          if (resp.password === password) {
            toast.success('Success')
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);
            Navigate('/')
          } else {
            toast.error('Please enter valid credentials');
          }
        }
      }).catch((err) => {
        toast.error('Login Failed due to:' + err.message);
      })
    }
  }
  const validate = () => {
    let result: boolean = true;
    if (username === '' || username === null) {
      result = false;
      toast.warning('Please enter a username')
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please enter a password')
    }
    return result
  }
  return (
    <LoginCointainer>
      <div >
        <form className="form-container">
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={e => setUsername(e.target.value)} />
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                <div className="card-footer">
                  <Button variant="outlined" onClick={ProceedLogin}>Sign in</Button>
                  <p>Don't you have any account?</p>
                  <Link to="/register" className="register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </LoginCointainer>
  )
}
