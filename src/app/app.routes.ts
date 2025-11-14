import { Routes } from '@angular/router';
import { Game } from 'phaser';
import { Menu } from './menu/menu';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: Menu },
  { path: 'game', component: Game }
];
