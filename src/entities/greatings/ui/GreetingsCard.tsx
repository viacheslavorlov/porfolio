import { useEffect, useState } from 'preact/hooks';

type Props = {
	title: string;
	timeout: number;
};

export const GreeatingsCard = ({ title, timeout }: Props) => {
	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {
		const phrase = setTimeout(() => {
			setIsHidden(false);
		}, timeout);
		return () => phrase;
	}, []);

	return (
		<div
			class={`border-2 transition-all duration-500 ease-in-out border-green-600 bg-gray-800 p-4 rounded-lg shadow-green-600 shadow-md ${
				isHidden ? 'opacity-0 transform scale-95' : 'block opacity-100 scale-100'
			}`}>
			<p class='text-white'>{title}</p>
		</div>
	);
};
