import {

FETCH_DATA,
DATA_RECIEVED,
DATA_RECIEVED_OFF,
USER_STATE,
USER_OBJ_CREATED,
DELETE_OBJ,
EDIT_OBJ,
UPDATE_OBJ,
EDIT_OBJ_NONE

} from '../actions/action';

const initialState = {
  test: 'test',
  
  UiPrice:"",
  UiQty:"",
  UiDate:"",
  dataRecieved: false,
  UserState:[],
  UserObjCreated:false,
  currentlyEditingIndex:'none', 
};







export default (state = initialState, action) => {
	switch(action.type) {
    
      
		case FETCH_DATA:

         return Object.assign({},state,{
          UiPrice:action.UiPrice,
          UiQty:action.UiQty,
          UiDate:action.UiDate

          
        })
    case DATA_RECIEVED:
         return Object.assign({},state,{
          dataRecieved: true,
          
        })

    case DATA_RECIEVED_OFF:
         return Object.assign({},state,{
          dataRecieved: false,
          
        })
     case USER_STATE:
         return Object.assign({},state,{
          UserState: [...state.UserState,action.resultObj]
          
        })

     case USER_OBJ_CREATED:
         return Object.assign({},state,{
          UserObjCreated: true
          
        })

     case DELETE_OBJ:
          let number = parseInt(action.deleteObj)
         return Object.assign({},state,{
          UserState: state.UserState.filter( (item, index) => index !== number)
          
        })

     case EDIT_OBJ:
         
         return Object.assign({},state,{
          currentlyEditingIndex: action.editObj
          
        })


      case UPDATE_OBJ:
         return Object.assign({},state,{
          UserState: [...state.UserState.slice(0,action.index),action.UpdateObj,...state.UserState.slice(action.index +1)]
          
        })


      case EDIT_OBJ_NONE:
         
         return Object.assign({},state,{
          currentlyEditingIndex: "none"
          
        })


		default:
	    return state;
	}
}



