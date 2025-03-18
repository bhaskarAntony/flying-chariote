import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

function Collection() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    const getData = async () =>{
      try {
          const responce = await axios.get('http://localhost:4003/api/products')
          if(responce.status == 200){
            setData(responce.data)
            console.log(responce);
          } 
      } catch (error) {
        console.log(error.message);
        
      }
    }
    getData();
  }, [])
  return (
    <div className='p-3 p-md-5'>
        <div className="d-flex justify-content-between">
            <small className="small">All Products<sup>{data.length}</sup></small>
            <p className="fs-6">FILTER <i class="bi bi-filter"></i></p>
        </div>
        <hr />
      <div className=" btn-group w-100">
        <button className='btn btn-outline-dark'>ALL</button>
        <button className='btn btn-outline-dark'>T-SHIRT</button>
        <button className='btn btn-outline-dark'>MILD</button>
        <button className='btn btn-outline-dark'>WILD</button>
      </div>

        <section className="all-products">
            <div className="row">
                {
                    data.map((item, index)=>(
                        <div className="col-6 col-md-3">
                          <a href={`/details/${item._id}`} className='nav-link'>
                          <div className="product p-2">
                                <img src={item.productImage} alt={item.productName} className="w-100" style={{minHeight:'200px', background:'lightgray', width:'100%'}} />
                                <br />
                                <small className="fs-6 fw-bold">{item.productName}</small><br />
                                <small className="small">{item.category}</small><br />
                                <small className="small">&#8377;{item.productPrice}</small>
                            </div>
                          </a>
                        </div>
                    ))
                }
            </div>
        </section>
        <center>
            <br />
            <small className="small" style={{borderBottom:"2px solid #0c0c0c", padding:'20px'}}>Viewing 1-2 out of {data.length} products</small>
        </center>
    </div>
  )
}

export default Collection