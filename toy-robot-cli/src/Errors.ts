export class InvalidPositionError extends Error {}
export class InvalidMovementError extends Error {}
export class InvalidCommandError extends Error {}
export class InvalidArgumentError extends Error {}
export class RobotNotPlaceError extends Error {}

export const errorMessageByError = (error: Error): string => {
  if (error instanceof InvalidPositionError) {
    return 'The robot cannot be placed off the table';
  }

  if (error instanceof InvalidMovementError) {
    return 'The robot cannot advance off the table.';
  }

  if (error instanceof InvalidCommandError) {
    return 'Invalid command';
  }

  if (error instanceof InvalidArgumentError) {
    return error.message;
  }

  if (error instanceof RobotNotPlaceError) {
    return 'The robot has not yet been placed on the table.';
  }

  return 'Unknown error';
};
