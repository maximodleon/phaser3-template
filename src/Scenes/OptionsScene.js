import 'phaser'
import Button from '../Objects/Button'

class OptionsScene extends Phaser.Scene {
    constructor() {
      super('Options')
    }

    preload() {
    }

    create() {
      this.model = this.sys.game.globals.model

      this.text = this.add.text(300, 100, 'Options', { fontSize: 40 })
      this.musicButton = this.add.image(200, 200, 'checkedBox').setInteractive()
      this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 })

      this.soundButton = this.add.image(200, 300, 'checkedBox').setInteractive()
      this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 })

      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Title')

      this.musicButton.on('pointerdown', function() {
         this.model.musicOn = !this.model.musicOn
         this.updateAudio()
      }.bind(this))

      this.soundButton.on('pointerdown', function() {
        this.model.soundOn = !this.model.soundOn
        this.updateAudio()
      }.bind(this))

      this.updateAudio()
    }

    updateAudio() {
       if(this.model.musicOn) {
         this.musicButton.setTexture('checkedBox')
         if(!this.model.bgMusicPlaying){
            this.sys.game.globals.bgMusic.play()
            this.model.bgMusicPlaying = true
         }
       } else {
         this.musicButton.setTexture('box')
         this.sys.game.globals.bgMusic.stop()
         this.model.bgMusicPlaying = false
       }

       if(this.model.soundOn) {
         this.soundButton.setTexture('checkedBox')
       } else {
         this.soundButton.setTexture('box')
       }
    }
}

export default OptionsScene
