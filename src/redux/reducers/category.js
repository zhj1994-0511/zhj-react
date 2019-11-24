import {GET} from '../action-types/usermessage'
const  array =[];
function category(prevState=array,action){
  switch(action.type){
     case GET:
    return action.data   
    default:
      return prevState
  }
 }

 export default category;