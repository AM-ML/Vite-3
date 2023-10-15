'use client';

import { Link, Outlet } from 'react-router-dom'
import { Button, Navbar } from 'flowbite-react';

export function MainLayout(){
	return(
		<>
			<div className="container">
				<div className="row">
					 <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/tree.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="" active>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link href=""><Link to="/1">Books</Link></Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
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
