
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className='form'>
      <h1>Login form</h1>
      <form>
        <label>Enter username:
          <input type='text'/>
        </label>
        <br/>
        <label>Enter password:
          <input type='text'/>
        </label>
        <br/>
        <button onClick={alert}>Submit</button>

        <script>
          function alert(){
            alert("Form Submitted")
          }
        </script>
      </form>
      </div>
    </div>
  );
}


export default App;
