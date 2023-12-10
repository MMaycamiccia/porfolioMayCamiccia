import style from '../Home/Home.module.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Home() {
  const handleDownloadCV = () => {

   const cvFileUrl = "/cv.png";

   
    const link = document.createElement('a');
    link.href = cvFileUrl;
    link.download = 'Cv-CamicciaMayra.png'; 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className={style.body}>
      <div>
        <Link to="/about">
          <button className={style.button}> ABOUT ME </button>
        </Link>

        <Link to="/proyectos">
          <button className={style.button1}> MIS PROYECTOS </button>
        </Link>

        <Link to="/tecnologias">
          <button className={style.button2}> TECNOLOGIAS </button>
        </Link>

        <button className={style.button4} onClick={handleDownloadCV}>
          DESCARGAR CV
        </button>
        
      </div>

      <NavBar />
    </div>
  );
}

export default Home;
