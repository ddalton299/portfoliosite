import React, {Component} from 'react';
import MyPhoto from './IMG_0128.jpg';

class Landing extends Component {
    state = {
        personal:"This is my Life",
        picture:"Picture Goes here", 
        professional:"Prof Here"  
    }
  render(){
    return (
        <div style={this.style}>
          <div  id="upperBack"className="container">
            
            <h1>Denzel Robert Dalton </h1>
            <h4>Technology Professional </h4>
            <h5>Email: ddalton2119@gmail.com</h5>
            <img id="Photo" src={MyPhoto}/>
            <div>
              <a className="btn btn-outline-primary btn-block" href="/AboutMe">About Me</a>
              <a className="btn btn-outline-primary btn-block" href="/AboutSite">About This Site</a>
            </div>
            
                
          </div>
        
        </div>
        
        );      
  }
  style = {
    color: '#5891c7',
    backgroundColor:'#ebeef0'    
  }
}

export default Landing;