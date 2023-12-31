import { Actor, CollisionType, Vector, clamp } from "excalibur";
import { Resources } from "../loader";

export class GooseFloating extends Actor {

    sprite;

    constructor() {
        super({
            width: Resources.GooseFloating.width,
            height: Resources.GooseFloating.height,
        });
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.GooseFloating.toSprite());
        this.sprite = Resources.GooseFloating.toSprite();
        this.body.collisionType = CollisionType.Active;
        this.collider.useCircleCollider(Resources.GooseFloating.width/2);
        this.body.bounciness = 1

        this.pos = new Vector(Math.random()*this.engine.screen.drawWidth, Math.random()*this.engine.screen.drawHeight)
        this.vel = new Vector(Math.random() * 50 - 25, Math.random() * 50 -25 )
       
        
        

        this.enableCapture = true;
        this.pointer.useGraphicsBounds = true;

        this.on("pointerup",(event) => {
            this.kill();
        })

        // this.on("collisionstart",(event)=>{
        //     if(event.other instanceof GooseFloating){
        //         this.vel = new Vector(-this.vel.x, -this.vel.y)
        //     }
        // })

        
    }

    onPostUpdate(){
      

        // this.pos.x = clamp(this.pos.x, 0 + Resources.GooseFloating.width / 2, this.engine.screen.drawWidth - Resources.GooseFloating.width / 2)
        // this.pos.y = clamp(this.pos.y, 0 + Resources.GooseFloating.height / 2, this.engine.screen.drawHeight - Resources.GooseFloating.height / 2)
      
        if(this.pos.x < 0){
            this.pos.x = 0
            this.vel.x = -this.vel.x 
        } 
        if(this.pos.x >this.engine.screen.drawWidth){
            this.pos.x = this.engine.screen.drawWidth
            this.vel.x = -this.vel.x
        }
        if(this.pos.y < 0){
            this.pos.y = 0
            this.vel.y = -this.vel.y
        }
        if(this.pos.y > this.engine.screen.drawHeight){
            this.pos.y = this.engine.screen.drawHeight
            this.vel.y = -this.vel.y
        }


        

        
        // wanneer de vel van de ganz posis is dan willen we de flipper zantel*acceser in de sprite() die willen we op fals hebbe
        //Als het negatief is dan op true

        if (this.vel.x > 0){
            this.sprite.flipHorizontal = false
            this.graphics.use(this.sprite)
        } else {
            this.sprite.flipHorizontal = true
            this.graphics.use(this.sprite)

        }

        this.rotation = 0
        
    }

    gooseKill(player){
        this.kill()
        let index = this.engine.currentScene.goose.indexOf(this)
        this.engine.currentScene.goose.splice(index, 1)
        this.engine.currentScene.scoreTracker[player -1].updateScore(1)
        
        if(this.engine.currentScene.goose.length === 0 ){
            // let highestScore = 0
            // let playerwon = null
            // for (const scoretracker of this.engine.currentScene.scoreTracker) {
            //     if (highestScore < scoretracker.scoreNumber) {
            //         highestScore = scoretracker.scoreNumber
            //         playerwon = scoretracker.player
            //     }
            // }
            let array = []
            for (const score of this.engine.currentScene.scoreTracker) {
                array.push(score.scoreNumber)
            }
            let positions = this.calculateScores(array)
            this.engine.endGame(positions)
        }
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
}


