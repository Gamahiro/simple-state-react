import { StateType } from '@mockingbirdz/simple-state';
type useGameStateType<T> = [T, (newState: T) => void];
declare const useSimpleState: <T>(state: StateType<T>) => useGameStateType<T>;
export default useSimpleState;
