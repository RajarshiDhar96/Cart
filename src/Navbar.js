import React from 'react';


//for a class component to be react component we have to give a render method
const Navbar=(props)=>{
    //state is a built-in React object that is used to contain data or information about the component
   


    
   

   

      


        return(
            //JSX code
        <div style={styles.nav}>

           <div  style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/1533/1533556.png' alt="cart-icon"/>
            <span  style={styles.cartCount}>{props.count}</span>
           </div>

        </div>
        )

    
}
//We have to give the styles by converting it into a object
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  
export default Navbar;




//Batching is when React groups multiple state updates into a single re-render
 //for better performance

 //Props: used to pass data from a parent component to a child component in React
