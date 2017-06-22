
import React from 'react';
import {connect} from 'react-redux';

// import ImageGallery from 'react-image-gallery';
import Home from './home';
import Nav from './nav'




class App extends React.Component {
 
 componentDidMount() {
  
   }

    render() {
       
        return (

            <div className="app">
            	<Nav/>
               <Home />
            </div>
        );
    }
    
}
   


export default connect()(App);



