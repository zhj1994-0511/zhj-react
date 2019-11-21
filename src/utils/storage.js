//数据测持久化cunchu
//存储数据
export function setItem (key,value){
  if(typeof value==='object'){
    //将对象装换为json数据类型
    value=JSON.stringify(value)
  }
  window.localStorage.setItem(key,value)



  // 也可以 try{value=JSON.stringify(value)}finally{ window.localStorage.setItem(key,value)}
}

//获取数据 

export function getItem (key){
 const value= window.localStorage.getItem(key);

 try{
  return JSON.parse(value)//解析
 }catch(e){
   return value
 }
}


//删除数据
export  function removeItem(key){
  window.localStorage.removeItem(key)
}