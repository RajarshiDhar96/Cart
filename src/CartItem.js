import React from 'react';


//for a class component to be react component we have to give a render method
class CartItem extends React.Component{
    //state is a built-in React object that is used to contain data or information about the component
    constructor()
    {
        super();
        this.state={
            price:1000,
            title:'Mobile Phone',
            qty:1,
            img:''
        }

        this.testing();
        // this.increaseQuantity=this.increaseQuantity.bind(this)
    }


    testing()
    {
        const promise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done')
            },5000)
        })

        promise.then(()=>{
            this.setState({ qty:this.state.qty+10 });

            this.setState({ qty:this.state.qty+10 });

            this.setState({ qty:this.state.qty+10 });

            console.log('state:- ', this.state);
           
        })
       
    }
   
    increaseQuantity=()=>
    {
        //setState re-render our component with the updated value


        //Method 1
        // this.setState({
        //     qty:this.state.qty+1
        // })


        //Method 2

        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        },()=>{ console.log("this.state: ",this.state);})
        
    }

    decreaseQuantity=()=>
    {
        if(this.state.qty>0)
        {
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty-1
                }
            },()=>{ console.log("this.state: ",this.state);})


           
    

        }
        
       
    }

    render(){

        const{price,title,qty}=this.state;



        return(
            //JSX code
        <div className='cart-item'>

            <div className='left-block'>

                <img style={styles.image}/>

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
                        onClick={this.increaseQuantity}
                    />

                    <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/7080/7080604.png'
                        onClick={this.decreaseQuantity}
                    />

                    <img 
                        alt='delete' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png'
                    />

                </div>

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




//Batching is when React groups multiple state updates into a single re-render
 //for better performance
