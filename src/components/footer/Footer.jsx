import React from 'react'
import './style.css'
import { Accordion } from 'react-bootstrap'
function Footer() {
  return (
   <footer className='p-3 p-md-5'>
    <div className="row">
        <div className="col-md-4">
        <span className="small">Sign Up</span><br />
        <small className='small'>For regular updates and offers register here</small>
        <input type="email" placeholder='Email address' className="email" />
        </div>
        <div className="col-md-4">
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>SUPPORT</Accordion.Header>
        <Accordion.Body>
           <ul type="none">
          <li> <p className="small"><a href="" className='nav-link text-secondary'>CONTACT US</a></p></li>
           <li> <p className="small"><a href="" className='nav-link text-secondary'>RETURN A PRODUCT</a></p></li>
            <li><p className="small"><a href="" className='nav-link text-secondary'>TRACK MY PRODUCT</a></p></li>
           </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>COMPANY</Accordion.Header>
        <Accordion.Body>
        <ul type="none">
          <li>    <p className="small"><a href="" className='nav-link text-secondary'>ABOUT US</a></p></li>
        </ul>
            
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        <div className="col-md-4">
        <Accordion>
    
      <Accordion.Item eventKey="0">
        <Accordion.Header>TERMS AND PRIVACY</Accordion.Header>
        <Accordion.Body>
        <ul type="none">
          <li>    <p className="small"><a href="" className='nav-link text-secondary'>RETURN POLICY</a></p></li>
          <li>    <p className="small"><a href="" className='nav-link text-secondary'>REFUND POLICY</a></p></li>
          <li>    <p className="small"><a href="" className='nav-link text-secondary'>SHIPPING POLICY</a></p></li>
          <li>    <p className="small"><a href="" className='nav-link text-secondary'>TERMS AND CONDITIONS</a></p></li>
          <li>    <p className="small"><a href="" className='nav-link text-secondary'>PRIVACY POLICY</a></p></li>
        </ul>
            
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    </div>
   </footer>
  )
}

export default Footer