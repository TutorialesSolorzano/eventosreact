import React, { Fragment } from "react";
import Header from "./components/Header";
import CategoriasProvider from "./context/CategoriasContext";
import Formulario from "./components/Formulario";
import EventosProvider from "./context/EventosContext";

function App() {
  return (
    <Fragment>
      <Header />

      <div className="uk-container">
        <EventosProvider>
          <CategoriasProvider>
            <Formulario />
          </CategoriasProvider>
        </EventosProvider>
      </div>
    </Fragment>
  );
}

export default App;
