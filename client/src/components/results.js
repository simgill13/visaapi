
import React from 'react';
import {connect} from 'react-redux';
import {fetchstocks,userObj,dataRecievedOff,deleteObj,editObj,fetch_Update_stocks} from '../actions/action';
import $ from 'jquery';


class Results extends React.Component {
   
  constructor(props) {
      super(props); 
        
    
      this.delete = this.delete.bind(this);
      this.edit = this.edit.bind(this); 
            
    }
   

    componentDidMount() { 
     
    }



   
    delete(index){
      console.log("DeleteCLICKED",index)
      this.props.dispatch(deleteObj(index));
    }




    edit(index){
      console.log("editClicked", index)


      this.props.dispatch(editObj(index));
      
      
      
       
                  
                            
        
    }

      

    render() {

     
     
      
      
      
        const self=this;
        return (
            <ul className="indexBackground">
              
                {this.props.UserState.map(function(entry,index){
                  if(self.props.currentlyEditingIndex === index){
                    return (
                      <div key={index} className="updatediv">
                            <h3> Please update your search </h3>
                              <form  onSubmit={(event) => {
                              event.preventDefault();
                              const UiSymbol = event.target.symbol.value;
                              const UiPrice = event.target.price.value;
                              const UiQty = event.target.Qty.value;
                              const UiDate = event.target.date.value;
                              console.log("LOOKHEREMAN", index)
                              self.props.dispatch(fetch_Update_stocks(UiSymbol,UiPrice,UiQty,UiDate,index)); 
                                         
                          }} className="search-form" >
                            <input className="inputsymbol " name="symbol" type="text" placeholder=" ie. aapl, ie. goog" required></input>
                            <input  className="inputprice " name="price" type="text" placeholder=" price" required></input>
                            <input  className="inputqty " name="Qty" type="text" placeholder=" Qty" required></input>
                            <input  className="inputdate " name="date" type="text" placeholder=" DD/MM/YYYY" required></input><br/>
                            <button className="inputbutton updatetext"><span className="inputbuttontext "> Update </span></button>
                          </form> 
                          
                     </div>
                    )
                  }
                  return (
                    
                      <div id={index} key={index} className="container">
                      
                      <p className=" show"> <span className="symbol"> {entry.symbol}</span> / {entry.userInputQty} *{entry.userInputPrice} = 
                      ${entry.User_Input_Qty_MultiplyBy_User_input_Price} / {entry.userInputDate} </p> 
                      <p className="move"> <span className="price">$ {entry.Api_price}</span> <span className="blackslash"> /</span>
                      <span className="pricetwo"> $ {entry.Users_Qty_MultiplyBy_API_Data_price - entry.User_Input_Qty_MultiplyBy_User_input_Price} </span></p>
                       
                      <button className="inputbutton"  onClick={(event) => {self.delete(index)}} > <span className="inputbuttontext"> delete </span></button>
                      <button  className="inputbutton" onClick={(event) => {self.edit(index)}} ><span className="inputbuttontext"> Edit </span></button>
                      
                      </div>
                    


                  )
                })}
              </ul>

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
currentlyEditingIndex:state.currentlyEditingIndex,

dataRecieved:state.dataRecieved

});

export default connect(mapStateToProps)(Results);