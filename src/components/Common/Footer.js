import React from 'react';
import TMDBLogo from '../../assets/tmdb-primary-long.svg';

const Footer = () => {
	return (
		<footer className='footer bg-white relative pt-1 border-blue-700'>
			<div className='container mx-auto px-6'>
				<div className='mt-8 border-t-2 border-gray-300 flex flex-col items-center'>
					<div className='flex sm:w-2/3 justify-center py-6'>
						<img
							src={TMDBLogo}
							alt=''
							style={{ flex: 1, height: 30, resizeMode: 'contain' }}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
