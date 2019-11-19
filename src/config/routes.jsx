import  Home from '../components/Home';
import  Notfound from '../components/notfound';
import Login from '../components/login'


export default [

  {
    path:'/',
    component:Home,
     exact :true
  },
  {
    path:'/login',
    component:Login,
    exact :true
  },

  {
    component:Notfound
  }
]