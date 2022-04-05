import * as readline from 'readline';

import process from 'process';
import { ToyRobot } from './ToyRobot';
import { validatePlaceArgs } from './validatePlaceArgs';
import { errorMessageByError, InvalidCommandError } from './Errors';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const COMMANDS = `
  What do you want to do?

  PLACE X,Y,F - Place the toy robot on the table in position X,Y and facing (NORTH, SOUTH, EAST or WEST).
  MOVE - Move the toy robot one unit forward in the direction it is currently facing.
  LEFT - Rotate the toy robot 90 degrees to the left without changing the position of the robot.
  RIGHT - Rotate the toy robot 90 degrees to the right without changing the position of the robot.
  REPORT - Report the position of the toy robot as X,Y,F.
  EXIT - Exit the application.
  
`;

const ask = () => {
  const toyRobot = new ToyRobot();

  console.log(COMMANDS);
  rl.on('line', (line) => {
    const [command, ...args] = line.trim().toUpperCase().split(' ');

    try {
      switch (command) {
        case 'PLACE': {
          const [rawX = null, rawY = null, rawF = null] = args?.[0]?.split(',');

          const [x, y, direction] = validatePlaceArgs(rawX, rawY, rawF);
          toyRobot.place(x, y, direction);
          break;
        }
        case 'MOVE':
          toyRobot.moveForward();
          break;
        case 'LEFT':
          toyRobot.turnLeft();
          break;
        case 'RIGHT':
          toyRobot.turnRight();
          break;
        case 'REPORT':
          toyRobot.report();
          break;
        case 'EXIT':
          rl.close();
          break;
        default:
          throw new InvalidCommandError();
      }
    } catch (e) {
      console.log('ERROR:', errorMessageByError(e));
    }
  });
};

ask();
