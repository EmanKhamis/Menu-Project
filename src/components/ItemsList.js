import React from 'react'
import { Col,Row,Card } from 'react-bootstrap'
//import { Zoom } from "react-reveal";

function ItemsList({itemsData}) {
  return (
    <Row>
     
      {itemsData.length >= 1 ? (itemsData.map(item=>{
       return( <Col key={item.id} sm='12' className=' mb-3' >
        <Card  className='d-flex flex-row main-card card-color'>
            <Card.Img className='img-item' variant="top" src={item.imgUrl} />
            <Card.Body>
              <Card.Title>
              <div className='item-details'>
              <div className='item-title'> {item.title}</div>
              <div className='item-price'> {item.price}  </div>
              </div>
              </Card.Title>
              <Card.Text>
              <div className='item-description'>{item.description}
              </div>
                </Card.Text>
              </Card.Body>
        </Card>
      </Col>)
      })) : <h3>  لا يوجد اصناف </h3>}
      
    </Row>
  )
}

export default ItemsList