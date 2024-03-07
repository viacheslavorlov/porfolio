export const shortenText = (text: string, length: number, dots: boolean) => {
	if (!text) return '';
	if (text && text.length <= length) {
		return text;
	}
	return text.slice(0, length) + dots ? '...' : '';
};
