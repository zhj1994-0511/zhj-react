import  Home from '../components/Home';
import  Notfound from '../components/notfound';
import Login from '../containers/login'
import Category from '../components/layout/production/category/index.jsx'

// export default [

//   {
//     path:'/',
//     component:Home,
//      exact :true
//   },
//   {
//     path:'/login',
//     component:Login,
//     exact :true
//   },

//   {
//     component:Notfound
//   }
// ]

const unauthroutes =[
    {
    path:'/login',
    component:Login,
    exact :true
  },
]

const authroutes=[

    {
    path:'/',
    component:Home,
     exact :true
  },
  {
    path:'/category',
    component:Category,
    exact:true
  },
  {
    component:Notfound
  },
  
]

export  {
  authroutes,
  unauthroutes
}