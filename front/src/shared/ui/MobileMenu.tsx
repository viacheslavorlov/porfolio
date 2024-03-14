import { Menu, X } from "lucide-preact";
import { useState } from "preact/hooks";
import { menuItems } from "../const/menu-items";

type Props = {
	className?: string;
};

const MobileMenu = ({ className }: Props) => {
	const [isVisible, setIsVisible] = useState(false);

	return isVisible ? (
		<>
			<div
				className={`absolute bottom-0 left-0 right-0 z-20 top-0 flex h-screen w-screen flex-col items-center justify-center gap-6 bg-bg-accent md:hidden ${className}`}
			>
				{menuItems.map((item) => (
					<>
						<div
							key={item.href}
							className="border text-primary-text  transition-all border-accent text-2xl px-4 py-2 rounded-2xl hover:scale-105 hover:text-black hover:bg-accent"
							onClick={() => setIsVisible(false)}
						>
							<a
								data-astro-reload={
									item.href === "/" ? true : false
								}
								class={'hover:text-white'}
								href={item.href}
							>
								{item.lable}
							</a>
						</div>
					</>
				))}

				<div
					onClick={() => setIsVisible(false)}
					class={
						"rounded-full flex justify-center items-center m-auto bg-accent absolute right-6 top-4 h-10 w-10  hover:bg-accent-secondary"
					}
				>
					<X />
				</div>
			</div>
		</>
	) : (
		<div
			onClick={() => setIsVisible((prev) => !prev)}
			className="md:hidden absolute flex justify-center z-20 items-center right-6 top-4 h-10 w-10  bg-accent rounded-full  hover:bg-accent-secondary"
		>
			<Menu class={"stroke-primary-text"} />
		</div>
	);
};

export default MobileMenu;
