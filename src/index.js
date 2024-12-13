import * as cartService from "./service/cart.js";
import createItem from "./service/item.js";

const myCart = [];

console.log("Welcome to the your Shopee Cart!");

// criando itens
const item1 = await createItem("Super Nintendo", 700.00, 3);
const item2 = await createItem("Fitas de jogos para SNES", 10.00, 5);

// adicionando item
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// removendo item
await cartService.removeItem(myCart, item2);

// informações gerais
await cartService.displaycart(myCart);

// deletando itens
await cartService.deleteItem(myCart, item2.name);
await cartService.deleteItem(myCart, item1.name);

// imprimindo Total
await cartService.calculateTotal(myCart);