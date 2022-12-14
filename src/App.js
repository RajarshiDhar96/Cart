
import React from 'react';


import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {
  constructor()
  {
      super();
      this.state={
          products:[
              {
                  price:99,
                  title:'Mobile Phone',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
                  id:1
              },
              {
                  price:10,
                  title:'Watch',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
                  id:2
              },
              {
                  price:100,
                  title:'Laptop',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
                  id:3
              },
              {
                  price:1000,
                  title:'Head Phone',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
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

  getCartCount=()=>{
  
    const {products}=this.state
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getCartTotal=()=>{
    const{products}=this.state
    let cartTotal=0
    products.map((product)=>{
      cartTotal+=product.qty*product.price
    })

    return cartTotal;

  }
  render(){

    const {products}=this.state;

  
      return (
        <div className="App">
          <Navbar count={this.getCartCount()} />
          <Cart  
                products={products}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct} 
          />
          <div style={{fontSize:20, fontWeight:'bolder',margin:50,color:'red',backgroundColor:'yellow'}}>TOTAL:{this.getCartTotal()}</div>
        </div>
      );
  }
}

export default App;
