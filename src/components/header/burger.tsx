import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsVisable } from '../../state/Slice/headerSlice'

interface BurgerProps {
    isVisable:boolean
}

const Burger:React.FC<BurgerProps> = ({isVisable}) => {
    const dispatch=useDispatch()
  return (
   <>
    <div onClick={(e)=>{
        e.stopPropagation()
        dispatch(setIsVisable(true))
    }} className={isVisable?'header__burger-close' :'header__burger'}>
            <div className="header__burgerItem"></div>
            <div className="header__burgerItem"></div>
            <div className="header__burgerItem"></div>
        </div>
        </>
  )
}

export default React.memo(Burger)