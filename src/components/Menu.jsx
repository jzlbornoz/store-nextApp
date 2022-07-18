import React from 'react';
import Link from 'next/link';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
	return (
		<aside className={styles.Menu}>
			<ul>
				<li>
					<Link href="/checkout" className="title">
						My orders
					</Link>
				</li>
				<li>
					<Link href="/MyAccount">My account</Link>
				</li>
				<li>
					<Link href="/">Sign out</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Menu;
