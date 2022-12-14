import React from 'react';


//for a class component to be react component we have to give a render method
const CartItem=(props)=>{
    //state is a built-in React object that is used to contain data or information about the component
   


    
   

 

       

        const{price,title,qty}=props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity,onDeleteProduct}=props;



        return(
            //JSX code
        <div className='cart-item'>

            <div className='left-block'>

                <img style={styles.image} src={product.img}  />

            </div>

            <div className='right-block'>
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}> Qty: {qty}</div>
            
            
                <div className='cart-item-actions'>

                    <img 
                        alt='increase' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/4315/4315609.png'
                        onClick={()=>onIncreaseQuantity(product)}
                    />

                    <img 
                        alt='decrease' 
                        className='action-icons'  
                        src='https://cdn-icons-png.flaticon.com/512/7080/7080604.png'
                        onClick={()=>onDecreaseQuantity(product)}
                    />

                    <img 
                        alt='delete' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png'
                        onClick={()=>onDeleteProduct(product.id)}
                    />

                </div>

          </div>

        </div>
        )

    
}
//We have to give the styles by converting it into a object
const styles={
    image:{
        height:110,
        width:110,
        //In JavaScript we cannot use "-" , therfore we have to use camel case
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;




//Batching is when React groups multiple state updates into a single re-render
 //for better performance

 //Props: used to pass data from a parent component to a child component in React
