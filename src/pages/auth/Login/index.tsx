import { useEffect, useState } from "react";
import { LoginContainer } from "./style";
import { Button, CircularProgress, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      try {
        const res = await fetch(`http://localhost:5174/${username}`);
        const resp = await res.json();

        if (Object.keys(resp).length === 0) {
          toast.error('Please Enter valid username');
        } else {
          if (resp.password === password) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);
            // Proceed to the next step or navigate after a delay
            setTimeout(() => {
              navigate('/');
            }, 2000); // Adjust the delay as needed
          } else {
            toast.error('Please enter valid credentials');
          }
        }
      } catch (err) {
        toast.error('Login Failed');
      } finally {
        setLoading(false);
      }
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
    <LoginContainer>
      <div >
        <form className="form-container">
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <TextField
                  className="input"
                  id="filled-basic"
                  size="small"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={e => setUsername(e.target.value)} />
                <TextField
                  className="input"
                  id="filled-basic"
                  size="small"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="card-footer">
              <Button className="btn"
                variant="outlined"
                disabled={loading}
                onClick={ProceedLogin}
              >
                {loading ? <CircularProgress size={20} /> : 'Sign in'}
              </Button>
              <div className="register-box">
                <p>Don't you have any account?</p>
                <Link to="/register" className="register">Register</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </LoginContainer>
  )
}
