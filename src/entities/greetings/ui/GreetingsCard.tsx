import { useState, useEffect } from 'preact/hooks';
import type {Greeting} from "../model";

export const GreeatingsCard = ({ title, timeout }: Greeting) => {
	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsHidden(false);
		}, timeout);
	}, []);

	return (
		<div
			style={{left: `${timeout / 60}%`}}
			class={`relative border-2 translate-x-[${timeout / 60}px] transition-all duration-500 ease-in-out border-green-600 bg-gray-800 p-4 rounded-lg shadow-green-600 shadow-md ${
				isHidden ? 'opacity-0 transform scale-95' : 'block opacity-100 scale-100'
			}`}>
			<p class='text-white'>{title}</p>
		</div>
	);
};
