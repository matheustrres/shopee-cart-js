import { Cart } from './cart.js';
import { Item } from './item.js';

const item1 = new Item({
	name: 'Hotwheels Ferrari',
	price: 20.99,
	quantity: 1,
});

const item2 = new Item({
	name: 'Hotwheels Lamborghini',
	price: 39.99,
	quantity: 3,
});

const cart = new Cart([item1, item2]);

const item3 = new Item({
	name: 'Hotwheels Nissan 350z',
	price: 28.99,
	quantity: 2,
});

const item4 = new Item({
	name: 'Hotwheels Mercedes',
	price: 59.99,
	quantity: 5,
});

cart.addItem(item3);
cart.addItem(item4);

cart.removeItem(item2);

cart.listItems();
cart.calcTotal();
