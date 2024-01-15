import CurrentLocation from "../../components/CurrentLocation";
import { HomepageContainer } from "./style";

export default function Homepage() {
  return (
    <HomepageContainer>
      <div className="crr">
          <CurrentLocation></CurrentLocation>
      </div>
    </HomepageContainer>
  )
}
