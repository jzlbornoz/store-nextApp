import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import style from '@styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={style.nav}>
				<div className={style.menu}><Image src={menu} alt="menu"  width="25" height="21" /></div>
				<div className={style['navbar-left']}>
					<Link href="/">
						<h2 className={style['nav-logo']}>Atech Store</h2>
					</Link>
					<ul>
						<li>
							<Link href="/">All</Link>
						</li>
						<li>
							<Link href="/">Clothes</Link>
						</li>
						<li>
							<Link href="/">Electronics</Link>
						</li>
						<li>
							<Link href="/">Furnitures</Link>
						</li>
						<li>
							<Link href="/">Toys</Link>
						</li>
						<li>
							<Link href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={style['navbar-right']}>
					<ul>
						<li className={style['navbar-email pointer more-clickable-area ']}
							onClick={() => toggleMenu()}
							onKeyPress={() => toggleMenu()}
							role="presentation">
							UserName
						</li>
						<li className={style['navbar-shopping-cart']}
							onClick={() => toggleOrder()}
							onKeyPress={() => toggleOrder()}
							role="presentation">
							<Image className={style['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
			</nav>
			{state.orderIsOpen && <MyOrder />}
			{state.menuIsOpen && <Menu />}
		</>
	);
};

export default Header;
