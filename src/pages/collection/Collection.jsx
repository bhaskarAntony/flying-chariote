import React from 'react'
import './style.css'
import data from '../../data/data'

function Collection() {
  return (
    <div className='p-3 p-md-5'>
        <div className="d-flex justify-content-between">
            <small className="small">MILD<sup>15</sup></small>
            <p className="fs-6">FILTER <i class="bi bi-filter"></i></p>
        </div>
        <hr />
        <p className="fs-6 fw-bold">T-SHIRTS</p>

        <section className="all-products">
            <div className="row">
                {
                    data.map((item, index)=>(
                        <div className="col-md-3">
                          <a href={`/details/${item.id}`} className='nav-link'>
                          <div className="product p-2">
                                <img src={item.productImage} alt={item.productName} className="w-100" style={{minHeight:'200px', background:'lightgray', width:'100%'}} />
                                <br />
                                <small className="fs-6 fw-bold">{item.productName}</small><br />
                                <small className="small">{item.productCategory}</small><br />
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