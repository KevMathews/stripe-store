import shoppingBag from '../../assets/shopping-bag.png';
import './cart-icon-styles.scss';

const CartIcon = () => {
  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-bag-icon' />
      <span className='cart-count'> 0 </span>
    </div>
  );
}
export default CartIcon;