import React, { useContext } from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import useAuth from '@hooks/useAuth';
import styles from '@styles/components/Menu.module.scss';

const Menu = () => {
	const { toggleMenu } = useContext(AppContext);
	const { logout } = useAuth();
	const handleLogout = () => {
		logout();
		toggleMenu();
	}
	return (
		<aside className={styles.Menu}>
			<ul className={styles.FirstList}>
				<h3>Categories</h3>
				<li >
					<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()}>
						<Link href="/categories/1" >Clothes</Link>
					</button>
				</li>
				<li>
					<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()}>
						<Link href="/categories/2">Electronics</Link>
					</button>
				</li>
				<li>
					<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()}>
						<Link href="/categories/3">Furnitures</Link>
					</button>
				</li>
				<li>
					<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()}>
						<Link href="/categories/4">Shoes</Link>
					</button>
				</li>
				<li>
					<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()} >
						<Link href="/categories/5">Others</Link>
					</button>
				</li>
			</ul>
			<ul className={styles.SecondList}>
				<li>
					<button onClick={() => toggleMenu()} onKeyPress={() => toggleMenu()}>
						<Link href="/dashboard" className="title">
							Dashboard
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
