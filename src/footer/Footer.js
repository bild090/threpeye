import Mail from '../img/mail.png';
import Phone from '../img/phone.png';
const Footer = () => {
    return (
        <div className="footer"> 
            <div className="Communication">
                <p id="contact-text"> تواصل معنا  </p>
                <div> 
                <a href="mailto:info@thepeye.com?Subject=Some%20subject">info@thepeye.com </a><img src={Mail} />
                </div>
                <div>
                0096650549441 <img src={Phone} />
                </div>
               
            </div>
        </div>
    )
}

export default Footer;