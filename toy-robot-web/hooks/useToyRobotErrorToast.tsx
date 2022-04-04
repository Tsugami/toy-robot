import { useToast } from '@chakra-ui/react';
import { IUseToyRobotError } from './useToyRobot';

const ERROR_MESSAGE: Record<IUseToyRobotError, string> = {
  [IUseToyRobotError.INVALID_MOVIMENT]: 'O robô não pode avançar para fora da mesa.',
  [IUseToyRobotError.ROBOT_NOT_PLACED]: 'O robô ainda não foi colocado na mesa.',
  [IUseToyRobotError.INVALID_POSITION]: 'O robô não pode ser colocado fora da mesa.',
};

const ERROR_TITLE: Record<IUseToyRobotError, string> = {
  [IUseToyRobotError.INVALID_MOVIMENT]: 'Cuidado!',
  [IUseToyRobotError.ROBOT_NOT_PLACED]: 'Oops!',
  [IUseToyRobotError.INVALID_POSITION]: 'Hey!',
};

export const useToyRobotErrorToast = () => {
  const toast = useToast();

  return (error: IUseToyRobotError) => {
    const message = toast({
      title: ERROR_TITLE[error],
      description: ERROR_MESSAGE[error],
      status: 'error',
      duration: 9000,
      isClosable: true,
    });
  };
};
