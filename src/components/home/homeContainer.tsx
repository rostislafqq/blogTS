import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { ICards } from '../../interface/nterfaces'
import { Card } from './card'
import HomeSceleton from './homeCardSceleton'
import { Pagination } from './pagination'

 const HomeContainer:React.FC = () => {
    const [cards,setCards] = useState<ICards[]>([])
    const [cardsTotal,setCardsTotal] = useState<ICards[]>([])
  //отрисовка карточек + счет длины
    useEffect(()=>{
        const getCard =async() =>{
            const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?`)
            setCardsTotal(res.data)
           
        }
        getCard()
        
    },[])
  if(cards.length>0){
    for(let i = 0 ; i < cards.length;i++){
      cards[i].data=cards[i].data = cards[i].data.slice(0,150);
    }
  }


   //pagination
  
    const [currentValue,setCarrentValue] = useState(1)
    const countOnPage = 3 ;
    const countCards = cardsTotal.length;
    const paginationLenght = Math.ceil(countCards/countOnPage);
    useEffect(()=>{
        const getCard =async() =>{
            const res = await axios.get(`https://62dfc3bd976ae7460bf328c3.mockapi.io/cards?page=${currentValue}&limit=3`)
            setCards(res.data)
          
        }
        getCard()
        
    },[currentValue])
    
  return (
    <>
    
    <div className="home">
      {(cards.length > 0 ? cards.map((val,i)=>(<Card key={val.avatar} id={val.id} avatar={val.avatar} data={val.data}/>)) : [...new Array(3)].map((val,i)=>(<HomeSceleton key={i}/>)))}
    </div>
   
     <Pagination  paginationLenght={paginationLenght} currentValue={currentValue} setCarrentValue={setCarrentValue} /> 
    </>
  )
}

export default HomeContainer
