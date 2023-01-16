const hexToDecimal = (hex) => parseInt(hex, 16);
const binToDecimal = (x) => parseInt(x, 2);
const decimalToHex = (dec) => {
	return dec.toString(16).toUpperCase();
};

const binToHex = (number) => {
	return parseInt(number, 2).toString(16).toUpperCase();
};

export { hexToDecimal, binToDecimal, decimalToHex, binToHex };
