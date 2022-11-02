import { CSSProperties, ReactElement } from "react";

export interface ProductCardProps {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: () => JSX.Element
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
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
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
  Image: (props: ProductImageProps) => JSX.Element,
  Buttons: (props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ShoppingCart {
  [key: string]: ProductInCart;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}