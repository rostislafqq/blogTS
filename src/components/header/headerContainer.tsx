import React from 'react'
import logo from '../../assets/logo.png'
import  Burger  from './burger'
import { PopUp } from './popUp'
import { useSelector} from 'react-redux'
import { RootState} from '../../state/store'
import { Link } from 'react-router-dom';

const HeaderContainer:React.FC = ()=> {

  const isVisable = useSelector((state:RootState)=>state.header.isVisable)
  console.log(isVisable)
  
    
  return (
   <header >
    <Link to='/'>
    <img className="header__logo" src={logo} alt=""/>
    </Link>
   
       <Burger isVisable={isVisable}/>
       <PopUp isVisable={isVisable}/>
   </header>
  )
}

export default HeaderContainer
