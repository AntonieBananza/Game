import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import background from '../images/background.png'
import player from '../images/bow2.png'
import playerLaser from '../images/friendlylaser.png' 
import boss from '../images/bow-1.png'
import enemybullet from '../images/PelletEnemy.png'
import enemybulletgif from '../images/PelletEnemy.gif'
import leftboss from '../images/leftarm.png'
import rightboss from '../images/rightarm.png'
import leftborder from '../images/leftborder.png'
import rightborder from '../images/rightborder.png'
import explosion from '../images/explosion.gif'
import gameover from '../images/GameOver.png'
import startover from '../images/StartOver.png'
import Titlecard from '../images/Titlecard.png'
import StartGame from '../images/startgame.png'
import SpriteSheetLeft from '../images/leftarmsheet.png'
import SpriteSheetRight from '../images/rightarmsheet.png'
import HitBoss from '../images/hitBoss.png'

const Resources = {
    Background: new ImageSource(background),
    Player: new ImageSource(player),
    Plaser: new ImageSource(playerLaser),
    BossHead: new ImageSource(boss),
    BossPellet: new ImageSource(enemybullet),
    BossPelletgif: new ImageSource(enemybulletgif),
    BossL: new ImageSource(leftboss),
    BossR: new ImageSource(rightboss),
    BorderL: new ImageSource(leftborder),
    BorderR: new ImageSource(rightborder),
    Explosion: new ImageSource(explosion),
    GameOver: new ImageSource(gameover),
    StartOver: new ImageSource(startover),
    TitleCard: new  ImageSource(Titlecard),
    StartGame: new ImageSource(StartGame),
    SSLarm: new ImageSource(SpriteSheetLeft),
    SSRarm: new ImageSource(SpriteSheetRight),
    HitBoss: new ImageSource(HitBoss)
}
const ResourceLoader = new Loader([
        Resources.Background, 
        Resources.Player, 
        Resources.Plaser, 
        Resources.BossHead, 
        Resources.BossPellet, 
        Resources.BossPelletgif, 
        Resources.BossL, 
        Resources.BossR, 
        Resources.BorderL, 
        Resources.BorderR,
        Resources.Explosion,
        Resources.GameOver,
        Resources.StartOver,
        Resources.TitleCard,
        Resources.StartGame,
        Resources.SSLarm,
        Resources.SSRarm,
        Resources.HitBoss
])

export { Resources, ResourceLoader }