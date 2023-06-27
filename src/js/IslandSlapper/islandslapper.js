import { Scene } from "excalibur";
import { Player } from "./player";

export class IslandSlapper extends Scene {
    constructor() {
        super()
    }

    onInitialize() {
        for(let i = 0; i < 4; i++) {
            let goose = new Player(i + 1)
            this.add(goose)
        }
    }
}