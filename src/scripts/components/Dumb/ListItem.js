'use strict';

import React from 'react';


export default class ListItem extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {

      return (
        <div className="show-image" id={this.props.data.ID}>
            <img src={this.props.data.Foto}
                 title={this.props.data.Nombre}
                 alt={this.props.data.Nombre}
                 width="230"
                 height="345"/>
        </div>

      );
    }
}
