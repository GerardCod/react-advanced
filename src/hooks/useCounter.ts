import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const useCounter = (initialValue: number) => {
    const [counter, setCounter] = useState<number>(initialValue);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);
    const timeline = gsap.timeline();

    useEffect(() => {

        if (counter >= MAXIMUM_COUNT) {
            console.log('%cSe llegó al valor máximo', 'color: green; background-color: black;');

            timeline.to(elementToAnimate.current, { y: -10, duration: .7, ease: 'ease.out' })
                .to(elementToAnimate.current, { y: 0, duration: .5, ease: 'bounce.out' })
                .play();
        }

    }, [counter])

    const handleClick = (value: number) => {

        setCounter(prev => Math.min(prev + value, MAXIMUM_COUNT))
    }

    return {
        counter,
        elementToAnimate,
        handleClick
    }

};