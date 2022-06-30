import React, { useContext } from 'react';
import Image from "next/image";
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import style from '@styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={style.nav}>
				<Image src={menu} alt="menu" className={style.menu} />
				<div className={style['navbar-left']}>
					<Image src={logo} alt="logo" className={style['nav-logo']} />
					<ul>
						<li>
							<a href="/">All</a>
						</li>
						<li>
							<a href="/">Clothes</a>
						</li>
						<li>
							<a href="/">Electronics</a>
						</li>
						<li>
							<a href="/">Furnitures</a>
						</li>
						<li>
							<a href="/">Toys</a>
						</li>
						<li>
							<a href="/">Others</a>
						</li>
					</ul>
				</div>
				<div className={style['navbar-right']}>
					<ul>
						<li className={style['more-clickable-area navbar-email pointer']} onClick={() => toggleMenu()}>
							platzi@example.com
						</li>
						<li
							className={style['navbar-shopping-cart']}
							onClick={() => toggleOrder()}
						>
							<Image className={style['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
}

export default Header;
