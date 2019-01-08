import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {getWeather} from '../actions';


class SearchBar extends Component {

constructor(props){
   super(props);

   this.state= {term: ''};

   this.onFormSubmit=this.onFormSubmit.bind(this);
   this.onInputChange=this.onInputChange.bind(this);
   
}


onInputChange(e){
   this.setState({term:e.target.value});
}

onFormSubmit(e){
   e.preventDefault();

   this.props.getWeather(this.state.term);
   this.setState({term:''});
   
}


   render() {
      return (
                  <form 
                  // className="form-control" 
                  className="container mt-5"
                  onSubmit={this.onFormSubmit}
                  >
                     
                        <div className="input-group mb-3">
                        
                           <input 
                           
                           value={this.state.term}
                           onChange={this.onInputChange}
                           className="form-control" 
                           placeholder="Enter City Name" 
                           />

                           <div className="input-group-append">
                           
                              <button className="btn btn-dark" type="button">
                                 Submit
                              </button>
                           </div>

                        </div>

                  </form>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return bindActionCreators({getWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);