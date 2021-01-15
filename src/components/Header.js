import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='/series'>Series</Link>
			<Link to='/movies'>Movies</Link>
		</div>
	);
};

export default Header;
