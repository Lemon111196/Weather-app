
import CurrentLocation from "../../components/CurrentLocation";
import Menu from "../../components/Menu";
import Navbar from "../../components/Nav";
import { HomepageContainer } from "./style";

export default function Homepage() {
  return (
    <HomepageContainer>
      <div className="setupComponent">
        <div className="header">
          <Menu></Menu>
          <Navbar></Navbar>
        </div>
        <div className="body">
          <CurrentLocation></CurrentLocation>
        </div>
      </div>
    </HomepageContainer>
  )
}
