import React, { PropsWithChildren, useState } from 'react'

interface AppSateValue{
  username:string,
  shoppingCart:{item:{id:number,name:string}[]}
}

const defaultContextValue:AppSateValue={
  username:'躺平',
  shoppingCart:{item:[]}
}

export const appContext=React.createContext(defaultContextValue)
export const appSetStateContext=React.createContext<React.Dispatch<React.SetStateAction<AppSateValue>>|undefined>(undefined)

export const AppStateProvider:React.FC<PropsWithChildren<{}>>=(props)=>{

  const [state,setState]=useState(defaultContextValue)

  return( 
  <appContext.Provider value={state}>
    <appSetStateContext.Provider value={setState}>
      {props.children}
    </appSetStateContext.Provider>
  </appContext.Provider>)
}