/// <reference path="../typings/browser.d.ts" />
/// <reference path="../lib/phaser.d.ts" />

// Hack to get around webpack config issue.
import * as PIXI from 'pixi.js';
import * as p2 from 'p2';
window['PIXI'] = PIXI;
window['p2'] = p2;
import * as Phaser from 'phaser';

import {Game} from './game.ts';

var game = new Game();
game.state.start('boot');
