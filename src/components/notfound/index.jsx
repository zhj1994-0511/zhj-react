import React, { Component } from 'react'
import  checkLogin from '../../containers/with-checklogin'
@checkLogin
class Notfound extends Component {
  render() {
    return (
      <div>
        404...
      </div>
    )
  }
}
export default Notfound