
// import React, { useState,useRef } from "react"
// import PostData from './food_bank.json'
// import {
//   Card, Button, Alert, Navbar, Container, Nav, Modal,
//   InputGroup,
//   FormControl,
//   DropdownButton,
//   Dropdown,
  

// } from "react-bootstrap"

// import c1 from "./image/image1.jpg"
// import { doc, setDoc } from "firebase/firestore";
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"
// import logo from './image/logo.png';



// // import Carousel from "./carousal";

// export default function Dashboard() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
//   const history = useHistory()

//   async function handleLogout() {
//     setError("")

//     try {
//       await logout()
//       history.push("/login")
//     } catch {
//       setError("Failed to log out")
//     }
//   }

//   return (
//     <>
//       <Navbar>
//         <Container>
//           <Navbar.Brand href="#home"><img src={logo} alt="Logo" height="60px" /></Navbar.Brand>
//           {/* <Nav.Link >Need Food</Nav.Link> */}
          
//           &nbsp;&nbsp;

          
//           {/* <Nav.Link href="#home">Food Bank</Nav.Link> */}
//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         

//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Navbar.Text>
//               <strong>Email:</strong> {currentUser.email}
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <Button onClick={handleLogout}>Log Out</Button>
//               {/* <Button variant="link" onClick={handleLogout}>
//           Log Out
//         </Button> */}
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>


// <br/>

// <br/>
// <br/>
// <br/>
//       <div className="card" style={{width: '18rem'}}>
//         <img src={c1} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">Do You Need Food?</h5>
//           <p className="card-text">here is the form fill it then we will serve you.</p>
//           <Example /> &nbsp;&nbsp;&nbsp; <Bank />
//         </div>
//       </div>
    

      
//     </>
//   )
// }





// function Example() {
//   const [show, setShow] = useState(false);
//   const [value, onChange] = useState(new Date());

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="success" onClick={handleShow}>
//         Need Food
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//           Fill this form to get food!
//           <InputGroup className="mb-3">
//             <InputGroup.Text>Your Name</InputGroup.Text>
//             <FormControl aria-label="Name" />
//           </InputGroup>

//           <InputGroup className="mb-3">
//             <InputGroup.Text>Your Father Name</InputGroup.Text>
//             <FormControl aria-label="Father Name" />

//           </InputGroup>

//           <InputGroup className="mb-3">
//             <InputGroup.Text type="number">Your CNIC Number</InputGroup.Text>
//             <FormControl aria-label="CNIC" />

//           </InputGroup>


//           <InputGroup className="mb-3">
//             <InputGroup.Text type="number">Your Family Members</InputGroup.Text>
//             <FormControl aria-label="No of Family Members" />

//           </InputGroup>


//           <InputGroup className="mb-3">
//             <InputGroup.Text type="number">Choose Help Category</InputGroup.Text>
//             <DropdownButton id="dropdown-basic-button" title="Select Type">
//               <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>

//             </DropdownButton>

//           </InputGroup>


//           <InputGroup className="mb-3">
//             <InputGroup.Text type="number">Times You Need</InputGroup.Text>
//             <DropdownButton id="dropdown-basic-button" title="Select Type">
//               <Dropdown.Item href="#/action-1">Daily 1 time</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Daily 2 times</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Daily 3 times</Dropdown.Item>


//             </DropdownButton>

//           </InputGroup>



//           <InputGroup className="mb-3">
//             <InputGroup.Text type="number">Upload Your Image</InputGroup.Text>
//             <input type="file" name="file" />
//           </InputGroup>


//           <InputGroup className="mb-3">
//             <InputGroup.Text type="number">Upload Your CNIC front and Back Image</InputGroup.Text>
//             <input type="file" name="file" />
//           </InputGroup>


//           <InputGroup className="mb-3">
//             <InputGroup.Text>Your Monthly Income</InputGroup.Text>
//             <FormControl aria-label="income" />
//           </InputGroup>


//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }




// function Bank() {
//   const [show, setShow] = useState(false);
//   const [value, onChange] = useState(new Date());

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="success" onClick={handleShow}>
//         Food Bank
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Food center</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//          <center> All Food Banks Available</center>

//           <div>
//         {PostData.map((postDetail, index) => {
//           return <h6>
//            <b> {postDetail.branch_name}</b>
//            <p>Latitude: {postDetail.latitude} <br/>
//            Longitude: {postDetail.longitude}</p>

           
           

           


//           </h6> 
          
          
//         })}
//       </div>
//         </Modal.Body>
//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Submit
//           </Button> */}
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }



import React, { useState,useRef } from "react"
import PostData from './food_bank.json'
import {
  Card, Button, Alert, Navbar, Container, Nav, Modal,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Row, 
  Col,
  Carousel,
  Spinner 
} from "react-bootstrap"


import { doc, setDoc } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from './image/logo.png';
import c1 from './image/111.gif';
import c2 from './image/1111.gif';
import c3 from './image/burger.gif';



// import Carousel from "./carousal";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <br />
      <h4 className="edit" > <img src={logo} alt="Logo" width="140" height="140"/> <b>KHANA SAB K LIAY </b>
    </h4>
      <h1><p className="h1">
           <b className="profile">Welcome To Food App (Khana Sab Ky Lia) </b> <div className="h2">
   <h5 className="profile">Profile</h5>
 <h6 className="profile">Email: {currentUser.email}</h6><p>
          <Button > <Link to="/update-profile" className="Btn">
             Update Profile
           </Link></Button></p>
           <Button  className="Btn" onClick={handleLogout}>
           Log Out
         </Button>
{/* <Row>      
    <Col>
      <Card>
        <Card.Img variant="top" src="./images/check.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>    
    </Col></Row> */}
  

           
  
    </div>
       
      
        </p>
      </h1>

      <Navbar>
        
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo" height="60px" /></Navbar.Brand>
          {/* <Nav.Link >Need Food</Nav.Link> */}
          <Example />
          &nbsp;&nbsp;<br/>
 
          <Bank />
          {/* <Nav.Link href="#home">Food Bank</Nav.Link> */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Text>Status:</Navbar.Text>
          <Nav.Link href="#home">Pending...</Nav.Link>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <strong>Email:</strong> {currentUser.email}
              &nbsp;&nbsp;
             
       
              {/* <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
     
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

     
    </>
  )
}





function Example() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Need Food
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Fill this form to get food!
          <InputGroup className="mb-3">
            <InputGroup.Text>Your Name</InputGroup.Text>
            <FormControl aria-label="Name" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Your Father Name</InputGroup.Text>
            <FormControl aria-label="Father Name" />

          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Your CNIC Number</InputGroup.Text>
            <FormControl aria-label="CNIC" />

          </InputGroup>

          

          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Your Family Members</InputGroup.Text>
            <FormControl aria-label="No of Family Members" />

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Choose Help Category</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Monthly</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Yearly</Dropdown.Item>

            </DropdownButton>

          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Times You Need</InputGroup.Text>
            <DropdownButton id="dropdown-basic-button" title="Select Type">
              <Dropdown.Item href="#/action-1">Daily 1 time</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Daily 2 times</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Daily 3 times</Dropdown.Item>


            </DropdownButton>

          </InputGroup>



          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text type="number">Upload Your CNIC front and Back Image</InputGroup.Text>
            <input type="file" name="file" />
          </InputGroup>


          <InputGroup className="mb-3">
            <InputGroup.Text>Your Monthly Income</InputGroup.Text>
            <FormControl aria-label="income" />
          </InputGroup>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




function Bank() {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Food Bank
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;Food Banks</Modal.Title>
        </Modal.Header>
        <Modal.Body>

         <center> All Food Banks Available</center>

          <div>
        {PostData.map((postDetail, index) => {
          return <h6>
           <b> {postDetail.branch_name}</b>
           <p>Latitude: {postDetail.latitude} <br/>
           Longitude: {postDetail.longitude}</p>

           
           

           


          </h6> 
          
          
        })}
     
      </div>

        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button> */}
        </Modal.Footer>
      </Modal>
   
    <div>    &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;   &nbsp;&nbsp;
         <Alert variant="success">
         <Alert.Heading>Hey, nice to see you</Alert.Heading>
         <p>
           Aww yeah, you successfully read this important alert message. The world is an utterly difficult place to live because the inequality is just so devastating. There are so many people who do not have food to eat
         </p>

        
         <hr />
         <p className="mb-0">
         Life as such is challenging and the humans have made it more complicated because life ... where the rich are getting richer and the poor are dying for food.
         </p>
       </Alert> 
       <h1 className="edit"> Monthly  Packet  Delivery is also Available</h1>
       <Card style={{ width: '18rem' }} className="flx">
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuHG25rQOSYNIBaxzdY-Z4hFiQC2coJAiZVQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>    &nbsp;&nbsp;   &nbsp;&nbsp;Nearest location </Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="https://www.google.com/maps/@25.1926746,67.1554599,10z?hl=en" >Go Location</Button>

  </Card.Body>
  {' '}
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    turn on Your Location...
  </Button>
  
</Card>
<Card style={{ width: '18rem' }} className="fl">
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>    &nbsp;&nbsp;   &nbsp;&nbsp;QR Genertor </Card.Title>
    <Card.Text>
    Quick Response (QR) Codes are two-dimensional barcodes
    </Card.Text>
    <Button variant="primary" href="https://qrexplore.com/generate/" >Go </Button>

  </Card.Body>
  {' '}
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    QR Generates...
  </Button>
  
</Card>
<Button variant="outline-dark">Add Skip in two Seconds</Button>

       </div> </>
         );
}
