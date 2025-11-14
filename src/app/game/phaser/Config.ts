import Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';
import { MainScene } from './scenes/MainScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container', // Phaser erstellt Canvas
  scene: [BootScene, MainScene],
  physics: { default: 'arcade', arcade: { debug: false } },
  backgroundColor: '#1d1d1d',
};

