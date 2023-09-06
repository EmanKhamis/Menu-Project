import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Header() {
  return (
    <Row>
      <Col sm='12' className='justify-content-center text-center d-flex' >
        <div className='title'>قائمة الطعام
        <hr className='underline'></hr>
        </div>
           
        
      </Col>
    </Row>
  )
}

export default Header