import Constants from '../../src/constants.js';

describe('Constants', () => {
	describe('ITEMS', () => {
		test('Should not contain items that are not part of combos', () => {
			const uniqueComboItems = Constants.COMBO_CARDS.reduce((aggregate, card) => {
				card.items.forEach((item) => {
					if (!aggregate.includes(item)) {
						aggregate.push(item);
					}

					return;
				});

				return aggregate;
			}, []);

			expect(Constants.ITEMS.sort()).toEqual(uniqueComboItems.sort());
		});
	});
});