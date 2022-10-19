import React from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

/* NOTA IMPORTANTE: Cuando las interfaces son convertidas a código JS, no generan líneas de código. */

export interface Route {
    to: string;
    path: string;
    name: string;
    Component: React.FC | (() => JSX.Element);
}


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy-3'
    },
]