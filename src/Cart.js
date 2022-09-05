import React from 'react';
import CartItem from './CartItem';
//for a class component to be react component we have to give a render method
const Cart =(props)=>{
    //state is a built-in React object that is used to contain data or information about the component
   
   
    const {products}=props;
  
        return(
            <div className='cart'> 
                {
                    products.map((product)=>{
                        return <CartItem
                         product={product}
                         key={product.id}
                         onIncreaseQuantity={props.onIncreaseQuantity}
                         onDecreaseQuantity={props.onDecreaseQuantity}
                         onDeleteProduct={props.onDeleteProduct} 
                        
                         
                         />
                    })
                }

               
            </div>
            
        )
   
}
//We have to give the styles by converting it into a object

export default Cart;




//Batching is when React groups multiple state updates into a single re-render
 //for better performance
