import React from 'react';
//for a class component to be react component we have to give a render method
class CartItem extends React.Component{
    render(){

        return(
            //JSX code
          <div className='cart-item'>

            <div className='left-block'>

                <img style={styles.image}/>

            </div>

            <div className='right-block'>
                <div style={{fontSize:25}}>Phone</div>
                <div style={{color:'#777'}}>Rs 999</div>
                <div style={{color:'#777'}}> Qty: 1</div>
            </div>

            <div className='cart-item-actions'>

            </div>

          </div>
        )

    }
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
