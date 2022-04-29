import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Formulario from "./components/Formulario";
import crudService from "./services/crudService";

function App() {
  const [datag, setDatag] = useState([]);
  const [update, setUpdate] = useState(null);
  const [dataUpdate, setDataUpdate] = useState({});
  const [idUpdate, setIdUpdate] = useState(null);
  const [render, setRender] = useState(null);

  // se crea un useEfect para llamar la función al inicio de la aplicación
  useEffect(() => {
    crudService()
      .getData()
      .then((res) => {
        setDatag(res.data);
      });
  }, [render]);

  useEffect(() => {
    if (!update) {
      if (dataUpdate) {
        crudService()
          .postData(dataUpdate)
          .then((req) => {
            setRender(Math.random());
          });
      }
    } else {
      // aqui se va hacer la actualización del registro
      if (idUpdate) {
        crudService()
          .updateData(idUpdate, dataUpdate)
          .then((res) => {
            setRender(Math.random());
          });
      }
    }
  }, [dataUpdate, idUpdate, update]);

  return (
    <div className="App">
      <h1 className="title-app">APP DE REGISTROS</h1>

      <CardContainer
        data={datag}
        setDataUpdate={setDataUpdate}
        setUpdate={setUpdate}
        setIdUpdate={setIdUpdate}
        setRender={setRender}
      />

      <div className="formulario-container formulario">
        <Formulario
          setUpdate={setUpdate}
          setDataUpdate={setDataUpdate}
          dataUpdate={dataUpdate}
          update={update}
          idUpdate={idUpdate}
          setIdUpdate={setIdUpdate}
        />
      </div>
    </div>
  );
}

export default App;
