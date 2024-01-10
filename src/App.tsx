import { useRoutes } from "react-router-dom"
import routes from "./routes/routes";
import './assets/styles/App.scss';

function App(){
  const router = useRoutes(routes);
  return (
    <div className="app-container">{router}</div>
  )
}

export default App
