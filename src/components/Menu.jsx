import React, { useContext } from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';
import AppContext from '@context/AppContext';

const Menu = () => {
	const { toggleMenu } = useContext(AppContext);
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
				<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()} >
					<Link href="/">
						Sign out
					</Link>
				</button>
				</li>
			</ul>
		</aside>
	);
};

export default Menu;
