
import Menu from "../../components/Menu";
import Navbar from "../../components/Nav";
import Shuffle from "../../components/Shuffle";
import { TarotContainer } from "./style";

export default function Tarot() {
  return (
    <TarotContainer>
        <Shuffle></Shuffle>
      <div className="setUpComponent">
        <Menu></Menu>
        <Navbar></Navbar>
      </div>
      <div className="body">
        <div className="tarto">
        </div>
      </div>
    </TarotContainer>


  )
}
