import { DisplayMode, Scene, Timer} from "excalibur"
import { Background } from './background'
import { Banaan } from "./banaan"
import { ScoreTracker } from "./scoreTracker"
import { Cursor } from "./cursor"
// import { Timer } from "./timer"


export class Afvalverwijderaar extends Scene {

  game
  engine
  score = 0;
  scoreTracker = []
  cursors = [];
  bananen = [];
  time = 25;



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
              this.gameover()
              timer.cancel()
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
  this.engine.endGame()
  }



Button0(player) {
  this.cursors[player - 1].press()
}
  
}