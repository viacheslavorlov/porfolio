import type { CollectionEntry } from 'astro:content';
import { useEffect, useState } from 'preact/hooks';

export const TechCard = ({ tech, i }: {tech: CollectionEntry<'technologies'>, i: number}) => {
	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsHidden(false);
		}, i * 180);
	}, []);

	return (
		<a
			className={`duration-500 transition-all ${isHidden ? 'opacity-0 transform scale-95' : 'block opacity-100 scale-100'}`}
			href={`/technologies/${tech.slug}`}>
			<div
				className='p-4 rounded-lg hover:bg-gray-500 hover:ring-2 ring-green-600 hover:scale-105 transition-all bg-gray-800'>
				<p class='text-center text-lg font-bold'>{tech.data.title}</p>
				<img
					src={tech.data.icon}
					alt={tech.data.title}
					className='w-32 h-32 mx-auto object-contain'
				/>
			</div>
		</a>
	);
};
