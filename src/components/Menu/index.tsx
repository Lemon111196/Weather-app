import { MenuContainer } from "./style";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import avatarWeather from '../../assets/img/good-weather.jpg'
import { useNavigate } from "react-router-dom";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
export default function Menu() {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <div className="weather-box">
        <img src={avatarWeather} alt="" />
        <h2>WEATHER APP</h2>
        <h4>React Project</h4>
      </div>
      <div className="navbar">
        <div className="homepage" onClick={() => navigate('/homepage')}>
          <HomeIcon className="homeIcon"></HomeIcon>
          <p>Homepage</p>
        </div>
        <div className="weather" onClick={() => navigate('/tarot')}>
          <div className="tarot">
            <AutoAwesomeIcon className="magicIcon"/>
            <p>Tarot</p>
          </div>
        </div>
        <div onClick={() => navigate ('/todo')}>
          <div className="todo">
            <CheckBoxIcon className="todoIcon"/>
            <p>Todo list</p>
          </div>
        </div>
      </div>
    </MenuContainer>
  )
}
