import { Navbar, Avatar } from "flowbite-react";

const Navbars = () => {
    return (
        <Navbar
        fluid={true}
        rounded={true}
         className="bg-primary">
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IZIad1tePVKESueLv8MrIa1_-pCI8PhJhg&usqp=CAU"
            className="mr-3 h-6 sm:h-9"
            alt="LUTFLIX Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            LUTFLIX
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <Avatar rounded={true} />
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link
            href="/navbars"
            active={true}
            >
            Home
            </Navbar.Link>
            <Navbar.Link href="#Movie">
            Movies
            </Navbar.Link>
            <Navbar.Link href="#TV">
            TV Shows
            </Navbar.Link>
            <Navbar.Link href="#About">
            About
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars;