import { Reducer, useReducer } from "react";
import { CounterAction, doIncreaseBy, doReset } from "./actions/counterActions";
import { CounterState } from "./interfaces/counterInterfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    prev: 0,
    changes: 0
}

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer<Reducer<CounterState, CounterAction>>(counterReducer, INITIAL_STATE);

    const handleClick = (value: number) => {
        dispatch(doIncreaseBy(value));
    }

    const handleReset = () => {
        dispatch(doReset());
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
