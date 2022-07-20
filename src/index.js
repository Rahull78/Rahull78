// 1.  Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM  from 'react-dom/client';

// 2.  Get a reference to the div with ID root
const el = document.getElementById('root');

// 3.  Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4.  Create a Componant
function App() {
    
    return  <div><h1>Hii Rahul here!</h1> <h2>Hii how are you?</h2></div>
}

// 5.  Show the componaent on the screen
root.render(<App />);