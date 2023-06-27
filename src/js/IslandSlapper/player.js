import { Actor, Resource, Timer, Vector } from "excalibur";
import { Resources } from "../loader";


export class Player extends Actor {

    player;
    engine;
    lock = false;
    launched = false;
    lost = false;

    constructor(player) {
        super({
            width: 16,
            height: 16
        })
        this.player = player
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.TopdownGoose.toSprite())
        this.setPosition(this.player)

        this.on('collisionstart', (event) => this.collisionEvent(event))
        this.on('exitviewport', (event) => this.lose(event))
    }

    lose() {
        this.lost = true
        this.engine.currentScene.positions.push(this.player)
        this.kill()
    }

    collisionEvent(event) {
        if (event.other.tags.includes('balloon') && !this.children.includes(event.other)) {
            this.lock = true
            console.log(event.other.getAncestors()[0].pos)
            let vector = new Vector(event.other.getAncestors()[0].pos.x,event.other.getAncestors()[0].pos.y)
            let direction = new Vector(this.pos.x - vector.x, this.pos.y - vector.y)
            let normalizedDirection = direction.normalize()
            this.vel = new Vector(normalizedDirection.x * 500, normalizedDirection.y * 500)
            this.launched = true
        }
    }

    setPosition(player) {
        switch (player) {
            case 1:
                this.pos = new Vector(130,50)
                break;
            case 2:
                this.pos = new Vector(220,50)
                break;
            case 3:
                this.pos = new Vector(130,130)
                break;
            case 4:
                this.pos = new Vector(220,130)
                break;
        }
    }

    onPostUpdate() {
        if (this.lock === true) {
            return;
        }
        if (this.player === 1) {
            // let vector = new Vector(Math.round(this.engine.mainController.player1.getXAxis()), Math.floor(this.engine.mainController.player1.getYAxis())).normalize()
            // this.vel = new Vector(vector.x * 100, vector.y * 100)
            this.vel.x = this.engine.mainController.player1.getXAxis() * 100
            this.vel.y = this.engine.mainController.player1.getYAxis() * 100
            let vector2 = new Vector(this.engine.mainController.player1.getXAxis2(), this.engine.mainController.player1.getYAxis2())
            this.rotation = vector2.toAngle() + Math.PI / 2
        }
        if (this.player === 2 && typeof this.engine.mainController.player2 !== 'undefined') {
            this.vel.x = this.engine.mainController.player2.getXAxis() * 100
            this.vel.y = this.engine.mainController.player2.getYAxis() * 100
            let vector = new Vector(this.engine.mainController.player2.getXAxis2(), this.engine.mainController.player2.getYAxis2())
            this.rotation = vector.toAngle() + Math.PI / 2
        }
        if (this.player === 3 && typeof this.engine.mainController.player3 !== 'undefined') {
            this.vel.x = this.engine.mainController.player3.getXAxis() * 100
            this.vel.y = this.engine.mainController.player3.getYAxis() * 100
            let vector = new Vector(this.engine.mainController.player3.getXAxis2(), this.engine.mainController.player3.getYAxis2())
            this.rotation = vector.toAngle() + Math.PI / 2
        }
        if (this.player === 4 && typeof this.engine.mainController.player4 !== 'undefined') {
            this.vel.x = this.engine.mainController.player4.getXAxis() * 100
            this.vel.y = this.engine.mainController.player4.getYAxis() * 100
            let vector = new Vector(this.engine.mainController.player4.getXAxis2(), this.engine.mainController.player4.getYAxis2())
            this.rotation = vector.toAngle() + Math.PI / 2
        }
    }

    swing() {
        if (this.lock === true) {
            return;
        }
        this.lock = true
        this.vel = new Vector(0,0)
        let balloon = new Actor({
            pos: new Vector(0,-10),
            anchor: new Vector(0.5,1),
            width: 5,
            height: 14,
            rotation: 1
        })
        balloon.addTag('balloon')
        balloon.graphics.use(Resources.Balloon.toSprite())
        this.addChild(balloon)
        let swingballoontimer = new Timer({
            fcn: () => {
                balloon.rotation -= 0.2
            },
            interval: 20,
            repeats: true
        })
        this.engine.add(swingballoontimer)
        swingballoontimer.start()
        let killballoontimer = new Timer({
            fcn: () => {
                this.removeChild(balloon)
                swingballoontimer.cancel()
                if (this.launched == false) {
                    this.lock = false
                }
            },
            interval: 200,
            repeats: false
        })
        this.engine.add(killballoontimer)
        killballoontimer.start()
    }
}