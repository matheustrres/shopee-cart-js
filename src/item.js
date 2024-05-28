export class Item {
	name;
	price;
	quantity;

	static #validate({ name, price, quantity }) {
		if (!name || typeof name !== 'string') {
			throw new TypeError('Argument {name} is required and must be a string.');
		}

		if (!price || typeof price !== 'number') {
			throw new TypeError('Argument {price} is required and must be a number.');
		}

		if (!quantity || typeof quantity !== 'number') {
			throw new TypeError(
				'Argument {quantity} is required and must be a number.',
			);
		}
	}

	constructor({ name, price, quantity }) {
		Item.#validate({ name, price, quantity });

		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	calcSubtotal() {
		return this.price * this.quantity;
	}
}
