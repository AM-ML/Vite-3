'use client';

import { Link, Outlet } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react';

export function MainLayout(){
	return(
		<>
			<div className="container">
				<div className="row">
					 <Navbar fluid rounded className="bg-dark">
      <Navbar.Brand href="">
        <img src="/tree.svg" className="mr-3 h-6 sm:h-9 me-3 ms-3" alt="Flowbite React Logo"/>
        <span className="self-center mb-2 whitespace-nowrap text-xl font-semibold dark:text-white">Encyclopedia</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/get-started">
          <Button className="btn btn-sm me-5">Get started</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="mb-2 text-secondary" active>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link to="/books" className="mb-2 text-secondary"><Link to="/books">Books</Link></Navbar.Link>
        <Navbar.Link className="mb-2 text-secondary" href="#"><Link to="/services">Services</Link></Navbar.Link>
        <Navbar.Link className="mb-2 text-secondary" href="#"><Link to="/pricing">Pricing</Link></Navbar.Link>
        <Navbar.Link className="mb-2 text-secondary" href="#"><Link to="/contact">Contact</Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
				</div>
				<hr/>
				<div className="row">
					<Outlet />
				</div>
			</div>
		</>
	)
}
