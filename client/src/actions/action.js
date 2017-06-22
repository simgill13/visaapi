import base64 from 'base-64';
import {hashHistory} from 'react-router';






export const DATA_RECIEVED = 'DATA_RECIEVED';
export const dataRecieved = () => ({
  type: DATA_RECIEVED,
})

export const DATA_RECIEVED_OFF = 'DATA_RECIEVED_OFF';
export const dataRecievedOff = () => ({
  type: DATA_RECIEVED_OFF,
})
export const USER_OBJ_CREATED = 'USER_OBJ_CREATED';
export const userObjCreated = () => ({
  type: USER_OBJ_CREATED,
})


export const FETCH_DATA = 'FETCH_DATA';
export const fetchdata = (UiPrice,UiQty,UiDate) => ({
  type: FETCH_DATA,
  
  UiPrice,
  UiQty,
  UiDate

})

export const USER_STATE = 'USER_STATE';
export const userState = (resultObj) => ({
  type: USER_STATE,
  resultObj,
 
})
export const DELETE_OBJ = 'DELETE_OBJ';
export const deleteObj = (deleteObj) => ({
  type: DELETE_OBJ,
  deleteObj,
 
})
export const EDIT_OBJ = 'EDIT_OBJ';
export const editObj = (editObj) => ({
  type: EDIT_OBJ,
  editObj,
 
})

export const fetchstocks = (UiSymbol,UiPrice,UiQty,UiDate) => dispatch => {
    console.log("fetching  data..."); 
    fetch(`http://finance.google.com/finance/info?q=NASDAQ:${UiSymbol}`)
    .then(response => { 
      return response.text() 
    })
    .then(text => {
      let dataArray = JSON.parse(text.split('//')[1])

      const resultObj = {
          symbol:dataArray[0].t,
          Api_price:dataArray[0].l,
          userInputPrice: UiPrice,
          userInputQty:UiQty,
          userInputDate:UiDate,
          User_Input_Qty_MultiplyBy_User_input_Price:UiQty * UiPrice,
          Users_Qty_MultiplyBy_API_Data_price:dataArray[0].l * UiQty,
      }
      dispatch(fetchdata(UiPrice,UiQty,UiDate))
      dispatch(userState(resultObj))  
    })
}




export const fetch_Update_stocks = (UiSymbol,UiPrice,UiQty,UiDate,index) => dispatch => {
    console.log("fetching  data..."); 
    fetch(`http://finance.google.com/finance/info?q=NASDAQ:${UiSymbol}`)
    .then(response => { 
      return response.text() 
    })
    .then(text => {
      let dataArray = JSON.parse(text.split('//')[1])

      const resultObj = {
          symbol:dataArray[0].t,
          Api_price:dataArray[0].l,
          userInputPrice: UiPrice,
          userInputQty:UiQty,
          userInputDate:UiDate,
          User_Input_Qty_MultiplyBy_User_input_Price:UiQty * UiPrice,
          Users_Qty_MultiplyBy_API_Data_price:dataArray[0].l * UiQty,
      }

      console.log("FETCH_UPDTE_STOCKS",resultObj)
      dispatch(fetchdata(UiPrice,UiQty,UiDate))  // this should work, just updating the state here
      dispatch(UpdateObj(resultObj,index))  
      dispatch(editObjNone())
    })
}


export const UPDATE_OBJ = 'UPDATE_OBJ';
export const UpdateObj = (UpdateObj,index) => ({
  type: UPDATE_OBJ,
  UpdateObj,
  index
 
})


export const EDIT_OBJ_NONE = 'EDIT_OBJ_NONE';
export const editObjNone = () => ({
  type: EDIT_OBJ_NONE,
  
 
})


















