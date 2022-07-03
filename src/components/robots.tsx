import React,{useContext}  from "react";
import styles from './Robot.module.css'
import {appContext,appSetStateContext} from '../AppState'

interface RobotProps{
  id:number,
  name:string,
  email:string,
}


const Robot:React.FC<RobotProps>=({id,name,email})=>{
  const value=useContext(appContext)
  const setSate=useContext(appSetStateContext)
  const addToCart=()=>{

    if(setSate){

      let {item}=value.shoppingCart
      for(let i=0;i<item.length;i++){
        if(item[i].id===id){
          alert(`${item[i].name}已加入购物车`)
          return 
        }
      }
      setSate({
        ...value,
        shoppingCart:{
          item:[...value.shoppingCart.item,{id,name}]
        }
      })
    }    
  }

  return (
    <div className={styles.cardContainer} onClick={()=>{

    }}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default Robot;