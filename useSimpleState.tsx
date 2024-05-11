import { useState, useEffect } from 'react'
import { StateType } from '@mockingbirdz/simple-state'

type useGameStateType<T> = [T, (newState: T) => void]

// wrapper for gamestate to react state, ensuring rerenders on update

const useSimpleState = <T,>(state: StateType<T>): useGameStateType<T> => {

    const {state: getSimpleState, updateState: updateSimpleState, EventEmitter: eventEmitter} = state
    const [reactState, setReactState] = useState(getSimpleState())
    
    useEffect(() => {
        const handleUpdate = (newState: ReturnType<typeof getSimpleState>) => {
            setReactState(newState)
        }

        eventEmitter.addEvent('update', handleUpdate)

        return () => {
            eventEmitter.removeEvent('update', handleUpdate)
        }
    }, [])

    const updateState = (newState: ReturnType<typeof getSimpleState>) => {
        updateSimpleState({ ...getSimpleState(), ...newState })
        setReactState(getSimpleState())
    }

    return [reactState, updateState]
}

export default useSimpleState