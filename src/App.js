import React from 'react';
import RouterIndex from "./router/index"
import MainHeader from "./views/main-header"
import MainFooter from "./views/main-footer"
import "./views/index.css"
class App extends React.Component{
  render(){
    return(
          <div className="pageWrap">
            <MainHeader></MainHeader>
            <div className="main">
              <RouterIndex></RouterIndex>
            </div>
            <MainFooter></MainFooter>
          </div>
    )
  }
}
export default App;
