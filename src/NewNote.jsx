import React, { Component, useState } from 'react';
import './App.css';
import Modal from 'react-modal';
Modal.setAppElement('#root')

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

function NewNote(props){
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }

    const [note, setNote] = useState({
      text: '',
    });

    const InputEvent = (event) =>{

      const name = event.target.name;
      const value = event.target.value;

      setNote((prevData)=>{
        return {
          ...prevData,
          [name]: value,
        };
      });

      console.log(note);
    };

    const addEvent = () =>{
      props.passNote(note);

      setNote({
        text: '',
      })

      closeModal();
    }
   
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     // subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <div>
          <button className="newBtn" onClick={openModal}>Create New</button>
          <Modal
            id="container1"
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            //style={customStyles}
            contentLabel="Example Modal"
          >
   
            {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
            {/* <button onClick={closeModal}>close</button> */}
          
  
            <form action="">
            {/* <Input value={input} onChange={event => setInput(event.target.value)}/> */}
                <textarea 
                  name="text"
                  //value={note}
                  value={note.text}
                  onChange={InputEvent}
                  id="tarea" 
                  placeholder="write note..." 
                  maxLength="96"></textarea>
                <svg onClick={addEvent} id="tik" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"/>
                </svg>
                {/* <CloseIcon onClick={closeModal} /> */}
                <svg onClick={closeModal} id="cros" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                   <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </form>
  
          </Modal>
        </div>
      );

}

export default NewNote ;