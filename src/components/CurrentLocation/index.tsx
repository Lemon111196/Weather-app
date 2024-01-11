import { useEffect, useState } from 'react'
import { CurrentLocationContainer } from './style'
import sun from '../../assets/icons/sun.png';
import storm from '../../assets/icons/storm.png'
import snow from '../../assets/icons/snow.png'
import moment from 'moment';
import { MenuItem, Select } from '@mui/material';
export default function CurrentLocation() {
  const [selectLocation, setSelectLocation] = useState<any>('');
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLocation(e.target.value);
  };
  const getWeatherImage = () => {
    switch (selectLocation) {
      case 'Hà Nội':
        return   <div><img src={sun} alt="Mặt trời" /><p>Nhiệt độ 25°C ~ 30°C</p></div>     
      case 'Hồ Chí Minh':
        return <div><img src={storm} alt="Mây mưa" /> <p>Nhiệt độ 18°C ~ 25°C</p></div>
      case 'Hokkaido':
        return <div><img src={snow} alt="Tuyết" /> <p>Nhiệt độ -10°C ~ -2°C</p></div>;
      default:
        return null;
    }
  };
  const getFormatDateTime = () => 
    moment(new Date()).format('llll');
    const [calendar, setCalendar] = useState(getFormatDateTime());
    useEffect(() => {
      const intervalID = setInterval(() => {
        setCalendar(getFormatDateTime());
      }, 1000);
      return () => clearInterval(intervalID);
    })
  return (
    <CurrentLocationContainer>
      <label>Chọn địa điểm </label>
      <Select 
      id="demo-simple-select" 
      value={selectLocation} 
      label="City" 
      onChange = {() => handleLocationChange}>
        <MenuItem value="Hà Nội">Hà Nội</MenuItem>
        <MenuItem value="Hồ Chí Minh">Hồ Chí Minh</MenuItem>
        <MenuItem value="Hokkaido">Hokkaido</MenuItem>
      </Select>
      <div>
        <h2>{selectLocation}</h2>
        {getWeatherImage()}
        <p>{calendar}</p>
      </div>
      
    </CurrentLocationContainer>
  )
}
