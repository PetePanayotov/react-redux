import classes from './CartButton.module.css';
import {useSelector , useDispatch} from "react-redux"
import { cartStore } from '../../store/cart';

const CartButton = (props) => {

  const {totalQuantity} = useSelector(state => state.cart);

  const dispatch = useDispatch()

  const handleCartClick = () => {
    dispatch(cartStore.actions.toggle())
  }
  
  return (
    <button className={classes.button} onClick={handleCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
