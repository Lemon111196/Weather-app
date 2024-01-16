import chariot from '../../assets/img/chariot.png'
import death from '../../assets/img/death.png'
import devil from '../../assets/img/devil.png'
import emperor from "../../assets/img/emperor.png"
import empress from "../../assets/img/empress.png"
import fool from "../../assets/img/fool.png"
import hangedMan from "../../assets/img/hanged man.png"
import hermit from "../../assets/img/hermit.png"
import hireophant from "../../assets/img/hireophant.png"
import judgement from "../../assets/img/judgement.png"
import justice from "../../assets/img/justice.png"
import lover from "../../assets/img/lover.png"
import magician from "../../assets/img/magician.png"
import moon from "../../assets/img/moon.png"
import star from "../../assets/img/star.png"
import strength from "../../assets/img/strength.png"
import sun from "../../assets/img/sun.png"
import temperance from "../../assets/img/temperance.png"
import tower from "../../assets/img/tower.png"
import wheel from "../../assets/img/wheel.png"
import world from "../../assets/img/world.png"
import { useState } from "react";
import { Button } from "@mui/material";
import { ShuffleContainer } from './style'

export default function Shuffle() {
  let card: string[] = [chariot, death, devil, empress, emperor, fool, hangedMan,
    hermit, hireophant, judgement, justice,
    lover, magician, moon, star, strength, sun, temperance, tower,
    wheel, world
  ]
  const [image, setImage] = useState<string[]>([]);
  const handleShuffle = () => {
    const shuffleImages = card.sort(() => Math.random() - 0.5).slice(0, 3);
    setImage(shuffleImages)
  }
  return (
    <ShuffleContainer>
      <div className="body">
        <h1>What will your future be?</h1>
        <div className='image'>
          {image.map((image, index) => (
            <img key={index} src={image} alt={`Random ${index + 1}`} />
          ))}
          <div className="click">
            <Button variant="contained" onClick={handleShuffle}>Good luck!</Button>
          </div>
        </div>

      </div>
    </ShuffleContainer>
  )
}
