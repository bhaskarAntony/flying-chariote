import React from 'react'
import './style.css'

function Category() {
  return (
   <section className="container-fluid p-2">
    <div className="row">
        <div className="col-md-6">
            <div className="c-card" style={{minHeight:'80vh', background:'lightgray'}}>
            <img src="https://storage.googleapis.com/owr_data/brand-item-image-1733142629095-d33591f6-620e-49dd-a077-1a8e1b9aae75.webp" alt="" className="w-100" />
          {/* <div className="c-content">
                <h1 className="fs-3 fw-bold">
                    COLLECTION WILD
                </h1>
          </div> */}
            </div>
        </div>
        <div className="col-md-6">
          <div className="c-card" style={{minHeight:'80vh', background:'lightgray'}}>
          <img src="https://storage.googleapis.com/owr_data/brand-item-image-1733142389145-cdbfbd05-a238-4c9e-a497-271f864dd583.webp" alt="" className="w-100" />
          {/* <div className="c-content">
                <h1 className="fs-3 fw-bold">
                    COLLECTION WILD
                </h1>
          </div> */}
          </div>
        </div>
    </div>
   </section>
  )
}

export default Category