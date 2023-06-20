import { DisplayMode, Scene } from "excalibur"
import { Background } from './background'
import { Banaan } from "./banaan"
import { ScoreTracker } from "./scoreTracker"




export class Afvalverwijderaar extends Scene {

  game
  engine
  score = 0;
  scoreTracker = []


  constructor() {
    super({
      width: 360,
      height: 180,
      maxFps: 144,
      displayMode: DisplayMode.FitScreen
    })

  }



  onInitialize(engine) {
    this.game = engine

    const afvalBackground = new Background()
    this.add(afvalBackground)

    for (let i = 0; i < 15; i++) {
      const banaan = new Banaan();
      this.add(banaan);
  }
  
   for (let i = 0; i < 4; i++) {
      const scoreTracker = new ScoreTracker(i + 1)
      this.add(scoreTracker)
      this.scoreTracker.push(scoreTracker)
  }



}



}
