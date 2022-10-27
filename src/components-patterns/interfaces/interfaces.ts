import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export interface ProductImageProps {
    img?: string;
    className?: string;
    style?: CSSProperties
}

export interface ProductTitleProps {
    title?: string;
    className?: string;
    style?: CSSProperties;
}

export interface ProductButtonsProps {
    className?: string;
    style?: CSSProperties;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductCardHOCProps {
    ({children, product}: ProductCardProps): JSX.Element,
    Title: (props: ProductTitleProps) => JSX.Element,
    Image: (props: ProductImageProps) => JSX.Element,
    Buttons: (props: ProductButtonsProps) => JSX.Element
}