import { Product } from "../interfaces/interfaces";

const product: Product = {
  id: '1234324',
  title: 'Coffee Mug',
  img: './coffee-mug.png'
}

const product2: Product = {
  id: '92834',
  title: 'Coffe Mug - Meme',
  img: './coffee-mug2.png'
}

export const products: Product[] = [product, product2];