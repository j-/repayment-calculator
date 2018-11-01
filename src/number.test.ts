import { addThousandsSeparators } from './number';

describe('addThousandsSeparators()', () => {
	it('handles zero', () => {
		const actual = addThousandsSeparators(0);
		expect(actual).toBe('0');
	});

	it('ignores values less than zero', () => {
		const actual = addThousandsSeparators(0.5);
		expect(actual).toBe('0');
	});

	it('handles values less than 1,000', () => {
		expect(addThousandsSeparators(1)).toBe('1');
		expect(addThousandsSeparators(9)).toBe('9');
		expect(addThousandsSeparators(10)).toBe('10');
		expect(addThousandsSeparators(15)).toBe('15');
		expect(addThousandsSeparators(19)).toBe('19');
		expect(addThousandsSeparators(20)).toBe('20');
		expect(addThousandsSeparators(50)).toBe('50');
		expect(addThousandsSeparators(99)).toBe('99');
		expect(addThousandsSeparators(100)).toBe('100');
		expect(addThousandsSeparators(101)).toBe('101');
		expect(addThousandsSeparators(999)).toBe('999');
	});

	it('handles 1,000', () => {
		expect(addThousandsSeparators(1000)).toBe('1,000');
	});

	it('handles values between 1,000 and 1,000,000', () => {
		expect(addThousandsSeparators(2000)).toBe('2,000');
		expect(addThousandsSeparators(50000)).toBe('50,000');
		expect(addThousandsSeparators(500000)).toBe('500,000');
		expect(addThousandsSeparators(999999)).toBe('999,999');
	});

	it('handles 1,000,000', () => {
		expect(addThousandsSeparators(1000000)).toBe('1,000,000');
	});

	it('handles 1,000,000,000', () => {
		expect(addThousandsSeparators(1000000000)).toBe('1,000,000,000');
	});

	it('handles 1,000,000,000,000', () => {
		expect(addThousandsSeparators(1000000000000)).toBe('1,000,000,000,000');
	});

	it('handles fractions', () => {
		expect(addThousandsSeparators(123456.789)).toBe('123,456');
	});
});
