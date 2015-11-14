'use strict';

import React from 'react';


export default class FilmListItem extends React.Component {
    constructor(props) {
      super(props)
    }
    modifyFilm(){

    }
    diccionarios(){
      
    }
    render() {

      return (
        <div className="show-image" id={this.props.data.ID}>
            <img onClick={this.modifyFilm.bind(this, this.props.data)}
                 src={this.props.data.Foto}
                 title={this.props.data.Nombre}
                 alt={this.props.data.Nombre}
                 width="230"
                 height="345"/>
            <input type="button"
                   className="delete"
                   value="BORRAR">
            </input>
            <div className="diccionarios">
              <button onClick={this.diccionarios.bind(this, this.props.data)}>PALABRAS</button>
            </div>
        </div>

      );
    }
}
