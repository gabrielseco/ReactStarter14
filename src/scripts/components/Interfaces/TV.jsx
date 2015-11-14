import React from 'react';
import {getAllTV} from '../../actions'
import { connect } from 'react-redux';
import ListItem from '../Dumb/ListItem';


class TV extends React.Component {

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    const {dispatch } = this.props;

    var data = dispatch(getAllTV());

  }

  render() {
    const { TV } = this.props

    if(TV.length > 0){
      var list = TV.map((TV, i) => {
        return (
          <ListItem key={TV.ID} data={TV}/>
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
  return { TV: state.TV }
}
export default connect(mapStateToProps)(TV)
