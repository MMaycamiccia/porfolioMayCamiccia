
import { useState } from "react";
import styles from "../Formularios/FormularioMail.module.css";
import Swal from "sweetalert2";
import axios from "axios";

import InputMask from "react-input-mask";

function FormularioMail() {
  const [formData, setFormData] = useState({
    Destinatario: "mayraacamiccia@gmail.com",
    Nombre: "",
    Email: "",
    Mensaje: "",
  });

  const [errors, setErrors] = useState({}); // objeto vacío para los errores

  const validationForm = () => {
    const newErrors = {};

    if (formData.Nombre.trim() === "") {
      newErrors.Nombre = "El nombre es obligatorio";
    }
    if (formData.Email.trim() === "") {
      newErrors.Email = "El email es obligatorio";
    }
    if (formData.Mensaje.trim() === "") {
      newErrors.Mensaje = "El mensaje es obligatorio";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validationForm({
        ...formData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validationForm();
 
 if (Object.keys(validationErrors).length === 0) {
    try {
      // Enviar el formulario a Formspree
      const response = await axios.post('https://formspree.io/f/mdorqwgl', {
        Nombre: formData.Nombre,
        Email: formData.Email,
        Mensaje: formData.Mensaje,
      });

      if (response.status === 200) {
        // Mostrar mensaje de éxito
        Swal.fire({
          title: 'Envío exitoso',
          text: 'Mensaje enviado exitosamente',
          icon: 'success',
          showConfirmButton: false,
          timer: 3000,
          background: (217, 217, 217, 0.482),
          color: '#fff43',
        });

        // Reiniciar el formulario
        setFormData({
          ...formData,
          Nombre: '',
          Email: '',
          Mensaje: '',
        });
      } else {
        // Mostrar mensaje de error
        Swal.fire({
          title: 'Error',
          text: 'Ocurrió un error al enviar el mensaje',
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error al enviar el formulario a Formspree:', error);
      // Mostrar mensaje de error
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al enviar el mensaje',
        icon: 'error',
      });
    }
  } else {
    // Hay errores de validación
    setErrors(validationErrors);
  }
};
     return (
    <>
      <div className={styles.containerFor}>
        <div className={styles.formContainer}>
          <div className={styles.contain}>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <input
                    type="text"
                    name="Destinatario"
                    value={formData.Destinatario}
                    readOnly
                    placeholder="Destinatario"
                    className={styles.inputs}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <input
                    type="text"
                    name="Nombre"
                    value={formData.Nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    className={styles.inputs}
                  />
                  {errors.Nombre && (
                    <div
                      className={styles.error}
                      style={{ color: "rgba(255, 0, 0, 0.7)" }}
                    >
                      {errors.Nombre}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <input
                    type="text"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className={styles.inputs}
                  />
                  {errors.Email && (
                    <div
                      className={styles.error}
                      style={{ color: "rgba(255, 0, 0, 0.7)" }}
                    >
                      {errors.Email}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <dir className={styles.Mensaje}>
                    <textarea
                      name="Mensaje"
                      value={formData.Mensaje}
                      onChange={handleChange}
                      placeholder="Mensaje"
                      rows="4"
                      required
                      className={styles.inputs}
                    />
                    {errors.Mensaje && (
                      <div
                        className={styles.error}
                        style={{ color: "rgba(255, 0, 0, 0.7)" }}
                      >
                        {errors.Mensaje}
                      </div>
                    )}
                  </dir>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormularioMail;
