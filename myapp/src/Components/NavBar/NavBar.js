import React from  'react';
import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';

const Navbar = () =>{
    return (
        <div className='navBar' >
            <span className="logo"><img className="logoImg"src="https://www.thelosthostels.com/wp-content/themes/losthostel/images/logo.png" alt="logo"/><span className="logoTxt">The Lost Hostels</span></span>
            <span className='menuIcon'><MenuIcon fontSize="large"/></span>
            <span className='navBarItems'>
            <span className='navBaritem' > Home</span>
            <span className='navBaritem'> Locations</span>
            <span className='navBaritem'> Policy</span>
            <span className='navBaritem'> Facilities</span>
            <span className='navBaritem'>Gallery</span>
            <span className='navBaritem'>PartnerShip</span>
            </span>
        </div>
    )
}

export default Navbar