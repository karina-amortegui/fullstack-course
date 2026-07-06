
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logos">
        <a href="#">
          <img src="/tension-logo" alt="Tension Climbing" />
        </a>

        <a href="#">
          <img src="/beast-logo" alt="BEAST" />
        </a>
      </div>

      <div className="navbar-links">
        <a href="#">Tension Board</a>
        <a href="#">Training Tools</a>
        <a href="#">Gear</a>
        <a href="#">Resource Hub</a>
        <a href="#">BEAST Holds</a>
        <a href="#">Tension Training Center</a>
      </div>
      
      <div className="navbar-icons">
        <a href="#" aria-label="Account">icon1</a>
        <a href="#" aria-label="Search">icon2</a>
        <a href="#"aria-label="Cart">icon3</a>
      </div>
    </nav>
  );
};
