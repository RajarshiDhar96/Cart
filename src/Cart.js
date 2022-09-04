import React from 'react';
import CartItem from './CartItem';
//for a class component to be react component we have to give a render method
class Cart extends React.Component{
    //state is a built-in React object that is used to contain data or information about the component
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    price:99,
                    title:'Mobile Phone',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:10,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:100,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:3
                },
                {
                    price:1000,
                    title:'Head Phone',
                    qty:1,
                    img:'',
                    id:4
                }
            ]
        }
        

        
    }
   render()
   {
    const {products}=this.state;
  
        return(
            <div className='cart'> 
                {
                    products.map((product)=>{
                        return <CartItem product={product} key={product.id}/>
                    })
                }

               
            </div>
            
        )
   }
}
//We have to give the styles by converting it into a object

export default Cart;




//Batching is when React groups multiple state updates into a single re-render
 //for better performance
