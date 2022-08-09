import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';
import AppContext from '@context/AppContext';

const Menu = () => {
	const { toggleMenu } = useContext(AppContext);
	return (
		<aside className={styles.Menu}>
			<ul>
				<li onClick={() => toggleMenu()}>
					<Link href="/checkout" className="title">
						My Orders
					</Link>
				</li>
				<li onClick={() => toggleMenu()}>
					<Link href="/MyAccount">
						My account
					</Link>
				</li>
				<li onClick={() => toggleMenu()}>
					<Link href="/">
						Sign out
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Menu;
