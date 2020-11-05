import React from "react";
import ReactDOM from "react-dom";
import AnnotatorWin from "./AnnotatorWin"

class App extends React.Component{
  constructor(props){
    super(props);
    //this.state = {imgSrc: null, imgName: null};
    this.state = {imgSrc: null}
  }
  
  fileChangedHandler = (event) => {
    const file = event.target.files[0]
    if (file) {
      var imageSrc = null;
      const reader = new FileReader();
      reader.onload = (e) => {
          this.setState({imgSrc: e.target.result})
          //imageSrc = e.target.result;
      }
      reader.readAsDataURL(file);
      //this.setState({imgSrc: imageSrc, imgName: file.name})
    }
  }
  
  render(){
    if(this.state.imgSrc){
      return (
        <div className="App">
          {/* <input type="file" accept="image/*" onChange={this.fileChangedHandler} /> */}
          <AnnotatorWin imgSrc={this.state.imgSrc} />;
        </div>
      );
    }
    return (
      <div className="App">
        <input type="file" accept="image/*" onChange={this.fileChangedHandler} />
      </div>
    );
  }
  // return <AnnotatorWin />;
}

ReactDOM.render(<App />, document.querySelector('#root'))