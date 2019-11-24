import {GetCategories} from '../../api/index';
import {GET} from '../action-types/usermessage'

const getcategory=(category)=>{
return {type:GET,
  data:category}
}

export  const getCategoryAsync=()=>{
  return (dispatch)=>{
    return GetCategories()
    .then((response)=>{
      dispatch(getcategory(response))
    })
  }
}