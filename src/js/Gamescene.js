import { Scene, Vector } from "excalibur"
import { Player } from './Player.js'
import { BorderL } from './BorderL'
import { BorderR } from './BorderR'
import { BossHead } from './Boss'
import { BossL } from './Bossleft'
import { BossR } from './Bossright'
import { SpacePaper } from './Background'

export class Scene1 extends Scene {

    constructor(){
        super({
            width: 800,
            height: 600   
        })
    }

    onInitialize(){
        const spacePaper = new SpacePaper();
        this.add(spacePaper);

        const wallL = new BorderL();
        this.add(wallL);

        const wallR = new BorderR();
        this.add(wallR);

        const player = new Player();
        this.add(player);
        player.pos = new Vector(400, 480)

        const bossHead = new BossHead();
        this.add(bossHead);
        bossHead.pos = new Vector(400, 25)

        const bossLArm = new BossL();
        this.add(bossLArm);
        bossLArm.pos = new Vector(200, 50)

        const bossRArm = new BossR();
        this.add(bossRArm);
        bossRArm.pos = new Vector(600, 50)
        
    }
}