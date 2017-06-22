
import React from 'react';
import {connect} from 'react-redux';
import {fetchstocks,userObj,dataRecievedOff,userObjCreated} from '../actions/action';
import $ from 'jquery';
import Results from './results';

class Home extends React.Component {
   
	constructor(props) {
    	super(props); 
        
      
    }
 	 



   
 
   

    render() {

      let results;
          if (this.props.UserState.length > 0 ) {
          results=<Results/>
        }
        
       
      

        return (
            <div className="mainhomecontainer">
                <div className="formdiv">
                 <form  onSubmit={(event) => {
                      event.preventDefault();
                      const UiSymbol = event.target.symbol.value;
                      const UiPrice = event.target.price.value;
                      const UiQty = event.target.Qty.value;
                      const UiDate = event.target.date.value;
                      this.props.dispatch(fetchstocks(UiSymbol,UiPrice,UiQty,UiDate)); 
                                  
                  }} className="search-form" >
                    <input className="inputsymbol " name="symbol" type="text" placeholder=" ie. aapl, ie. goog" required></input>
                    <input  className="inputprice " name="price" type="text" placeholder=" price" required></input>
                    <input  className="inputqty " name="Qty" type="text" placeholder=" Qty" required></input>
                    <input  className="inputdate " name="date" type="text" placeholder=" DD/MM/YYYY" required></input>
                    <button className="inputbutton plusbutton"><span className="inputbuttontext"> + </span></button>
                  </form> 

                  </div>

                    {results}
                  
              
                  
               
                  
            </div>

        );
    }
}
   
const mapStateToProps = (state) => ({
	
test:state.test,
dataArray:state.dataArray,
UiPrice:state.UiPrice,
UiQty:state.UiQty,
UiDate:state.UiDate,
UserState:state.UserState,
UserObjCreated:state.UserObjCreated,

dataRecieved:state.dataRecieved

});

export default connect(mapStateToProps)(Home);







