import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import logo from '../../assets/images/logo.png'
import { Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from '../../data/data';

function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () =>{
    setShow(true)
  }
  const handleClose = ()=>{
    setShow(false);
  }


  const [left, setLeft] = useState(false);
  const handleCloseleft = () =>{
    setLeft(false)
  }
  const handleShowLeft = () =>{
    setLeft(true)
  }
  const [cartData, setCartData] = useState( []);
  const getData = (id)=>{
      console.log(data.filter((item)=>item.id==id)[0]);
      
     return data.filter((item)=>item.id==id)[0];
  }
  useEffect(()=>{
    setCartData(JSON.parse(localStorage.getItem('cartdata')))
  }, [])
  return (
   <div>
     <Navbar className="bg-body-tertiary">
      <Container fluid >
      {/* <p className='mb-0'><a href="/collection" className='nav-link'>COLLECTIONS</a></p> */}
      <button className='btn btn-dark' onClick={handleShowLeft}><i class="bi bi-list-nested"></i></button>
       <div className='d-flex align-items-center justify-content-center w-100'>
     
        <Navbar.Brand href="/">
            <img src={logo} alt="flying chariote logo" width={120}/>
        </Navbar.Brand>
       </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='d-flex gap-3 align-items-center fs-5 text-dark icons'>
          <i class="bi bi-search"></i>
          <a href="/login" className='nav-link'><i class="bi bi-person"></i></a>
          <i class="bi bi-bag" onClick={handleShow}></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Offcanvas show={left} onHide={handleCloseleft}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>  <img src={logo} alt="flying chariote logo" width={120}/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="left">
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About us</a></li>
          <li><a href="/contact-us">Contact us</a></li>
          <li><a href="/collection">Collection</a></li>
          <li><a href="/return-policy">Return Policy</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/shipping-policy">Shipping Policy</a></li>
          <li><a href="/terms-conditions">Terms and Conditions</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="https://instagram.com/@FLYING_CHARIOT.CO.IN">Visit Our Instagram</a></li>
        </ul>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={show} onHide={handleClose} last>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title> <p className="small mb-0">0 items in your cart</p> </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {
          cartData?.length!=0?(
            <div className="row">
              {cartData?.map((item, index)=>(
                  <div className="col-md-3">
                <img src={item.productImage} alt="" />
              </div>
              ))}
            </div>
          ):(
            <div>
            <h1 className="display-3 text-center"><i class="bi bi-bag-dash"></i></h1>
            <h1 className="fs-1 fw-normal text-center">Your cart is empty</h1>
            </div>
          )
        }
      <hr />
          <div className="cart d-flex gap-3">
           <div className="div">
           <small className="fs-6">Subtotal</small>
           <small className="small">SHIPING AND EXTRA CHARGES CALCULATED AT CHECKTOUT</small>
           </div>
           <p className="fs-6">&#8377;00</p>
          </div>
          <button className="btn btn-dark rounded-0 mt-4 p-3 w-100">Checkout Securly <i class="bi bi-shield-lock"></i></button>
      </Offcanvas.Body>
    </Offcanvas>
   </div>
  );
}

export default Header;