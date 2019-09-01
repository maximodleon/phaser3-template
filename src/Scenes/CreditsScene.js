import 'phaser'
import config from '../Config/config'

class CreditsScene extends Phaser.Scene {

   constructor() {
     super('Credits')
   }

   create(){
     this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' })
     this.madeBy = this.add.text(0, 0, 'Created by: xXx', { fontSize: '26px', fill: '#fff' })
     this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height)

     Phaser.Display.Align.In.Center(
       this.creditsText,
       this.zone
     )

     Phaser.Display.Align.In.Center(
       this.madeBy,
       this.zone
     )

     this.madeBy.setY(1000)

     this.creditsTween = this.tweens.add({
        targets: this.creditsText,
        y: -100,
        ease: 'Power1',
        duration: 3000,
        delay: 1000,
        onComplete: function(){
          this.destroy
        }
     })

     this.madeByTween = this.tweens.add({
        targets: this.madeBy,
        y: -300,
        ease: 'Power1',
        duration: 8000,
        delay: 1000,
        onComplete: function() {
          this.madeByTween.destroy
          this.scene.start('Title')
        }.bind(this)
     })
   }
}

export default CreditsScene
