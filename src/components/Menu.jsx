import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';
import AppContext from '@context/AppContext';
import useAuth from '@hooks/useAuth';

const Menu = () => {
	const { toggleMenu } = useContext(AppContext);
	const {logout} = useAuth();
	const handleLogout = () => {
		logout();
		toggleMenu();
	} 
	return (
		<aside className={styles.Menu}>
			<ul>
				<li>
				<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()}>
					<Link href="/checkout" className="title">
						My Orders
					</Link>
				</button>
				</li>
				<li>
				<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()} >
					<Link href="/MyAccount">
						My account
					</Link>
				</button>
				</li>
				<li>
				<button onClick={() => handleLogout()} onKeyPress={() => handleLogout()} >
					<Link href="/">
						Log out
					</Link>
				</button>
				</li>
			</ul>
		</aside>
	);
};

export default Menu;
