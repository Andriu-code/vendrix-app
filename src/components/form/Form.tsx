import React, { useState } from "react";
import "./Form.css";

export const CotizaForm: React.FC = () => {
  const [formData, setFormData] = useState({
    empresa: "",
    nombre: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movlepap", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        window.location.href = "/thanks";
      } else {
        console.log("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error(error);
    };
  }

  return (
    <section className="cotiza-section">
      <div className="form-container">
        <div className="form-content-wrapper">
          {" "}

          {/*contenedor interno */}
          <h1 className="form-title">Cotiza con Nosotros</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                className="form-control"
                value={formData.empresa}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="btn-form">
                Quiero Cotizar!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
