
import { ToastContainer, toast } from "react-toastify";
import Shuffle from "../../components/Shuffle";
import { TarotContainer } from "./style";
import 'react-toastify/dist/ReactToastify.css';

export default function Tarot() {
  const handleClick = () => {
    toast.error("hello");
  }
  return (
    <TarotContainer>
      <div className="tarto">
        <Shuffle></Shuffle>
        <ToastContainer></ToastContainer>
        <button onClick={handleClick}>Hello</button>
      </div>

    </TarotContainer>


  )
}
