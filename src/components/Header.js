import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
	return (
		<div className='header-2'>
			<nav className='bg-white py-2 md:py-5'>
				<div className='container px-4 mx-auto md:flex md:items-center'>
					<div
						className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
						id='navbar-collapse'
					>
						<Link
							to='/movies'
							className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
						>
							Movies
						</Link>
						<Link
							to='/series'
							className='p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'
						>
							Series
						</Link>
						<Link
							to='/'
							className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1'
						>
							Home
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
