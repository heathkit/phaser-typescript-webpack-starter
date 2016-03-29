import * as Phaser from 'phaser';

import {fragmentSrc} from '../shaders/example.ts';

export class BootState extends Phaser.State {
  filter: Phaser.Filter;

  create() {
    let headerText = 'Boot State';
    let headerTextStyle = {
      font: '26pt Helvetica',
      fill: '#e0e4f0',
      align: 'center'
    };

    console.log("frag: ", fragmentSrc);
    this.filter = new Phaser.Filter(this.game, null, fragmentSrc);
    this.filter.setResolution(800, 800);

    let sprite = this.add.sprite(0,0);
    sprite.width = 800;
    sprite.height = 800;
    sprite.filters = [this.filter];

    let headText = this.add.text(this.world.centerX, 32, headerText, headerTextStyle);
  }

  update() {
    this.filter.update(this.input.activePointer);
  }
}


