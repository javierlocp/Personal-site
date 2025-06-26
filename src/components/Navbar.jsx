// Navbar Component

const Navbar = () => {
  return(
    <header className="flex justify-between mb-32 items-center">
      <div className="flex flex-col">
        <a href="#" className="text-neutral-50">Javier Lo</a>
        <span className="text-neutral-500">Product Design Leader</span>
      </div>      
      <ul className="flex gap-6 text-sm">
        <li><a href="#">Home</a></li>
        <li><a href="#">Writing</a></li>
      </ul>
    </header>
  )
}

export default Navbar