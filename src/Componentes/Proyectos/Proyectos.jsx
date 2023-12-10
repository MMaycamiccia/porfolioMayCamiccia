
import React from 'react';
import style from "../Proyectos/Proyectos.module.css"
import ReactPlayer from 'react-player';

const Proyectos = () => {
    const videos = [
      {
        nombre: "Desing Black",
        url: "../../../public/desingblack.mp4",
        descripcion: "Proyecto Final realizado en el marco del BootCamp Henry",

      },
      {
        nombre: 'Drivers',
        url: "../../../public/drivers.mp4",
        descripcion: "Mi primer proyecto realizado en el marco del BootCamp Henry",

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