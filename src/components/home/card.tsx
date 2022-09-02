
import { getCardState } from '../../state/Slice/insideCardSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

interface cardProps {
    avatar:string
    data:string
    id:number
}

export const Card:React.FC<cardProps> = ({avatar,data,id}) => {
   const props = {
    avatar,
    data,
    id
   };
   const dispatch = useDispatch()

    
  return (
    <div className="home__item" onClick={()=>{
        dispatch(getCardState(props))
    }}>
    <img src={avatar} className="home__img" alt='картинка'/>
    <p className="home__content">{data}...</p>
    <i>читать дальше <svg className="home__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
        viewBox="0 0 512.094 512.094" >
   <g>
       <g>
           <g>
               <path d="M263.641,248.4L18.308,3.067c-4.16-4.053-10.987-3.947-15.04,0.32c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76
                   L3.268,493.733c-4.267,4.053-4.373,10.88-0.213,15.04c4.16,4.16,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213
                   L263.641,263.44C267.801,259.28,267.801,252.56,263.641,248.4z"/>
               <path d="M508.974,248.4L263.641,3.067c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76
                   l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.16,4.16,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213
                   L508.974,263.44C513.135,259.28,513.135,252.56,508.974,248.4z"/>
           </g>
       </g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg></i>
    
</div>
  )
}
