// 1. state的使用----------------

// import React, { Component } from 'react';
// //用cc可以联想  
// class App extends Component {
//   state = { 
//     data:'123'
//    }
//   render() { 
//     return ( 
//       <h1>{this.state.data}</h1>
//     );
//   }
// }
 
// export default App;
// ---------------------------------

// 2. state的修改-----------------
//用impc可以联想
// import React, { Component } from 'react';
// // ccc可以联想
// class App extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       date:Date.now()
//      }
//   }
//   handleClick =()=>{
//     this.setState({
//       date:Date.now()
//     })
//   }
//   render() { 
//     return ( 
//       <h1 onClick={this.handleClick}>{this.state.date}</h1>
//      );
//   }
// }
 
// export default App;
//--------------------------------------

//第2遍
// import React, { Component } from 'react';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = { 
//       date:Date.now()
//      }
//   }
//   handleClick =()=>{
//     //记得是由setState来修改state的值！！！！
//     this.setState({date:Date.now()})
//   }
//   render() { 
//     return ( 
//       <h1 onClick={this.handleClick}>{this.state.date}</h1>
//      );
//   }
// }
 
// export default App;
//---------------------------------------------

// 异步
// 

// 第二次异步
// import React, { Component } from 'react';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {  
//       data:'nmsl'
//     }
//   }
//   handleClick=()=>{
//     this.setState({ data: '???' });
//   }
//   render() { 
//     return ( <h1 onClick={this.handleClick}>
//       {this.state.date}
//     </h1> );
//   }
// }
 
// export default App;

//实时获取state的方式
// import React, { Component } from 'react';
// class App extends Component {
//   state = { num:0 }
//   handleClick=()=>{
//     let {num} =this.state
//     num++;
//     // num:num!!! 然后缩写成一个
//     this.setState({ num },()=>{
//       let num1 =this.state.num;
//       if(num1 ===5){
//         alert('好了好了')
//       }
//     });
//   }
//   render() { 
//     return (<h1 onClick={this.handleClick}>{this.state.num}</h1>  );
//   }
// }
 
// export default App;
//-----------------------------------
// import React, { Component } from 'react';
// class App extends Component {
//   state = { num:0 }
//   handleClick=()=>{
//     let {num}=this.state;
//     num++;
//     this.setState({ num  },()=>{
//       let num1 = this.state.num
//       if(num1===5){
//         alert('好了好了')
//       }
//     });
//   }
//   render() { 
//     return ( <h1 onClick={this.handleClick}>
//       {this.state.num}
//     </h1> );
//   }
// }
 
// export default App;
//--------------------------------------

// import React, { Component,Fragment }  from 'react';

// class Home extends Component {
//   render() { 
//     return ( 
//     <h1 style={{backgroundColor:this.props.hColor}}>组件</h1> );
//   }
// }
 
// class Bottom extends Component {
//   render() { 
//     return ( <h1 style={{backgroundColor:this.props.bcolor}}>123</h1> );
//   }
// }

// Home.defaultProps={
//   hColor:'black'
// }
// class App extends Component {
//   state = { 
//     // homeColor:"green",
//     bottomColor:"pink"
//    }
//   render() { 
//     return ( 
//       <Fragment>
//         <h1>父组件</h1>
//         <Home hcolor={this.state.homeColor}></Home>
//         <Bottom bcolor={this.state.bottomColor}></Bottom>
//       </Fragment> );
//   }
// }
 
// export default App;
//------------------------------------------

import React, { Component, Fragment } from 'react';
class App extends Component {
  state = {
    list: ['1', '2', '3', '4'],
    inpValue: ""
  }

  handleInpChange = (e) => {
    let { value } = e.target;
    this.setState({ inpValue: value });

  }
  handleInSetList = () => {
    let { inpValue, list } = this.state;
    let newList = list.filter(v => v !== inpValue);
    newList.push(inpValue);
    this.setState({ list: newList });
  }
  handleItemDelete(i) {
    let { list } = this.state;
    list.splice(i, 1);
    this.setState({ list });
  }
  render() {
    return (
      <Fragment>
        <input value={this.state.inpValue} onChange={this.handleInpChange} type="text" />
        <button onClick={this.handleInSetList}>确定</button>
        <ul>
          {
            this.state.list.map((v, i) =><li key={v} onClick={this.handleItemDelete.bind(this, i)} >{v}</li>)
          }
        </ul>
      </Fragment>
    )
  }
}

export default App;


