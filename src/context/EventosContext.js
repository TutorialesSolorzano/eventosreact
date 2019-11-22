import React, { Component } from "react";
import Axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = "VWJRHCZDDU6R4C64AJVS";
  ordenar = "date";

  state = {
    evantos: []
  };

  obtenerEventos = async busqueda => {
    let url = `
      https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

    //consultando api
    const eventos = await Axios(url);

    console.log(eventos);
  };

  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.evantos,
          obtenerEventos: this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
