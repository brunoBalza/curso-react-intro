import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    let [state, setState] = React.useState(0);

    // console.log(`Hiciste click ${state} veces`);

    return (
      <button 
        className="CreateTodoButton"
        onClick={
          () => {
            setState(state++);
            console.log(`Hiciste click ${state} veces`);
            // console.log(event);
            // console.log(event.target);
          }  
        }
      >+</button>
    );


}


export { CreateTodoButton };