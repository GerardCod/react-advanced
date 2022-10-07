import { Reducer, useReducer, useState } from "react";

interface CounterState {
    counter: number;
    prev: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    prev: 0,
    changes: 0
}

interface Props {
    initialValue?: number;
}

type CounterAction = { type: 'increaseBy', payload: { value: number } } |
{ type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case "reset":
            return {
                counter: 0,
                prev: 0,
                changes: 0
            };
        case "increaseBy":
            return {
                counter: state.counter + action.payload.value,
                prev: state.counter,
                changes: state.changes + 1
            };
        default:
            return state;
    }

}

export const CounterReducerComponent = ({ initialValue = 0 }: Props) => {
    const [state, dispatch] = useReducer<Reducer<CounterState, CounterAction>>(counterReducer, INITIAL_STATE);

    const handleClick = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } });
    }

    const handleReset = () => {
        dispatch({ type: 'reset' });
    }

    return (
        <div>
            <h1>Counter Reducer Component</h1>
            <pre>
                { JSON.stringify(state, null, 2) }
            </pre>
            <button onClick={() => handleReset()}>Reset</button>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
            <button onClick={() => handleClick(10)}>+10</button>
        </div>
    )
}
