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

    handleIncreaseQuantity=(product)=>{
        console.log('Please increase the quantity', product);
        const {products} =this.state;
        const index=products.indexOf(product)

        products[index].qty+=1
        this.setState({
            products:products
        })
    }

    handleDecreaseQuantity=(product)=>{
        console.log('Please decrease the quantity', product);
        const {products} =this.state;
        const index=products.indexOf(product)

        if(products[index].qty>0)
        {
            products[index].qty-=1
            this.setState({
            products:products
        })
        }

        
    }

    handleDeleteProduct=(id)=>{
        const{products}=this.state
        const items=products.filter((item)=> item.id!==id);
        this.setState({
            products:items
        })
    }
   render()
   {
    const {products}=this.state;
  
        return(
            <div className='cart'> 
                {
                    products.map((product)=>{
                        return <CartItem
                         product={product}
                         key={product.id}
                         onIncreaseQuantity={this.handleIncreaseQuantity}
                         onDecreaseQuantity={this.handleDecreaseQuantity}
                         onDeleteProduct={this.handleDeleteProduct}
                         
                         />
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
