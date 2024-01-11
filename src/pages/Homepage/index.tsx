
import CurrentLocation from "../../components/CurrentLocation";
import Menu from "../../components/Menu";
// import Navbar from "../../components/Nav";
import { HomepageContainer } from "./style";

export default function Homepage() {
  return (
    <HomepageContainer>
        <CurrentLocation></CurrentLocation>
    </HomepageContainer>
  )
}
