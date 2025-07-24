import {NavLink} from "react-router"
import ShinyText from './animation-pages/ShinyText';
import "./css/Navbar.css"

function Navbar() {
  return (
    <ul style={styles.navList}>
            <li style={styles.navLogo}>
              <ShinyText text="Movie Mania" disabled={false} speed={3} className='custom-class' />
            </li>
            <li style={styles.navItem}>
                <NavLink to="/" style={styles.navLink}>Home</NavLink>
            </li>
            <li style={styles.navItem}>
                <NavLink to="/movies/upcoming" style={styles.navLink}>Upcoming Movies</NavLink>
            </li>
            <li style={styles.navItem}>
                <NavLink to="/movies/search" style={styles.navLink}>Search</NavLink>
            </li>
    </ul>
  )
}

const styles = {
  navList: {
    fontFamily: 'Poppins',
    height: '3rem',
    listStyle: 'none',
    display: 'flex',
    justifyContent: "right",
    padding: 0,
    marginBottom: '1rem',
    backgroundColor: '#1f2227ff',
    paddingLeft: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  navItem: {
    fontSize: '17px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    transition: 'color 0.3s',
    marginRight: '20px',
    padding: '10px'
  },
  navLinkHover: {
    color: '#ffdd57',
  },
  navLogo: {
    fontSize: '20px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    transition: 'color 0.3s',
    marginRight: 'auto'
  }
};

export default Navbar