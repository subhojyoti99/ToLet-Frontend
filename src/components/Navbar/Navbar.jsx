// import Button from 'react-bootstrap/Button';
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../img/pngwing.com.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavbarComponent = () => {
  function signOut() {
    localStorage.clear();
    window.location = "/";
  }
  return (
    // <Navbar expand="lg" className="nav_container">
    //     <Container fluid>
    //         {/* <header className="z-50 w-screen bg-blue-500 p-6 text-white px-16 rounded-bl-3xl rounded-tr-3xl">
    //             <div className="hidden md:flex w-full h-full">
    //                 <img src={Logo} className="absolute w-10 object-cover left-28" alt="logo" />
    //                 <p className="relative text-headingColor text-2xl font-bold shadow-md">Rental Parrot</p>
    //             </div>
    //         </header> */}
    //         <img src={Logo} className="absolute w-32 object-cover left-28" alt="logo" />
    //         <Navbar.Brand href="#" className="brand">RentAlbatross</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="navbarScroll" />
    //         <Navbar.Collapse id="navbarScroll">
    //             <Nav
    //                 className="me-auto my-2 my-lg-0 flex fixed w-screen justify-center content-end text-center"
    //                 style={{ maxHeight: '100px' }}
    //                 navbarScroll
    //             >
    //                 <Nav.Link href="#action1">Home</Nav.Link>
    //                 <Nav.Link href="#action2">Link</Nav.Link>
    //                 <NavDropdown title="Link" id="navbarScrollingDropdown">
    //                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
    //                     <NavDropdown.Item href="#action4">
    //                         Another action
    //                     </NavDropdown.Item>
    //                     <NavDropdown.Divider />
    //                     <NavDropdown.Item href="#action5">
    //                         Something else here
    //                     </NavDropdown.Item>
    //                 </NavDropdown>
    //                 <Nav.Link href="#" disabled>
    //                     Link
    //                 </Nav.Link>
    //             </Nav>
    //             {/* <Form className="d-flex">
    //                 <Form.Control
    //                     type="search"
    //                     placeholder="Search"
    //                     className="me-2"
    //                     aria-label="Search"
    //                 />
    //                 <Button variant="outline-success">Search</Button>
    //             </Form> */}
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>

    <Navbar expand="xxl" className="bg-toletHeading mb-3">
      <Container fluid>
        <img
          src={Logo}
          className="absolute w-32 object-cover left-28"
          alt="logo"
        />
        <Navbar.Brand href="/" className="brand">
          RentAlbatross
        </Navbar.Brand>
        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xxl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-xxl`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Form className="absolute flex left-[43%]">
                <Form.Control
                  variant="outline-success"
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav className="justify-content-end flex pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/auth/register">Register</Nav.Link>
              <Nav.Link href="/auth/login">Login</Nav.Link>
              <Nav.Link href="/room-register">Add room</Nav.Link>
              <Nav.Link href="/rooms">Rooms</Nav.Link>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2">
                    More
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/my-account"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            My Choice List
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>

                      <hr />
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block w-full px-4 py-2 text-left text-sm"
                            )}
                            onClick={signOut}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* <NavDropdown
                                title="Dropdown"
                                className='ml-10'
                                id={`offcanvasNavbarDropdown-expand-xxl`}
                                >
                                <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Wish List
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Logout
                                </NavDropdown.Item>
                            </NavDropdown> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
