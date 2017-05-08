const stringinator = require('../../stringinator');

describe('hasChar', () => {
	it('returns true if it has target character', () => {
		expect(stringinator.hasChar('bubbles', 'u')).toEqual(true);
	});

	it('returns false if it does not has target character', () => {
		expect(stringinator.hasChar('bubbles', 'v')).toEqual(false);
	});
});