import React, { useEffect } from "react";
import "./formulario.css";
import user from "../assets/logo/user.png";
import password from "../assets/logo/password.png";
import email from "../assets/logo/email.png";
import date from "../assets/logo/date.png";
import { useForm } from "react-hook-form";
// import crudService from "../services/crudService";

const Formulario = ({
  setUpdate,
  setDataUpdate,
  update,
  dataUpdate,
  idUpdate,
  setIdUpdate,
}) => {
  // se declara el hook useForm
  const { register, handleSubmit, resetField, setValue, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setDataUpdate(data);
  };

  useEffect(() => {
    if (update) {
      setValue("name", dataUpdate.name);
      setValue("lastName", dataUpdate.lastName);
      setValue("email", dataUpdate.email);
      setValue("password", dataUpdate.password);
      setValue("date", dataUpdate.date);
    }
  }, [update, dataUpdate, setValue]);

  // controlar la forma en como se ve el formulario

  function cleanForm() {
    resetField("name");
    resetField("lastName");
    resetField("password");
    resetField("email");
    resetField("date");
    setDataUpdate({});
    setUpdate(false);
  }

  return (
    <div className="container-form-1">
      <h2>Nuevo Usuario</h2>

      <form className="container-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input">
          <label htmlFor="name">
            <img src={user} alt="logoName" />
          </label>
          <aside className="container-form-name">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Primer nombre"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Primer apellido"
              {...register("lastName", { required: true, maxLength: 20 })}
            />
          </aside>
        </div>

        <div className="container-input">
          <label htmlFor="email">
            <img src={email} alt="logoEmail" />
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingresa tu Email"
            {...register("email", { required: true, maxLength: 40 })}
          />
        </div>

        <div className="container-input">
          <label htmlFor="password">
            <img src={password} alt="logoPass" />
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", { required: true, maxLength: 20 })}
          />
        </div>

        <div className="container-input">
          <label htmlFor="date">
            <img src={date} alt="logoDate" />
          </label>
          <input
            id="date"
            type="date"
            name="date"
            placeholder="dd/mm/aaaa"
            {...register("date", { required: true, maxLength: 10 })}
          />
        </div>
        <button className="button-form">
          {update && getValues("name") !== "" ? (
            <span>Actualizar</span>
          ) : (
            <span>Registrar</span>
          )}
        </button>
      </form>

      <button className="button-form" onClick={() => cleanForm()}>
        <span>Limpiar</span>
      </button>
    </div>
  );
};

export default Formulario;
