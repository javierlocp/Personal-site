import { Link } from 'react-router-dom';


const Navbar = () => {
  return(
    <header className="flex justify-between mb-32 items-center">
      <div className="flex flex-col">
        <Link to="/" className="text-neutral-50 font-semibold">Javier Lo</Link>
        <span className="text-neutral-500">Product Design Leader</span>
      </div>      
      <nav className="flex gap-4 text-sm">
        <Link to="/">Home</Link>
        <Link to="/blog">Writings</Link>
      </nav>
    </header>
  )
}

export default Navbar;