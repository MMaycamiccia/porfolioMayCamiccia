
import React from 'react';
import style from "../Proyectos/Proyectos.module.css"
import ReactPlayer from 'react-player';

const Proyectos = () => {
    const videos = [
       {
        nombre: 'Drivers',
        url: "/drivers.mp4",
        descripcion: "Mi primer proyecto realizado llamado Drivers."
      },
      {
        nombre: "Desing Black",
        url: "/desingblack.mp4",
        descripcion: "Proyecto realizado en equipo con  6  (seis) personas."

      },
     
    ];
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {videos.map((video, index) => (
          <div className={style.body} key={index} >
            <h2>{video.nombre}</h2>
            <ReactPlayer url={video.url} controls width="100%" height="auto" />
            <p>{video.descripcion}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Proyectos;
