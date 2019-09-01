import 'phaser'
import logoImage from '../assets/logo.png'

class BootScene extends Phaser.Scene {
   constructor() {
     super('Boot')
   }

   preload() {
     this.load.image('logo', logoImage)
   }

   create() {
     this.scene.start('Preloader')
   }
}

export default BootScene
