import React,{useState} from 'react'
import { Button, Form, Nav, Navbar, Row,NavDropdown,Container } from 'react-bootstrap'

function NavBar({filterBySearch}) {
  const [searchValue, setSearchValue] = useState('')
  const onSearch =(e)=>{
   // e.preventDefault()
    filterBySearch(searchValue);
    setSearchValue('')
  }
  return (
    <Row>
    <Navbar bg='dark' expand="lg" variant='dark' >
    <Container >
      <Navbar.Brand href="#">
        <div className='brand-color'>مطعم جديد</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="ابحث.."
            className="me-2"
            onChange={e=>setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button type="button" onClick={()=>onSearch()} className='btn-search  '>ابحث</button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </Row>
  )
}

export default NavBar