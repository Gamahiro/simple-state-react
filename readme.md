#Simple State React

This is meant to be used as a wrapper with simple state package for use with react. 
    npm i @mockingbirdz/simple-state

To use it you pass a state created with the simple-state library and it will return a react state with an update function.

    const simpleState = ss.create({name: 'fred});
    const [reactState, updateState] = useSimpleState(simpleState)

The array returned by useSimpleState can be used as you would use a regular useState.