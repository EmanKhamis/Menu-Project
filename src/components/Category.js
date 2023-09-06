import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Category({filterByCategory,allCategory}) {
  const onFilter =(newCategory)=>{
    filterByCategory(newCategory);
  }
  return (
    <Row className='my-2 mb-5'>
      <Col sm="12" className='d-flex justify-content-center'>
        {allCategory.length >= 1 ? (allCategory.map(cat=>{
           return(
            <button onClick={()=>onFilter(cat)} style={{border:"1px solid  rgb(245, 165, 165)"}}
             className='btn mx-2'>{cat}</button>
           )
        })) : <h3> لا يوجد وجبات</h3>}
  
      </Col>
    </Row>
  )
}

export default Category