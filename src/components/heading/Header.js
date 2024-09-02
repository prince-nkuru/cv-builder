import { Link } from 'react-router-dom'
const Header = () => {
  return ( 
    <nav>
      <h1>prince blog</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">curriculum vitae</Link>       {/* instead of using a href , use Link to */}
      </div>
    </nav>
   );
}
 
export default Header;