import React from 'react'
import image from '../assets/Vector.png'
import imagee from '../assets/ic_baseline-phone.png'
import img from '../assets/Vector.png'




const Form = () => {
  return (
    <div className='main'>
      <div className="contact">
        <div className="btn">
          <button><img src={image} alt=""/>VIA SUPPORT CHAT</button>
          <button><img src={imagee} alt=""/>VIA CALL</button>
        </div>
      
        <button><img src={img} alt="" />VIA EMAIL FORM</button>
        <div className="form-container">
          
        </div>

      </div>
      
    </div>
  )
}

export default Form
