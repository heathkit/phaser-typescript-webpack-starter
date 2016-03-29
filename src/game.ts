/// <reference path="../typings/browser.d.ts" />
/// <reference path="../phaser.d.ts" />

// Hack to get around webpack config issue.
import * as PIXI from 'pixi.js';
import * as p2 from 'p2';
window.PIXI = PIXI;
window.p2 = p2;
import * as Phaser from 'phaser';

import BootState from './states/boot.ts';

class Game extends Phaser.Game {
	constructor() {
    let width = document.documentElement.clientWidth > 768 ? 768 : document.documentElement.clientWidth
    let height = document.documentElement.clientHeight > 1024 ? 1024 : document.documentElement.clientHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)

    this.state.start('Boot')
  }
}

new Game()
