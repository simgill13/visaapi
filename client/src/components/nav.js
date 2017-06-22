import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';



import FontAwesome from 'react-fontawesome';
import $ from 'jquery';






class Nav extends React.Component {
 
 componentDidMount() {

      
  
   }

    render() {
       
      return (
        <div className="navBar">
          <div className="leftside">
           <FontAwesome className='fa fa-viacoin navIcon' size='3x' aria-hidden='true'/><h2 className="navText"> Portfolio </h2>
          </div>
          <div className="rightside">
          <ul className="navList" >
            <a href="http://simgill.io/"  target="_blank"><li  className="navElements simran"> Simran Gill  </li> </a>
            <a href="https://www.linkedin.com/in/simran-gill-15687413a/"  target="_blank"><li className="navElements"> LinkedIn  </li></a>
            <a href="https://github.com/simgill13"  target="_blank"><li className="navElements navServices"> GitHub </li></a>
          </ul>
          </div>
        </div>

        )


    }
    
}







export default connect()(Nav);