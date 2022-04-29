import React, { useEffect, useState } from "react";
import crudService from "../services/crudService";
import CardInfo from "./CardInfo";
import "./cardContainer.css";

const CardContainer = ({
  data,
  setDataUpdate,
  setUpdate,
  setIdUpdate,
  setRender,
}) => {
  // se maneja el estado del id que se modifica
  const [id, setId] = useState(0);
  // se procesa la data, ya que recibimos como respuesta un objeto con arreglos dentro,
  let arrayKey = [];
  if (data) {
    arrayKey = Object.keys(data);
  }

  useEffect(() => {
    let confirmation;
    if (id) {
      confirmation = window.confirm("¿Está seguro de eliminar?");
      if (confirmation) {
        crudService()
          .deleteData(id)
          .then((res) => {
            setRender(Math.random());
          });
      }
    }
  }, [id, setRender]);

  return (
    <div className="container-list-card">
      <h2>USUARIOS</h2>

      <div className="list-card">
        {data ? (
          arrayKey.map((key) => {
            return (
              <CardInfo
                key={key}
                info={data[key]}
                setId={setId}
                id={key}
                setDataUpdate={setDataUpdate}
                setUpdate={setUpdate}
                setIdUpdate={setIdUpdate}
              />
            );
          })
        ) : (
          <p>Espere</p>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
