import React, { useState,useEffect } from 'react';
import logo from './assets/images/logo.svg';
import robots from './mockData/robots.json'
import Robot from './components/robots';
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart';

interface Props{

}

interface State{
  robotGallery:any,
  count:number,
}

const App:React.FC =()=>{

    const [count,setCount]=useState<number>(0)
    const [robotGallery,setRobotGallery]=useState<any>([])
    const [loading,setLoading]=useState<boolean>(false)
    const [error,setError]=useState<string>()

    useEffect(()=>{
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response=>response.json())
      // .then(data=>setRobotGallery(data))

      const fetchData=async()=>{
        setLoading(true)
        try{
          const response= await fetch('https://jsonplaceholder.typicode.com/users')
          const data =await response.json()
          setRobotGallery(data)
        }catch(e){
          if(e instanceof Error){
            setError(e.message)
          }
        }
       
        setLoading(false)       
      }

      fetchData()

    },[])
    return ( 
      <div className={styles.app}>
       <div className={styles.appHeader}>
         <img src={logo} alt="logo" className={styles.appLogo}/>
         <h1>罗伯特机器人炫酷吊炸天online购物平台</h1>
       </div>
       <ShoppingCart/>
        {(error)&&<div>网站出错：{error}</div>}
        {
          loading?
          <h2>loading加载中...</h2>
          :
          <div className={styles.robotList}>
          {robotGallery.map(r=>
            <Robot key={r.id} id={r.id} email={r.email} name={r.name}/>
          )}
        </div>
        }
      </div>
     );
}

export default App;
