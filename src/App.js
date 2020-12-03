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
      return [...prevData, note]
    })

    // alert({note});

    console.log(note);
  }

  const onDelete = (id) =>{
    setAddItem((oldData)=>
      oldData.filter((currData, indexx)=>{
        return indexx !== id;
      })
    )
  };

  return(
    <div className='boss'>
      <NewNote passNote={addNote}/>
      {/* <Note/> */}

      <div className="mk">
      {addItem.map((val, index)=>{
        return <Note
          key={index}
          id={index}
          text={val.text}
          deleteItem = {onDelete}
        />
      })
      }
      </div>
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
