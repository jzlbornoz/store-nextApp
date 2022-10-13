import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import useAuth from '@hooks/useAuth';
import style from '@styles/components/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu, search, handleSearch, inputRef } = useContext(AppContext);
	const auth = useAuth();
	useEffect(() => {
		auth.signIn();
	}, [auth]);
	return (
		<>
			<nav className={style.nav}>
				{auth.user &&
					<button className={style.menu} onClick={() => toggleMenu()}
						onKeyPress={() => toggleMenu()}>
						<Image src={menu} alt="menu" width="25" height="21" />
					</button>}
				<div className={style['navbar-left']}>
					<Link href="/">
						<h2 className={style['nav-logo']}>YourStore</h2>
					</Link>
					<ul>
						<li>
							<Link href="/">All</Link>
						</li>
						<li>
							<Link href="/categories/1">Clothes</Link>
						</li>
						<li>
							<Link href="/categories/2">Electronics</Link>
						</li>
						<li>
							<Link href="/categories/3">Furnitures</Link>
						</li>
						<li>
							<Link href="/categories/4">Shoes</Link>
						</li>
						<li>
							<Link href="/categories/5">Others</Link>
						</li>
					</ul>
				</div>
				{auth.user &&
					<div className={style.search}>
						<input type='text' placeholder='Search' value={search} onChange={handleSearch} ref={inputRef} />
					</div>
				}
				<div className={style['navbar-right']}>
					<ul>
						{auth.user
							? <li className={style['navbar-email']}
								onClick={() => toggleMenu()}
								onKeyPress={() => toggleMenu()}
								role="presentation"
							>
								{auth?.user?.name}
							</li>
							: <Link href='/login'><li className={style.Login}>Log In</li></Link>}
						{auth.user &&
							<li className={style['navbar-shopping-cart']}
								onClick={() => toggleOrder()}
								onKeyPress={() => toggleOrder()}
								role="presentation"
							>
								<Image className={style['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
								{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
							</li>}
					</ul>
				</div>
			</nav>
			{state.orderIsOpen && <MyOrder />}
			{state.menuIsOpen && <Menu />}
		</>
	);
};

export default Header;
