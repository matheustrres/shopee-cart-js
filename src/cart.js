import { Item } from './item.js';

export class Cart {
	#items;

	static #validateItem(item) {
		if (!item || !(item instanceof Item)) {
			throw new Error(
				'Argument {item} is required and must be an instance of Item',
			);
		}
	}

	constructor(items) {
		this.#items = items || [];
	}

	addItem(item) {
		Cart.#validateItem(item);

		this.#items.push(item);
	}

	calcTotal() {
		const result = this.#items.reduce(
			(total, item) => total + item.calcSubtotal(),
			0,
		);

		console.log(`Cart total is: ${result}`);
	}

	deleteItem(item) {
		const itemIndex = this.#items.findIndex((i) => i.name === item.name);

		if (itemIndex !== -1) {
			this.#items.splice(itemIndex, 1);
		}
	}

	removeItem(item) {
		const itemIndex = this.#items.findIndex((i) => i.name === item.name);

		if (itemIndex == -1) {
			console.error('Item not found.');
			return;
		}

		if (this.#items[itemIndex].quantity > 1) {
			this.#items[itemIndex].quantity -= 1;
			return;
		}

		if (this.#items[itemIndex].quantity == 1) {
			this.#items.splice(itemIndex, 1);
			return;
		}
	}

	listItems() {
		this.#items.forEach((item, index) => {
			console.log(
				`${index + 1} ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: ${item.calcSubtotal()}`,
			);
		});
	}
}
