import React  from 'react';
import './Styles/Navbar.css';
import whiteFavicon from './imgs/favicon-white.png';

const Navbar = (props) => {

    return (
        <>
            <div className='navbar'>
                <div className='nameAndFaviconContainer'>
                    <img className='whiteFavicon' src={whiteFavicon} alt=""/>
                    <a href='/' id='name' className='links'  to='/'>Stephanie Lane</a>
                </div> 
                <a href='/' className='links navHome'  to='/'>Home</a>
                <a href='/projects' className='links navProjects'  to='/projects'>Projects</a>
                <a href='/resume' className='links navResume'  target='_blank' rel="noopener noreferrer" to='/resume'>Resume</a>
                <a href='/contact' className='links navContact' to='/contact'>Contact</a>
            </div>

            <div className='navbar2'>
                <div className='nameAndFaviconContainer'>
                    <img className='whiteFavicon' src={whiteFavicon} alt=""/>
                    <a href='/' id='name' className='links'  to='/'>Stephanie Lane</a>
                </div>                
                <button className="toggleHamburger" onClick={props.drawerClickHandler}>
                    <div className="toggleHamburgerLine"></div>
                    <div className="toggleHamburgerLine"></div>
                    <div className="toggleHamburgerLine"></div>
                </button>
            </div>
        </>
    );
};

export default Navbar;