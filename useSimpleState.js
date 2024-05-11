"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
// wrapper for gamestate to react state, ensuring rerenders on update
const useSimpleState = (state) => {
    const { state: getSimpleState, updateState: updateSimpleState, EventEmitter: eventEmitter } = state;
    const [reactState, setReactState] = (0, react_1.useState)(getSimpleState());
    (0, react_1.useEffect)(() => {
        const handleUpdate = (newState) => {
            setReactState(newState);
        };
        eventEmitter.addEvent('update', handleUpdate);
        return () => {
            eventEmitter.removeEvent('update', handleUpdate);
        };
    }, []);
    const updateState = (newState) => {
        updateSimpleState(Object.assign(Object.assign({}, getSimpleState()), newState));
        setReactState(getSimpleState());
    };
    return [reactState, updateState];
};
exports.default = useSimpleState;
