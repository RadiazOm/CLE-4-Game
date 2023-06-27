import { Actor, Label, Scene, Vector, SpriteSheet, Animation, range } from "excalibur";
import { Resources } from "./loader";
import { UI } from "./UI";
import victoryMusic from "../sounds/victory.mp3"

export class FinalScore extends Scene {

    scores;
    positions = [];
    ui = new UI();
    goose = [Resources.BluePortrait.toSprite(), Resources.YellowPortrait.toSprite(), Resources.GreenPortrait.toSprite(), Resources.RedPortrait.toSprite()];
    victoryMusic = new Audio(victoryMusic)
    crown;

    constructor() {
        super()
    }

    onActivate(data) {
        this.victoryMusic.play()
        this.scores = data.data

        console.log(this.scores)
        this.calculateScores()
        console.log(this.scores)
        this.createfirstgoose(this.positions[0])
        this.createsecondgoose(this.positions[1])
        this.createthirdgoose(this.positions[2])
        this.createfourthgoose(this.positions[3])
        this.add(this.crown)
    }

    onInitialize(engine) {
        this.victoryMusic.loop = true
        this.engine = engine
        let bg = new Actor({
            pos: new Vector(0,0),
            anchor: new Vector(0,0)
        })
        bg.graphics.use(Resources.EndBackground.toSprite())
        this.add(bg)
        this.crown = new Actor({
            pos: new Vector(175, -10)
        })
        let crownSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.AnimatingCrown,
            grid: { rows: 1, columns: 8, spriteWidth: 48, spriteHeight: 36}
        })

        const sparking = Animation.fromSpriteSheet(crownSpriteSheet, range(0, 8), 80)
        this.crown.graphics.use(sparking)
    }

    onPostUpdate() {
        if (this.crown.pos.y < 48) {
            this.crown.pos.y += 0.1
        }
    }

    getPlayerGoose(player) {
        let playerGoose
        switch (this.engine.getColour(player)) {
            case 0:
                playerGoose = Resources.BluePortrait.toSprite()
                break;
            case 1:
                playerGoose = Resources.YellowPortrait.toSprite()
                break;
            case 2:
                playerGoose = Resources.GreenPortrait.toSprite()
                break; 
            case 3:
                playerGoose = Resources.RedPortrait.toSprite()
                break;   
        }
        return playerGoose;
    }

    createfirstgoose(player) {
        let label = new Label({
            pos: new Vector(165, 98),
            text: this.scores[player - 1].toString(),
            font: this.ui.spriteFont
        })
        label.anchor = new Vector(0,5.0,5)
        let goose = new Actor({
            pos: new Vector(175, 50)
        })
        goose.graphics.use(this.getPlayerGoose(player))
        this.add(goose)
        this.add(label)
    }

    createsecondgoose(player) {
        let label = new Label({
            pos: new Vector(97, 120),
            text: this.scores[player - 1].toString(),
            font: this.ui.spriteFont
        })
        label.anchor = new Vector(0,5.0,5)
        let goose = new Actor({
            pos: new Vector(107, 72)
        })
        goose.graphics.use(this.getPlayerGoose(player))
        this.add(goose)
        this.add(label)
    }

    createthirdgoose(player) {
        let label = new Label({
            pos: new Vector(233, 128),
            text: this.scores[player - 1].toString(),
            font: this.ui.spriteFont
        })
        label.anchor = new Vector(0,5.0,5)
        let goose = new Actor({
            pos: new Vector(243, 80)
        })
        goose.graphics.use(this.getPlayerGoose(player))
        this.add(goose)
        this.add(label)
    }

    createfourthgoose(player) {
        let label = new Label({
            pos: new Vector(20, 158),
            text: this.scores[player - 1].toString(),
            font: this.ui.spriteFont
        })
        label.anchor = new Vector(0,5.0,5)
        let goose = new Actor({
            pos: new Vector(30, 110)
        })
        goose.graphics.use(this.getPlayerGoose(player))
        this.add(goose)
        this.add(label)
    }

    calculateScores() {
        let scoreChecker = []
        for (const score of this.scores) {
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
            this.positions.push(playerwon)
            scoreChecker[scoreChecker.indexOf(highestScore)] = -1
        }
        return this.positions
    }
}