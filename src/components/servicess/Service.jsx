import React from 'react'
import ServicesData from '../servicess/ServicesData'

const Service = () => {
  return (
    <>
    <section className='services topMargin'>
      <div className='container'>
        <div className='heading'>
          <h3>MY SERVICES</h3>
          <h1>Interactive Services Offered Me</h1>
        </div>
        <div className='contain grid topMargin'>
          {
          ServicesData.map((val)=>{
              return(
                <>
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Service