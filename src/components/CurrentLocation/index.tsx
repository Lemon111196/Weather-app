import { useEffect, useState } from 'react'
import { CurrentLocationContainer } from './style'
import sun from '../../assets/icons/sun.png';
import storm from '../../assets/icons/storm.png'
import snow from '../../assets/icons/snow.png'
import moment from 'moment';
export default function CurrentLocation() {
  const [selectLocation, setSelectLocation] = useState<any>('');
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLocation(e.target.value);
  };
  const getWeatherImage = () => {
    switch (selectLocation) {
      case 'Hà Nội':
        return <img src={sun} alt="Mặt trời" />
      case 'Hồ Chí Minh':
        return <img src={storm} alt="Mây mưa" />;
      case 'Hokkaido':
        return <img src={snow} alt="Tuyết" />;
      default:
        return null;
    }
  };
  const getFormatDateTime = () => 
    moment(new Date()).format('LLLL');
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
      <select value={selectLocation} onChange={handleLocationChange}>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        <option value="Hokkaido">Hokkaido</option>
      </select>
      <div>
        <h2>{selectLocation}</h2>
        {getWeatherImage()}
        <p>{calendar}</p>
      </div>
      
    </CurrentLocationContainer>
  )
}
