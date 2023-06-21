import { DisplayMode, Physics, Scene, Timer} from "excalibur"
import { Background } from './background'
import { Banaan } from "./banaan"
import { ScoreTracker } from "./scoreTracker"
import { Cursor } from "./cursor"
import { Resources } from "../loader"
// import { Timer } from "./timer"


export class Afvalverwijderaar extends Scene {

  game
  engine
  score = 0;
  scoreTracker = []
  cursors = [];
  bananen = [];
  time = 10;
  gameMusic = Resources.AfvalMusic;



  constructor() {
    super({
      width: 360,
      height: 180,
      maxFps: 144,
      displayMode: DisplayMode.FitScreen
    })

  }

  onActivate() {
    Physics.useArcadePhysics()
    this.gameMusic.loop = true
    this.gameMusic.play(1.0)
  }

  onDeactivate() {
    this.gameMusic.stop()
  }


  onInitialize(engine) {
    this.game = engine

    const afvalBackground = new Background()
    this.add(afvalBackground)

    for (let i = 0; i < 25; i++) {
      const banaan = new Banaan();
      this.add(banaan);
      this.bananen.push(banaan)
  }
  
   for (let i = 0; i < 4; i++) {
      const scoreTracker = new ScoreTracker(i + 1)
      this.add(scoreTracker)
      this.scoreTracker.push(scoreTracker)
  }

    for(let i = 1; i < 5; i++) {
      let cursor = new Cursor(i)
      this.add(cursor)
      this.cursors.push(cursor)
    }

    const timer = new Timer({
      fcn: () => {
          if (this.time <= 0) {
              timer.cancel()
              this.gameover()
          } else {
              this.time -= 1
              console.log(this.time);
          }
      },
      repeats: true,
      interval: 1000
   })
  this.add(timer)
  timer.start()
  }


  gameover() {
    let highestScore = 0
    let playerwon = null
      for (const score of this.scoreTracker) {
          if (highestScore < score.scoreNumber) {
            highestScore = score.scoreNumber
            playerwon = this.scoreTracker.indexOf(score)
          }
      }
    this.engine.endGame(playerwon + 1)
  }


Button0(player) {
  this.cursors[player - 1].press()
}
  
}