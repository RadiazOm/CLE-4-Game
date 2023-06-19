import { Actor, Color, CollisionType, DisplayMode, Engine, Physics, Scene, Tile, Vector, vec, Label, } from "excalibur"
import { Background } from './background'
import { Banaan } from "./banaan"




export class Afvalverwijderaar extends Scene {

  game
  engine
  score = 0;
  scoreLabel


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
    this.scoreLabel = new Label({
      text: "Player 1: " + this.score,
      pos: new Vector(5, 10),
      color: Color.Black,
      fontFamily: "Open Sans",
      fontSize: 20,
    })
    this.add(this.scoreLabel)

  }



}




