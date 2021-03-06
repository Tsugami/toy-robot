import { useState, createContext, useContext } from 'react';

export enum Direction {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

export interface DataRobot {
  x: number;
  y: number;
  direction: Direction;
  rotate: number;
}

const directionRotate: Record<Direction, number> = {
  [Direction.NORTH]: 180,
  [Direction.EAST]: 90,
  [Direction.WEST]: 270,
  [Direction.SOUTH]: 0,
};

interface IUseToyRobot {
  areaWidth: number;
  areaHeight: number;
  data: null | DataRobot;
  turnLeft: () => void;
  turnRight: () => void;
  moveForward: () => void;
  place: (x: number, y: number, direction: Direction) => void;
}

export enum IUseToyRobotError {
  INVALID_POSITION,
  INVALID_MOVIMENT,
  ROBOT_NOT_PLACED,
}

interface IUseToyRobotConfig {
  areaWidth: number;
  areaHeight: number;
  onError: (error: IUseToyRobotError) => void;
}

interface IUseToyRobotProviderProps {
  children: React.ReactNode;
  config: IUseToyRobotConfig;
}

const ToyRobotContext = createContext<IUseToyRobot>({} as IUseToyRobot);

export const ToyRobotProvider = ({ config, children }: IUseToyRobotProviderProps): JSX.Element => {
  const [data, setData] = useState<DataRobot | null>(null);

  const turnLeft = () => {
    if (!data) {
      config.onError(IUseToyRobotError.ROBOT_NOT_PLACED);
      return;
    }

    const newDirection =
      data.direction === Direction.NORTH
        ? Direction.WEST
        : data.direction === Direction.EAST
        ? Direction.NORTH
        : data.direction === Direction.SOUTH
        ? Direction.EAST
        : Direction.SOUTH;

    const newRotate = data.rotate - 90;

    setData({ ...data, direction: newDirection, rotate: newRotate });
  };

  const turnRight = () => {
    if (!data) {
      config.onError(IUseToyRobotError.ROBOT_NOT_PLACED);
      return;
    }

    const newDirection =
      data.direction === Direction.NORTH
        ? Direction.EAST
        : data.direction === Direction.EAST
        ? Direction.SOUTH
        : data.direction === Direction.SOUTH
        ? Direction.WEST
        : Direction.NORTH;

    const newRotate = data.rotate + 90;

    setData({ ...data, direction: newDirection, rotate: newRotate });
  };

  const moveForward = () => {
    if (!data) {
      config.onError(IUseToyRobotError.ROBOT_NOT_PLACED);
      return;
    }

    let newX = data.x;
    let newY = data.y;

    switch (data.direction) {
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

    if (newX < 0 || newX >= config.areaWidth || newY < 0 || newY >= config.areaHeight) {
      config.onError(IUseToyRobotError.INVALID_MOVIMENT);
      return;
    }

    setData({ ...data, x: newX, y: newY });
  };

  const place = (x: number, y: number, direction: Direction) => {
    if (x < 0 || x >= config.areaWidth || y < 0 || y >= config.areaHeight) {
      config.onError(IUseToyRobotError.INVALID_POSITION);
      return;
    }

    setData({ x, y, direction, rotate: directionRotate[direction] });
  };

  return (
    <ToyRobotContext.Provider
      value={{
        turnLeft,
        turnRight,
        moveForward,
        place,
        data,
        areaHeight: config.areaHeight,
        areaWidth: config.areaWidth,
      }}>
      {children}
    </ToyRobotContext.Provider>
  );
};

export const useToyRobot = () => useContext(ToyRobotContext);
