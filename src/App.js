
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//      <h1>hello world</h1>
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import React from 'react';
// class App extends React.Component {
//   render() {
//     return(
//  <h1>hello</h1>
//  )
// }
// }
// export default App;


// import './App.css';
// import React from 'react';
// class App extends React.Component {
//   render() {
//     return(
// <div className="App">
// <header>
//   <form id="to-do-form">
//     <input type="text" placeholder="enter the text">
//     </input>
//     <button type= "submit" >Add</button> 
//   </form>
// </header>
// </div>
//  );
// }
// }

// export default App;

// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items:[],
//       currentItem: {
//         text: "",
//         key: "",
//       },
//     };
//     this.handelInput = this.handelInput.bind(this);
//     this.addItem = this.addItem.bind(this);
//   }

//   handelInput(e){
//     this.setState({
//       currentItem:{
//         text: e.target.value,
//         key:Date.now(),
//       },
//     });
//   }
//   addItem(e){
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     console.log(newItem);
//   }
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <form id="to-do-form" onSubmit={this.addItem}>
//             <input type="text" placeholder="enter text" 
//             value={this.state.currentItem.text}
//             onChange={this.handleInput}>
//             </input>
//             <button type="submit" >Add</button>
//           </form>
//         </header>
//       </div>
//     );
//   }
// }





//06/10/22

// import "./App.css";
// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       currentItem: {
//         text: "",
//         key: "",
//       },
//     };
//     this.handleInput = this.handleInput.bind(this);
//     this.addItem = this.addItem.bind(this);

//   }

//   handleInput(e) {
//     this.setState({
//       currentItem: {
//         text: e.target.value,
//         key: Date.now(),
//       },
//     });
//   }
//   addItem(e){
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     console.log(newItem);
//   }
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <form id="to-do-form" onSubmit={this.addItem}>
//             <input
//               type="text"
//               placeholder="Enter Text"
//               value={this.state.currentItem.text}
//               onChange={this.handleInput}
//             />
//             <button type="submit">Add</button>
//           </form>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;


// 7/10/22






import "./App.css";
import React from "react";
import ListItems from "./ListItems";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){

      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
      this.setState({
        items:filteredItems,
      })
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type="submit">Add</button>
          </form>
        </header>

        <ListItems items = {this.state.items}
        deleteItem={this.deleteItem}>
        </ListItems>
      </div>
    );
  }
}
export default App;





// import "./App.css";
// import React from "react";
// import ListItems from "./ListItems";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
// library.add(faTrash);
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       currentItem: {
//         text: "",
//         key: "",
//       },
//     };
//     this.handleInput = this.handleInput.bind(this);
//     this.addItem = this.addItem.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     this.setUpdate = this.setUpdate.bind(this);
    
//   }

//   handleInput(e) {
//     this.setState({
//       currentItem: {
//         text: e.target.value,
//         key: Date.now(),
//       },
//     });
//   }
 
//   addItem(e) {
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     console.log(newItem);
//     if (newItem.text !== "") {

//       const newItems = [...this.state.items, newItem];
//       this.setState({
//         items: newItems,
//         currentItem: {
//           text: '',
//           key: ''
//         }
//       })
//     }
//   }
//     deleteItem(key){
//       const filteredItems = This.state.items.filter(item =>
//           item.key !== key);
//         this.setState({
//           items: filteredItems,
        
//         } )
//     }

//  setUpdate(text, key){
//   const item=this.state.items;
//   item.map(item =>{
//     if(item.key === key){
//       item.text = text;
//     }
//   })
//   this.setState
// }
//       render() {
//         return (
//           <div className="App" key ={item.key}>
//             <header>
//               <form id="to-do-form" onSubmit={this.addItem}>
//                 <input
//                   type="text"
//                   placeholder="Enter Text"
//                   value={this.state.currentItem.text}
//                   onChange={this.handleInput}
//                 />
//                 <button type="submit">Add</button>
//               </form>
//             </header>
//             <ListItems item={this.state.items}>
//           deleteItem={this.deleteItem}
//           setUpdate={this.setUpdate}
//             </ListItems>
//           </div>
//         );
//       }
//     }
//     export default App;
