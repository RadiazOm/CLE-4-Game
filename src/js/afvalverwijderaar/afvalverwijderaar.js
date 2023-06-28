import { DisplayMode, Label, Physics, Scene, Timer, Vector} from "excalibur"
import { Background } from './background'
import { Banaan } from "./banaan"
import { ScoreTracker } from "./scoreTracker"
import { Cursor } from "./cursor"
import { Resources } from "../loader"
import afvalMusic from "../../sounds/one_0.mp3"
import { UI } from "../UI"

// import { Timer } from "./timer"


export class Afvalverwijderaar extends Scene {

  game
  engine
  score = 0;
  scoreTracker = []
  cursors = [];
  bananen = [];
  time = 10;
  gameMusic = new Audio(afvalMusic)
  gameOver = true;



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
    this.countdown()
  }

  onDeactivate() {
    this.gameMusic.pause()
  }


  onInitialize(engine) {
    this.game = engine

    const afvalBackground = new Background()
    this.add(afvalBackground)

    for (let i = 0; i < 30; i++) {
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

  }

  beginGame() {
    this.gameOver = false
    let ui = new UI()

    let label = new Label({
      pos: new Vector(this.engine.screen.drawWidth / 2, 10),
      text: `${this.time}s`,
      font: ui.spriteFont
    })
    label.anchor = new Vector(0.5,0.5)
    this.add(label)

    const timer = new Timer({
      fcn: () => {
          if (this.time <= 0) {
              timer.cancel()
              this.gameover()
          } else {
              this.time -= 1
              label.text = `${this.time}s`
              console.log(this.time);
          }
      },
      repeats: true,
      interval: 1000
   })
  this.add(timer)
  timer.start()
  }

  countdown() {
    let time = 3

    const ui = new UI()

    let label = new Label({
        text: time.toString(),
        pos: new Vector(this.engine.screen.drawWidth / 2 - 16, this.engine.screen.drawHeight / 2 - 16),
        font: ui.spriteFont
    })
    this.add(label)
    const timer = new Timer({
        fcn: () => {
            if (time <= 1) {
                this.beginGame()
                timer.cancel()
                label.kill()
            } else {
                time -= 1
                label.text = time.toString()
            }
        },
        repeats: true,
        interval: 1000
    })
    this.add(timer)
    timer.start()
}


  gameover() {
    // let highestScore = 0
    // let playerwon = null
    //   for (const score of this.scoreTracker) {
    //       if (highestScore < score.scoreNumber) {
    //         highestScore = score.scoreNumber
    //         playerwon = this.scoreTracker.indexOf(score)
    //       }
    //   }
    let array = []
    for (const score of this.scoreTracker) {
        array.push(score.scoreNumber)
    }
    let positions = this.calculateScores(array)
    this.engine.endGame(positions)
  }

  calculateScores(scores) {
    let positions = [];
    let scoreChecker = []
    for (const score of scores) {
        scoreChecker.push(score)
    }
    for (let i = 0; i < 4; i++) {
        let playerwon = null
        let highestScore = -Infinity;
        for (let i = 0; i < 4; i++) {
            if (scoreChecker[i] > highestScore) {
                highestScore = scoreChecker[i]
                playerwon = i + 1
            }
        }
        positions.push(playerwon)
        scoreChecker[scoreChecker.indexOf(highestScore)] = -1
    }
    return positions
}


Button0(player) {
  this.cursors[player - 1].press()
}
  
}