import React from 'react';
import {getAllFilms} from '../../actions'
import { connect } from 'react-redux';
import FilmListItem from '../Films/FilmListItem';


class Films extends React.Component {

  constructor(props) {
    super(props);
    this.state = { films: '' };
  }
  componentDidMount(){
    const {films, dispatch } = this.props;

    var data = dispatch(getAllFilms());

  }

  render() {
    const   { films } = this.props

    if(films.length > 0){
      var list = films.map((film, i) => {
        return (
          <FilmListItem key={film.ID} data={film}/>
        );

      });

    }
    return(
      <div className="films">
        <div id='films' className="films">
          {list}
        </div>
      </div>
    )
 }
}
function mapStateToProps(state) {
  return { films: state.films }
}
export default connect(mapStateToProps)(Films)
