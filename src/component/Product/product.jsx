
import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

// Images import
import img1 from '../../assets/11.jpg'
import img2 from '../../assets/12.jpg'
import img3 from '../../assets/13.jpg'


// Product data array
const products = [
  { id: 1, title: 'Product 1', text: 'This is product 1', img: img1 },
  { id: 2, title: 'Product 2', text: 'This is product 2', img: img2 },
  { id: 3, title: 'Product 3', text: 'This is product 3', img: img3 },
]

const Product = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {products.map((product) => (
        <CCard key={product.id} style={{ width: '18rem' }}>
          <CCardImage orientation="top" src={product.img} alt={product.title} />
          <CCardBody>
            <CCardTitle>{product.title}</CCardTitle>
            <CCardText>{product.text}</CCardText>
            <CButton color="primary" href="#">
              Go somewhere
            </CButton>
          </CCardBody>
        </CCard>
      ))}
    </div>
  )
}

export default Product
