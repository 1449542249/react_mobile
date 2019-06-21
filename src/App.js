import {connect} from 'react-redux';
import React, { Component,Fragment } from 'react';
const mapStateToProps=(state)=>{
  return{
    num:state.num
  }
}
class App extends Component {
  render() { 
    return ( 
      <Fragment>
        <div>{this.props.num}</div>
        <hr/>
        <div>
          <button >+</button>
          <button>-</button>
        </div>
      </Fragment>
     );
  }
}
 
export default connect(mapStateToProps,null)(App);