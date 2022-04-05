import { InvalidArgumentError } from './Errors';
import { Direction } from './ToyRobot';

export const validatePlaceArgs = (x: any, y: any, direction: any): [number, number, Direction] => {
  const xNum = Number(x);
  const yNum = Number(y);
  const correctyDirection = isDirection(direction);

  if (!isNumber(xNum)) {
    throw new InvalidArgumentError(`Invalid X position, only numbers are allowed`);
  }

  if (!isNumber(yNum)) {
    throw new InvalidArgumentError(`Invalid Y position, only numbers are allowed`);
  }

  return [xNum, yNum, correctyDirection];
};

const isNumber = (value: number): value is number => {
  const val = Number(value);

  return typeof val === 'number' && !isNaN(val);
};

const isDirection = (value: any): Direction => {
  const val = String(value).toUpperCase();

  const direction =
    val === Direction.NORTH
      ? Direction.NORTH
      : val === Direction.EAST
      ? Direction.EAST
      : val === Direction.SOUTH
      ? Direction.SOUTH
      : val === Direction.WEST
      ? Direction.WEST
      : val === Direction.NORTH
      ? Direction.NORTH
      : null;

  if (direction) {
    return direction;
  }

  throw new InvalidArgumentError(`Invalid Direction, only NORTH, SOUTH, EAST and WEST are allowed`);
};
