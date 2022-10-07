import { useCounter } from "../hooks/useCounter";

const MAXIMUM_COUNT = 10;

interface Props {
    initialValue?: number;
}

export const CounterHook = ({ initialValue = 0 }: Props) => {
    const { counter, elementToAnimate, handleClick } = useCounter(initialValue);    

    return (
        <>
            <h1 ref={elementToAnimate}>Counter: {counter}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
