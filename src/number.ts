export const addThousandsSeparators = (num: number) => {
	const digits = Math.ceil(Math.log10(num + 1));
	if (num <= 0 || digits <= 0) {
		return '0';
	}
	let result = '';
	for (let i = 0; i < digits; i++) {
		result = (
			// This digit, and...
			Math.floor(num % (10 ** (i + 1)) / (10 ** i)) +
			// a thousands separator if necessary...
			((i - 1) % 3 === 2 ? ',' : '') +
			// prepended to the current result
			result
		);
	}
	return result;
};

export const padNumber2 = (num: number) => (
	(num < 10 ? '0' : '') + num
);
