'use strict';

var keys = require("./keys.js");

const DISTANCE = 2;

class Rocket {
  constructor(domElement) {
    this.domElement = domElement;
  }

  moveLeft() {
    var coordX = this.getCoordX();
    if(coordX >= 5) {
      coordX = coordX -= DISTANCE;
    }
    this.setCoordX(coordX);
  }

  moveRight() {
    var coordX = this.getCoordX();
    coordX = coordX += DISTANCE;
    this.setCoordX(coordX);
  }

  getCoordX() {
    return (this.domElement.style.left === "")? 0 : parseInt(this.domElement.style.left);
  }

  setCoordX(value) {
    this.domElement.style.left = value+"px";
  }

  update() {
    if (keys.isPressed("left")) {
      this.moveLeft();
    } else if (keys.isPressed("right")) {
      this.moveRight();
    }
  }
}

module.exports = Rocket;
