import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ change }) {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	return (
		<nav className="w-full sticky top-0 bg-blue-600 text-white text-lg font-normal z-10 flex items-center justify-between py-3 px-2 md:px-8 md:flex-row md:py-1 lg:flex-row lg:py-0">
			<Link
				to="/"
				className="flex items-center md:mb-2 z-10 lg:mt-1 w-[300px] h-[50px]"
			>
				<h1 className="text-xl w-full font-normal ml-2">
					{!change ? 'Home' : 'गृहपृष्ठ'}
				</h1>
			</Link>

			<div
				onClick={handleClick}
				className="absolute right-4 top-5 cursor-pointer lg:hidden hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
			>
				{!open ? (
					<FaBars size={25} className="cursor-pointer" />
				) : (
					<FaTimes size={25} className="cursor-pointer" />
				)}
			</div>

			<ul
				className={`w-full flex flex-col items-start bg-blue-600 absolute top-12 left-0 mt-3 pl-0 md:pl-5 lg:static lg:flex lg:flex-row lg:justify-end lg:mt-0 lg:py-2 opacity-100  ${
					open ? 'top-0' : 'opacity-0 hidden'
				}`}
			>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/license"
					>
						{!change ? 'Driving License' : 'चालक अनुमतिपत्र'}
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/products"
					>
						{!change ? 'Vehicle' : 'सवारी साधन'}
					</Link>
				</li>
				<li className="my-3 md:my-2 lg:mx-2 lg:mt-3" onClick={handleClick}>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/products"
					>
						{!change ? 'Transport Law' : 'यातायात कानून'}
					</Link>
				</li>
				<li
					className="my-3 md:mt-2 md:mb-4 lg:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/contact"
					>
						{!change ? 'Gallery' : 'फोटो ग्यालरी'}
					</Link>
				</li>
				<li
					className="my-3 md:mt-2 md:mb-4 lg:mx-2 lg:mt-3"
					onClick={handleClick}
				>
					<Link
						className="text-white hover:text-gray-400 duration-200"
						to="/contact"
					>
						{!change ? 'FAQ' : 'बारम्बार सोधिने प्रश्नहरू'}
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
