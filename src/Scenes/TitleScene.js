import 'phaser'
import config from '../Config/config'
import Button from '../Objects/Button'

class TitleScene extends Phaser.Scene {
    constructor() {
      super('Title')
    }

    create() {
     this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game')

     // Options
     this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Options', 'Options') 

     // Credits
     this.creditsButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits')

     this.model = this.sys.game.globals.model

     if(this.model.musicOn && !this.model.bgMusicPlaying) {
       this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true })
       this.bgMusic.play()
       this.model.bgMusicPlaying = true
       this.sys.game.globals.bgMusic = this.bgMusic
     }
    }
}

export default TitleScene
