import style from "../NavBar/NavBar.module.css";
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const NavBar = () => {


  return (
    <div className={style.navBar}>

<Link to="/" className={style.home}>
        <IoHomeOutline />
      </Link>


<a     
      href="https://www.linkedin.com/in/mayracamiccia"
      target="_blank"
      rel="noopener noreferrer"
      className={style.icono}
    >
      <FaLinkedin size={32} />
    </a>
    <a
      href="mayraacamiccia@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className={style.gmail}
    >
      <FaEnvelope size={32} />
    </a>

    <a
      href="https://wa.me/1164940892" 
      target="_blank"
      rel="noopener noreferrer"
      className={style.wsp}
    >
      <FaWhatsapp size={32} />

    </a>
    
    </div>
  );
};

export default NavBar;
