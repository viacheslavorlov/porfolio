import { useState } from "preact/hooks";

const ImageCarousel = ({
	technologies,
}: {
	technologies: { data: { title: string; icon: string } }[];
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const increaseIndex = () => {
		if (currentImageIndex < technologies.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		} else {
			setCurrentImageIndex(0)
		}
	}; 

	const decreaseIndex = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		} else {
			setCurrentImageIndex(technologies.length - 1)
		}
	};

	return (
		<div className='relative w-full h-64 md:h-80 lg:h-96'>
			<img
				src={technologies[currentImageIndex].data.icon}
				alt={technologies[currentImageIndex].data.title}
				className='object-cover h-full mx-auto rounded-lg'
			/>
			<p>{technologies[currentImageIndex].data.title}</p>
			<button
				onClick={decreaseIndex}
				className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded'>
				Назад
			</button>
			<button
				onClick={increaseIndex}
				className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded'>
				Вперед
			</button>
		</div>
	);
};

export default ImageCarousel;
