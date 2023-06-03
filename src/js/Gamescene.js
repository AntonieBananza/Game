import { Scene, Vector } from "excalibur"
import { Player } from './Player.js'
import { BorderL } from './BorderL'
import { BorderR } from './BorderR'
import { BossHead } from './Boss'
import { BossL } from './Bossleft'
import { BossR } from './Bossright'
import { SpacePaper } from './Background'

export class Scene1 extends Scene {

    player
    bossHead
    bossLArm
    bossRArm
    


    constructor(){
        super({
            width: 800,
            height: 600   
        })
    }

    onActivate(ctx){
        this.player.pos = new Vector(400, 480)
        this.bossHead.pos = new Vector(400, 25)
        this.bossLArm.pos = new Vector(200, 50)
        this.bossRArm.pos = new Vector(600, 50)

        this.player.reset()

    }

    onInitialize(){
        const spacePaper = new SpacePaper();
        this.add(spacePaper);

        const wallL = new BorderL();
        this.add(wallL);

        const wallR = new BorderR();
        this.add(wallR);

        this.player = new Player();
        this.add(this.player);
        this.player.pos = new Vector(400, 480)

        this.bossHead = new BossHead();
        this.add(this.bossHead);
        this.bossHead.pos = new Vector(400, 25)

        this.bossLArm = new BossL();
        this.add(this.bossLArm);
        this.bossLArm.pos = new Vector(200, 50)

        this.bossRArm = new BossR();
        this.add(this.bossRArm);
        this.bossRArm.pos = new Vector(600, 50)
        
    }
}