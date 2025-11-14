import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Phaser from 'phaser';
import { BootScene } from './game/phaser/scenes/BootScene';
import { MainScene } from './game/phaser/scenes/MainScene';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gameCanvas', { static: false })
  gameCanvas!: ElementRef<HTMLCanvasElement>;

  game!: Phaser.Game;

  ngAfterViewInit(): void {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      canvas: this.gameCanvas.nativeElement,
      parent: null,
      scene: [BootScene, MainScene],
      physics: {
        default: 'arcade',
        arcade: { debug: false }
      }
    };

    this.game = new Phaser.Game(config);
  }
}
