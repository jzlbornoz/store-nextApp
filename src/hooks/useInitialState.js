import { useRef, useState } from 'react';

const initialState = {
  cart: [],
  orderIsOpen: false,
  menuIsOpen: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [search, setSearch] = useState('');

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.includes(payload) ? state.cart : [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const toggleOrder = () => {
    setState({
      ...state,
      orderIsOpen: !state.orderIsOpen,
      menuIsOpen: false,
    });
  };

  const toggleMenu = () => {
    setState({
      ...state,
      orderIsOpen: false,
      menuIsOpen: !state.menuIsOpen,
    });
  };

  // filtro de productos (buscador)
  const inputRef = useRef(null);

  const handleSearch = () => {
    setSearch(inputRef.current.value);
  }

return {
  state,
  addToCart,
  removeFromCart,
  toggleOrder,
  toggleMenu,
  search,
  handleSearch,
  inputRef,
};
};

export default useInitialState;
