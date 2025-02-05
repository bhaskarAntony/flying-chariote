import React from 'react'
import mobile_image from '../../assets/images/mobile_image.png'
function Hero() {
  return (
    <div style={{background:'lightgray'}}>
    <img src="https://storage.googleapis.com/owr_data/1733148901172-b9503857-0f33-4351-aebe-3d66760a8604.jpeg" alt="" className="w-100 d-none d-md-block"  />
    <img src={mobile_image} alt="" className="w-100 d-block d-md-none"  />
    </div>
  )
}

export default Hero