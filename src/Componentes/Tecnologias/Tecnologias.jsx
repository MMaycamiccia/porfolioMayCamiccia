

import { FaJs, FaReact, FaNode, FaDatabase, FaServer, FaHtml5, FaCss3, FaGit , FaFigma } from "react-icons/fa";
import {  AiOutlineAntDesign } from 'react-icons/ai';
import { DiReact, DiPhotoshop } from 'react-icons/di';

import styles from './Tecnologias.module.css';

const Tecnologias = () => {
    const tecnologiasData = [
      { icon: <FaJs />, name: 'JavaScript' },
      { icon: <FaReact />, name: ' React' },
      { icon: <FaNode />, name: ' Node.js' },
      { icon: <FaDatabase />, name: 'PostgreSQL' },
      { icon: <FaServer />, name: 'Express' },
      { icon: <FaHtml5 />, name: 'HTML' },
      { icon: <FaCss3 />, name: 'CSS' },
      { icon: <FaGit />, name: ' Git' },
      { icon: <DiPhotoshop />, name: 'Photoshop' },
      { icon: <FaFigma />, name: 'Figma' },
      { icon: <AiOutlineAntDesign />, name: 'AI' },
      { icon: <DiReact />, name: 'ReactVite' },
    ];
  
    return (
      <div className={styles.texto}>     

 <h1> <center> <b> Mi perfil Tecnico:  </b></center> </h1>
 <p> Mi experiencia abarca tecnologías claves que impulsan el desarrollo web moderno, tambien tengo una sólida base tecnica 
 y habilidades diversificadas.
         <br /><br/>

Aquí destaco algunas de mis habilidades técnicas:
<br/>
        <br />
<strong> <u> Lenguajes y Frameworks</u> : </strong>
        <br /><br/>

<strong> JavaScript y React: </strong> 
Profundo conocimiento de JavaScript, con experiencia destacada en la construcción de interfaces de usuario reactivas utilizando React.
<br/><br/>

<strong> Redux: </strong> 
Habilidad para gestionar de manera efectiva el estado de la aplicación mediante la implementación de patrones de gestión de estado con Redux.
 <br/>
 <br/>
<strong> <u>Backend</u>:</strong>
<br/><br/>

<strong> Node y Express: </strong> 
<br/>

Experiencia en el desarrollo del lado del servidor utilizando Node.js y Express, permitiendo la construcción de aplicaciones escalables y eficientes.
<br/>
<br/>

<strong> <u> Base de Datos</u>:</strong>
<br/><br/>

<strong> PostgreSQL: </strong> Competencia en el diseño y gestión de bases de datos relacionales con PostgreSQL para garantizar la eficiencia en la persistencia y recuperación de datos.
<br/>
<br/>
<strong> <u> Frontend</u>:</strong>
<br/>
<br/>

<strong>  HTML y CSS: </strong> Destreza en la creación de interfaces de usuario atractivas y accesibles mediante la implementación de HTML semántico y estilos CSS eficientes.
<br/>
<br/>

<strong> ReactVite: </strong> Experiencia en el uso de React Vite para un desarrollo rápido y eficiente de aplicaciones React.
<br/>
<br/>

<strong> <u> Control de Versiones</u>:</strong>
<br/>
<br/>

<strong> Git:</strong> Habilidad para trabajar en equipos colaborativos utilizando Git para el control de versiones, asegurando una gestión eficiente del código fuente.
<br/><br/>

<strong>
<u> Diseño Gráfico</u>:</strong>
<br/>
<br/>

<strong>Photoshop, CorelDraw, Figma, AI </strong>:Conocimientos en herramientas de diseño gráfico como Photoshop y CorelDraw, así como habilidades en diseño de interfaz de usuario utilizando Figma y Adobe Illustrator (AI).
<br/> <br/>

<strong> <u> Adaptabilidad y Creatividad</u>: </strong>
<br/><br/>
<strong>
Capacidad para adaptarme a nuevos entornos y tecnologías.
Creatividad en el diseño de interfaces y experiencia del usuario.
Estasabilidades técnicas me permite abordar proyectos de desarrollo web de manera integral, desde la conceptualización y diseño hasta la implementación y optimización.
Estoy comprometido con la excelencia técnica y siempre busco mejorar y aprender en un entorno dinámico y desafiante.
</strong>

</p>
      <div className={styles.contenedor}>
        {tecnologiasData.map((tecnologia, index) => (
          <div key={index} className={styles.icono}>
            {tecnologia.icon}
            <span>{tecnologia.name}</span>
          </div>
        ))}

      </div>
      </div>
    );
  };
  
  export default Tecnologias;


