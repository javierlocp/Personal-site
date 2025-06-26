// Navbar Component

const Navbar = () => {
  return(
    <header className="flex justify-between content-center mb-32">
      <div className="flex flex-col">
        <a href="#" className="text-neutral-50">Javier Lo</a>
        <span className="text-neutral-500">Product Designer</span>
      </div>      
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">Writing</a></li>
      </ul>
    </header>
  )
}

export default Navbar