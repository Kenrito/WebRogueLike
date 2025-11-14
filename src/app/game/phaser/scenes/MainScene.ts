import Phaser from 'phaser';

export class MainScene extends Phaser.Scene {
  player!: Phaser.Physics.Arcade.Sprite;
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.player = this.physics.add.sprite(400, 300, 'player');
    this.player.setCollideWorldBounds(true);

    this.cursors = this.input!.keyboard!.createCursorKeys();
  }

  override update() {
    const speed = 200;

    this.player.setVelocity(0);

    if (this.cursors.left?.isDown) {
      this.player.setVelocityX(-speed);
    } 
    else if (this.cursors.right?.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.cursors.up?.isDown) {
      this.player.setVelocityY(-speed);
    }
    else if (this.cursors.down?.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}
