import logo from './logo.svg';
import './App.css';
import Hello from './sayHello';
import React, { useState } from 'react';
import { Component } from 'react';
import NewNote from './NewNote';
import Note from './notes'





 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
 
function App(){
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) =>{
    
    setAddItem((prevData)=>{
      return [...prevData, ]
    })

    // alert({note});

    console.log(note);
  }

  return(
    <div>
      <NewNote passNote={addNote}/>
      {/* <Note/> */}

      {addItem.map((val, index)=>{
        return <Note
          key={index}
          // id={index}
          text={val.text}

          
        />
      })
}
    </div>
  );
}

// function clickHandler( ) {
//   console.log('btn clickesdvfghjkl');
// }

// class App extends Component{
//   state = {
//     visible: false
//   };

// function App() {

//   return (
//     // <div>
//     //   {this.state.visible ?  <Hello/> : null}
//     //   <button onClick={()=>{
//     //       this.setState({ visible: true});
      
//     //   }}>MO</button>
//     //   <h1>Sticky Notes</h1>
//     //   <button onClick={clickHandler}>MONIR</button>
//     //   {/* <Hello/> */}
//     // </div>



//   );

// }

export default App;
