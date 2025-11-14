import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('player', 'assets/player.png');
  }

  create() {
    this.scene.start('MainScene');
  }
}
