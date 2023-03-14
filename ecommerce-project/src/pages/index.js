import React from 'react'

import {Product, Footer, HeroBanner} from '../../components';
import { client } from '../../lib/client'
const index = () => {
  return (
    <div>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'product2'].map(
          (product) => product)}
      </div>
      <Footer />
    </div>
  )
}

export default index
