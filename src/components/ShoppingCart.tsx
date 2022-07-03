import React from 'react'
import styles from './ShoppingCart.module.css'
import {FiShoppingCart} from 'react-icons/fi'
import {appContext} from '../AppState'
interface Props{

}
interface State{
  isOpen:boolean
}

export default class ShoppingCart extends React.Component<Props,State>{
  constructor(props:Props){
    super(props)
    this.state={
      isOpen:false,
    }
  }
  
  render(): React.ReactNode {
    return(
      <appContext.Consumer>
        {(value)=>{
          return <div className={styles.cartContainer}>
          <button className={styles.button} onClick={()=>{
            this.setState({isOpen:!this.state.isOpen})
            }}>
              <FiShoppingCart/>
              <span>购物车{value.shoppingCart.item.length}件</span>
            </button>
          <div className={styles.cartDropDown} style={{display:this.state.isOpen?"block":'none'}}>
            <ul>
              {value.shoppingCart.item.map((item)=>{
                return <li key={item.id}>{item.name}</li>
              })}
            </ul>
          </div>
        </div>
        }}
      </appContext.Consumer>
    )
  }
}