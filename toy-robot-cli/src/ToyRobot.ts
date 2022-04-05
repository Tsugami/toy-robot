/* eslint-disable no-unused-vars */
import { InvalidMovementError, InvalidPositionError, RobotNotPlaceError } from './Errors';

export enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

interface ToyRobotPosition {
  x: number;
  y: number;
  fancing: Direction;
}

interface IToyRobot {
  turnLeft: () => void;
  turnRight: () => void;
  moveForward: () => void;
  place: (x: number, y: number, direction: Direction) => void;
  report(): void;
}

const MAX_X = 5;
const MAX_Y = 5;

export class ToyRobot implements IToyRobot {
  position: ToyRobotPosition | null;

  constructor() {
    this.position = null;
  }

  place(x: number, y: number, direction: Direction): void {
    if (x < 0 || x > MAX_X || y < 0 || y > MAX_Y) {
      throw new InvalidPositionError();
    }

    this.position = {
      x,
      y,
      fancing: direction,
    };
  }

  moveForward(): void {
    if (!this.position) throw new RobotNotPlaceError();

    let newX = this.position.x;
    let newY = this.position.y;

    switch (this.position.fancing) {
      case Direction.NORTH:
        newY--;
        break;
      case Direction.EAST:
        newX++;
        break;
      case Direction.SOUTH:
        newY++;
        break;
      case Direction.WEST:
        newX--;
        break;
    }
    console.log(`${newX},${newY},${this.position.fancing}`);

    if (newX < 0 || newX >= MAX_X || newY < 0 || newY >= MAX_Y) {
      throw new InvalidMovementError();
    }

    this.position.x = newX;
    this.position.y = newY;
  }

  turnLeft(): void {
    if (!this.position) throw new RobotNotPlaceError();

    switch (this.position.fancing) {
      case Direction.NORTH:
        this.position.fancing = Direction.WEST;
        break;
      case Direction.WEST:
        this.position.fancing = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.position.fancing = Direction.EAST;
        break;
      case Direction.EAST:
        this.position.fancing = Direction.NORTH;
        break;
    }
  }

  turnRight(): void {
    if (!this.position) throw new RobotNotPlaceError();

    switch (this.position.fancing) {
      case Direction.NORTH:
        this.position.fancing = Direction.EAST;
        break;
      case Direction.EAST:
        this.position.fancing = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.position.fancing = Direction.WEST;
        break;
      case Direction.WEST:
        this.position.fancing = Direction.NORTH;
        break;
    }
  }

  report(): void {
    if (!this.position) throw new RobotNotPlaceError();

    console.log(`${this.position.x},${this.position.y},${this.position.fancing}`);
  }
}
