import React from 'react'
import { NavLink } from 'react-router'
import "./Navbar.css"

function Navbar() {
  return (
    <ul style={styles.navList}>
        <li style={styles.navLogo}>Task Manager</li>
        <li style={styles.navItem}>
            <NavLink to="/" style={styles.navLink}>Home</NavLink>
        </li>
        <li style={styles.navItem}>
            <NavLink to="/Create_and_Update/new" style={styles.navLink}>Add Task</NavLink>
        </li>
        <li style={styles.navItem}>
            <NavLink to="/viewtask" style={styles.navLink}>View Tasks</NavLink>
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
    fontSize: '16px',
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
    fontSize: '18px',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: '500',
    transition: 'color 0.3s',
    marginRight: 'auto'
  }
};


export default Navbar