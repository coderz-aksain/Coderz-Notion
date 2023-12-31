import React from 'react'
import { HighlightText } from '../../HomePage/HighlightText'

export const Quote = () => {
  return (
    <div>
        We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={"combines technology"} />
        <span className='orangeGradient'>
            {" "}
            <HighlightText text={" expertise"} />
           
        </span>
       , and community to create an 
       <span className='orangeyellow'>
        {" "}
        <HighlightText text={"  unparalleled educational experience."} />
       
       </span>
    </div>
  )
}
