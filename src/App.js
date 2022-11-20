import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // import bootstrap navigation bar
import './App.css';
import { Content } from './components/content'; // import middle content
import { Footer } from './components/footer';  // import footer
import { Header } from './components/header';  // import header
import Navbar from 'react-bootstrap/Navbar'; // import nav bar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'; // import nav bar

import {Read} from './components/read'; // import for read
import { Create } from './components/create';  // import for create class
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'; // gives router and switch


// imports class from react called conponent/ this the main component
class App extends React.Component {
   // method that takes no arguements
  render() {
    
    // headers and time 
    // header, content and footer being imported
    // imported bootstrap using nav bar code given on site

    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>}></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
      </Routes>
        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div>
      </Router>
    );
  } //render
} //class app

export default App;
