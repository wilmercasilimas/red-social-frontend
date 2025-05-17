import React from "react";
import { useForm } from "../../hooks/useForm";
import { Global } from "../../helpers/Global";
import { useState } from "react";


export const Login = () => {
  const { form, changed } = useForm({});
  const [saved, setSaved] = useState("not_sended");

  const loginUser = async (e) => {
    e.preventDefault();

    // Datos del formulario
    let userToLogin = form;

    //Petición al backend
    const request = await fetch(Global.url + "user/login", {
      method: "POST",
      body: JSON.stringify(userToLogin),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();

    if (data.status == "success") {
      // Persistir los datos en el navegador
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSaved("login");
    } else {
      setSaved("error");
    }
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Login </h1>
      </header>

      <div className="content__posts">
        {saved === "login" ? (
          <strong className="alert alert-success">
            ¡Usuario identificado correctamente!
          </strong>
        ) : (
          ""
        )}

        {saved === "error" ? (
          <strong className="alert alert-danger">
            ¡ Error ! Revisa tus datos.
          </strong>
        ) : (
          ""
        )}

        <form className="form-login" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={changed} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>

          <input
            type="submit"
            value="Identificarte"
            className="btn btb-success"
          />
        </form>
      </div>
    </>
  );
};
