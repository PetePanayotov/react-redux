import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux"

const Cart = (props) => {
  
  const {items} = useSelector(state => state.cart)
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {
        items.length !== 0 ? 
        
        <ul>
          {items.map(({id , title, quantity, total, price} , index) => (

            <CartItem
              key={index} item={{id, title, quantity, total, price}}
            />
          ))}
        </ul>

        : <h3>
            No items added yet
        </h3>
      }
    </Card>
  );
};

export default Cart;
