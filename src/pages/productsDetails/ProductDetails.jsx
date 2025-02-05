import React, { useEffect, useState } from 'react'
import data from '../../data/data';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css'
import { Carousel } from 'react-bootstrap';

function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [singleData, setSingleData] = useState({});
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartdata') )|| []);
    const [cartId, setNewCartId] = useState(null);



    const AddCartHanlder = (aata) =>{
        setNewCartId(id);
        // const newCart = {
            
        // }
        setCartData([...cartData, data]);   
        localStorage.setItem('cartdata', JSON.stringify(cartData));
        
    }

    useEffect(()=>{
        setSingleData(data.filter((item)=>item.id==id)[0])
    }, [])
  return (
    <section className="container-fluid p-3 p-md-5">
        <div className="row">
            <div className="col-md-7 mb-4 h-100" style={{background:'lightgray', minHeight:'80vh'}} >
            <Carousel>
        {/* <ExampleCarouselImage text="First slide" /> */}
        {
                    singleData.allImages?.map((item, index)=>(
                     <Carousel.Item>
                          <img src={item} alt="" className="w-100" />
                     </Carousel.Item>
                    ))
                }
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
     
     
    </Carousel>
               
            </div>
            <div className="col-md-5" style={{position:'sticky !important', top:'100 !important'}}>
              <div className='d-flex flex-wrap gap-2 justify-content-between align-items-center'>
              <h1 className="fs-3 fw-normal">{(singleData.productName)?.toUpperCase()}</h1> 
              <small className="fs-5">&#8377;{singleData.productPrice}</small>
              </div>
              <hr />
              <p className="fs-6">{singleData.desc}</p>
              <img src={singleData.productImage} alt={singleData.productName} className='w-25' style={{minHeight:'150px', background:'lightgray !important'}}/>

              <br />
              <br />
              <p className='text-end'><a href="" className='text-secondary'>Size & Fit Guide.</a></p>
              <div className="d-flex">
                {
                    singleData.availableSizes?.map((item, index)=>(
                        <button className='w-100 p-2 btn btn-outline-dark rounded-0 fs-5'>{item}</button>
                    ))
                }
              </div>
              <button className="w-100 btn btn-dark rounded-0 p-3 mt-4" onClick={()=>AddCartHanlder(singleData)}>ADD TO CART</button>
              <button className="w-100 btn btn-dark rounded-0 p-3 mt-4" onClick={()=>navigate(`/order-details/1`)}>BUY NOW</button>
              <br />
              <br />
              <p className='fs-6 mb-0'><img src="https://assets-v2.lottiefiles.com/a/373440c0-1183-11ee-a24e-7b117402fba7/KjarYPwwd8.gif" className='dot' alt="" /> EXPRESS INDIA SHIPPING</p>
              <p className='fs-6 mb-0'><img src="https://assets-v2.lottiefiles.com/a/373440c0-1183-11ee-a24e-7b117402fba7/KjarYPwwd8.gif" className='dot' alt="" /> in stock</p>
              <p className='fs-6 mb-0'><img src="https://assets-v2.lottiefiles.com/a/373440c0-1183-11ee-a24e-7b117402fba7/KjarYPwwd8.gif" className='dot' alt="" /> RETURN ALLOWED</p>
              

              <br />
              <br />
              <div className="row text-center">
                <div className="col-4">
                    <p className="small"><i class="bi bi-plus-lg"></i> Product details</p>
                </div>
                <div className="col-4">
                    <p className="small"><i class="bi bi-plus-lg"></i> Product FAQs</p>
                </div>
                <div className="col-4">
                    <p className="small"><i class="bi bi-plus-lg"></i> Shipping and return</p>
                </div>
            </div>
            </div>
        
        </div>

        <hr />
        <center>
            <h4 className='fs-4'>RELATED PRODUCTS</h4>
        </center>

        {
            data.filter((item)=>item.id!=id)?.map((item, index)=>(
                <div className="col-md-3">
                <a href={`/details/${item.id}`} className='nav-link'>
                <div className="product p-2">
                      {/* <img src={item.productImage} alt={item.productName} className="w-100" /> */}
                      <br />
                      <small className="fs-6 fw-bold">{item.productName}</small><br />
                      <small className="small">{item.productCategory}</small><br />
                      <small className="small">&#8377;{item.productPrice}</small>
                  </div>
                </a>
              </div>
            ))
        }
    </section>
  )
}

export default ProductDetails