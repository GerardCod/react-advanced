import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

const MAXIMUM_COUNT = 10;

interface Props {
    initialValue?: number;
}

interface State {
    counter: number;
    clicks: number;
}

export const Counter = ({ initialValue = 0 }: Props) => {
    const [{ counter, clicks }, setCounter] = useState<State>({
        counter: initialValue,
        clicks: 0
    })
    const counterElement = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {

        if (counter <= MAXIMUM_COUNT) return;
        
        console.log('%cSe llegó al valor máximo', 'color: green; background-color: black;');
        
        const timeline = gsap.timeline();

        timeline.to(counterElement.current, {y: -10, duration: 3, ease: 'ease.out'})
                .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});

    }, [counter])

    const handleClick = (value: number) => {

        setCounter(prev => ({ counter: Math.min(prev.counter + value, MAXIMUM_COUNT), clicks: prev.clicks + 1 }))
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <h2 ref={counterElement}>Clicks: {clicks}</h2>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
