import { Link } from 'react-router-dom';

import logo from '../img/eye.png'

 
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <a href="#aboutUs">من نحن ؟</a>
                <a href="#vision">رؤيتنا</a>
                <a href="#goals">أهدافنا</a>
                <a href="#wisdom">حكمتنا</a>
                <a href="#services">خدماتنا</a>
                <a href="#clients">عملاؤنا</a>
                <a href="#contact">تواصل معنا</a>
            </div>
            <img src={logo} className="logo" />
        </nav>  
        
    );
}
 
export default Navbar;