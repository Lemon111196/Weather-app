import { MenuContainer } from "./style";
import HomeIcon from '@mui/icons-material/Home';

import avatarWeather from '../../assets/img/good-weather.jpg'
import { useNavigate } from "react-router-dom";
import ThermostatIcon from '@mui/icons-material/Thermostat';
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
        <div className="weather" onClick={() => navigate('/weather')}>
          <div className="weather">
            <ThermostatIcon className="thermostatIcon"/>
            <p>Weather</p>
          </div>
        </div>
      </div>
    </MenuContainer>
  )
}
