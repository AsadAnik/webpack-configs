import React, { Component } from 'react';
import Home from './component/Home';
import Profile from './component/Profile';
import customStyle from './styles/style.module.scss';

// Classical Component..
class App extends Component{
   // Old Classical Constructor..
   constructor(props){
      super(props);

      this.state = {
         name: 'Asad Anik',
         profession: 'Software Engineer'
      };
   }

   // Render Method...
   render(){
      return(
         <React.Fragment>
            <h1 className={customStyle.textColorBlue}>Hello World</h1>
            <Home devname={this.state.name} devpro={this.state.profession} />
            <Profile />
         </React.Fragment>
      );
   }
}
export default App;